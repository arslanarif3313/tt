"use client";
import { useEffect } from "react";

export default function ScrollSlide({ children }) {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(".slide-up, .slide-left, .slide-right");
            const windowHeight = window.innerHeight;

            elements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 100; // trigger before fully visible

                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once on load

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return children;
}
