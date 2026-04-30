"use client";

import { WindArrowDown } from "lucide-react";
import { useEffect } from "react";

export default function ActiveSectionObserver() {
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        const id = entry.target.id;
                        const newUrl = id == 'hero' ? window.location.pathname : `#${id}`;
                        window.history.replaceState(null, '', newUrl);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        }
    }, [])

    return null;
}