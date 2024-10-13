import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [text, setText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const texts = [
        "Nice to meet you!",
        "Welcome to my portfolio!",
        "Hope you enjoy your visit!",
    ];

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const currentText = texts[textIndex];
        const typingInterval = setInterval(() => {
            if (!isDeleting) {
                // Add character
                if (text.length !== currentText.length - 1) setText((prev) => prev + currentText[text.length]);

                if (text.length === currentText.length - 1) {
                    clearInterval(typingInterval); // Stop typing interval
                    // Set delay before starting to delete
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000); // Delay before starting to delete
                }
            } else if (isDeleting) {
                // Remove character
                setText((prev) => prev.slice(0, -1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }
        }, isDeleting ? 75 : 110); // Speed up deleting

        return () => clearInterval(typingInterval); // Cleanup interval on unmount
    }, [text, textIndex, isDeleting]); // Depend on text, textIndex, and isDeleting

    return (
        <section className="min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-48 lg:flex-row justify-between items-center">
            <div className="space-y-10 text-center lg:text-left">
                <h2 className="text-2xl lg:text-7xl font-bold text-gray-200">
                    <span className="underline underline-offset-8 decoration-green-500">
                        {"I'm Beni Saprulah."}
                    </span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl block pt-9"
                        style={{ minHeight: '48px' }}
                    >
                        {text}
                    </motion.span>
                </h2>

                <p className="w-full text-lg text-gray-300">
                    {
                        "I am a Fullstack Developer based in Indonesia, passionate about building modern web applications that users love. With extensive experience in both frontend and backend development, I am dedicated to creating efficient and innovative technological solutions. From crafting engaging user interfaces to implementing complex server-side logic, I have the skills and commitment to turn ideas into reality."
                    }
                </p>
            </div>
            <div>
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <motion.div
                            style={{
                                rotate: -scrollPosition * 0.2, // Adjust rotation speed
                            }}
                            className="w-32 h-32 rounded-2xl bg-green-500"
                        />
                        <motion.div
                            style={{
                                rotate: -scrollPosition * 0.2, // Adjust rotation speed
                            }}
                            className="w-32 h-32 rounded-2xl bg-indigo-500"
                        />
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <motion.div
                            style={{
                                rotate: scrollPosition * 0.2, // Adjust rotation speed
                            }}
                            className="w-32 h-32 rounded-2xl bg-indigo-500"
                        />
                        <motion.div
                            style={{
                                rotate: scrollPosition * 0.2, // Adjust rotation speed
                            }}
                            className="w-32 h-32 rounded-2xl bg-green-500"
                        />
                    </div>
                    <div className="glow rounded-full absolute top-[40%] right-1/2 -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
