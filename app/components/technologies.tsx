import React, { Suspense, lazy, useEffect, useRef, useState } from "react";

const MarqueeSection = lazy(() => import("./marquee"));

function Technologies() {
    const [loadMarquee, setLoadMarquee] = useState(false);

    // Create refs for sections
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === aboutRef.current) {
                            setLoadMarquee(true);
                        }
                    }
                });
            },
            { threshold: 0.1 } // load when 10% of the section is visible
        );

        // Observe sections
        if (aboutRef.current) observer.observe(aboutRef.current);

        // Cleanup observer on unmount
        return () => {
            if (aboutRef.current) observer.unobserve(aboutRef.current);
        };
    }, []);
    return (
        <section className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl text-white">Skills</h2>
            <div ref={aboutRef}>
                {loadMarquee ? (
                    <Suspense fallback={<div>Loading About...</div>}>
                        <MarqueeSection />
                    </Suspense>
                ) : (
                    <div>Scroll to load About section...</div>
                )}
            </div>
        </section>
    );
}

export default Technologies;
