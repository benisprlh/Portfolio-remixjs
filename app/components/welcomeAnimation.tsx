import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WelcomeAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const text = "Welcome to Ben's Portfolio";

    useEffect(() => {
        if (currentLetterIndex < text.length) {
            const timer = setTimeout(() => {
                setCurrentLetterIndex((prevIndex) => prevIndex + 1);
            }, 5); // Each letter appears after 0.1 second
            return () => clearTimeout(timer);
        } else {
            // When all letters are displayed, call onComplete after a small delay
            const finishTimer = setTimeout(() => {
                onComplete();
            }, 1500); // Delay before finishing the animation
            return () => clearTimeout(finishTimer);
        }
    }, [currentLetterIndex, text.length, onComplete]);

    return (
        <motion.div
            className="flex items-center justify-center min-h-screen bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex gap-1">
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        className="text-white md:text-2xl text-lg lg:text-4xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: index <= currentLetterIndex ? 1 : 0,
                            y: index <= currentLetterIndex ? 0 : 50,
                        }}
                        transition={{
                            duration: 1, // Control how long each letter takes to animate
                            ease: "easeInOut",
                            delay: index * 0.05, // Delay for each letter
                        }}
                    >
                        {letter === " " ? "\u00A0" : letter} {/* Handle spaces */}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
};

export default WelcomeAnimation;
