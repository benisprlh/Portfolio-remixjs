import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
    const sectionRef = useRef(null);
    const hasAnimated = useRef(false); // Ref to track if animation has run

    // Typing animation logic
    useEffect(() => {
        const currentText = texts[textIndex];
        const typingInterval = setInterval(() => {
            if (!isDeleting) {
                // Add character
                if (text.length < currentText.length) {
                    setText((prev) => prev + currentText[text.length]);
                } else {
                    // If reached end of the text, start deletion
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000);
                }
            } else {
                // Remove character
                if (text.length === 1) { // When only one character is left
                    console.log("masuk ini pas")
                    console.log(text)
                    setText(texts[(textIndex + 1) % texts.length][0]);
                    clearInterval(typingInterval);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
                    console.log(textIndex, "<<< ini text indexnya")
                    setIsDeleting(false); // Reset deleting state
                    return
                } else if (text.length === 0) {
                    // If text is completely deleted, set to the first character of the next text
                    setText(texts[(textIndex + 1) % texts.length][0]);
                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to the next text
                    setIsDeleting(false); // Reset deleting state
                    return
                }
                setText((prev) => prev.slice(0, -1));
            }
        }, isDeleting ? 75 : 110);

        return () => clearInterval(typingInterval);
    }, [text, textIndex, isDeleting]);

    // Handle scroll position for rotating elements
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.section
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hasAnimated.current ? 1 : 0, y: hasAnimated.current ? 0 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onAnimationComplete={() => {
                hasAnimated.current = true; // Mark that the animation has run
            }}
            className="min-h-[60vh] flex flex-col-reverse gap-12 lg:gap-48 lg:flex-row justify-between items-center"
        >
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
                        className="lg:text-4xl text-lg block pt-9"
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
        </motion.section>
    );
};

export default HeroSection;
