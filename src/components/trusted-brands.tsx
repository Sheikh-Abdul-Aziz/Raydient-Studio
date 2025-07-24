import { motion } from "motion/react";
import React from "react";

const brands = [
    {
        url: "/light.svg"
    },
    {
        url: "/dark.svg"
    },
    {
        url: "/light.svg"
    },
    {
        url: "/dark.svg"
    },
    {
        url: "/light.svg"
    },
    {
        url: "/dark.svg"
    },
    {
        url: "/light.svg"
    }
];

export default function Partners() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden max-w-7xl mx-auto">
            {/* Marquee container */}
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="flex shrink-0">
                    {brands.map((brand, index) => {
                        return (
                            <div key={index} className="flex items-center justify-center pr-20">
                                <img src={brand.url}/>
                            </div>
                        );
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="flex shrink-0">
                    {brands.map((brand, index) => {
                        return (
                            <div key={index} className="flex items-center justify-center pr-20">
                                 <img src={brand.url}/>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
          
        </div>
    );
}