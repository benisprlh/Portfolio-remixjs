import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const MarqueeSection = lazy(() => import("./marquee"));

function Technologies() {
    const [loadMarquee, setLoadMarquee] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
                        setIsVisible(true); // Set to true when the section is in view
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
        <motion.section
            className="border-b border-neutral-800 pb-24"
            initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and moved down
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // Animate to opacity 1 and move up
            transition={{ duration: 1 }} // Set duration for the transition
        >
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
        </motion.section>
    );
}

export default Technologies;
