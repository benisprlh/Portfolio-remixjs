import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }: any) => {
    return (
        <div className="flex MyGradient">
            {/* First loop for rendering the icons */}
            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((Icon: any, index: any) => {
                    return <Icon key={index} className="h-28 w-32 lg:h-36 lg:w-40 pr-20 text-white" />;
                })}
            </motion.div>

            {/* Optional second loop if you have separate images to render */}
            <motion.div
                initial={{ x: `${from}` }}
                animate={{ x: `${to}` }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="flex flex-shrink-0"
            >
                {images.map((Icon: any, index: any) => {
                    return <Icon key={index} className="h-28 w-32 lg:h-36 lg:w-40 pr-20 text-white" />;
                })}
            </motion.div>
        </div>
    );
};

export default MarqueeItem;
