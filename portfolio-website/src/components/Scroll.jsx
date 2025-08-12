
import React from "react";
import {motion } from "framer-motion";
import "../css/scroll.css";
import { FaChevronUp } from "react-icons/fa";

export default function Scroll() {

    return (
        <motion.div
            className="scroll"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>
                <button className="scroll__button">
                    <a href="#home"><FaChevronUp className="scroll__icon" /></a>
                </button>
            </motion.div>
    )
}