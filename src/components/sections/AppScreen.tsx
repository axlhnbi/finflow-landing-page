'use client';

import { useRef, useEffect } from "react";
import AppScreenCard from "../ui/AppScreenCard"

export default function AppScreen () {

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const autoScroll = setInterval(() => {
            const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 2;

            if(isAtEnd) {
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            }else {
                scrollContainer.scrollBy({ left: scrollContainer.clientWidth * 0.8, behavior: 'smooth' });
            }
        }, 3000)
        return () => clearInterval(autoScroll);
    }, []);

    return(
        <section id="appscreen" className="w-full max-w-6x mx-auto px-4 pt-16 flex flex-col">
            <div className="text-center mb-12">
                <h2 className="text-4xl">Tampilan Aplikasi</h2>
            </div>
            <div
                ref={scrollRef} 
                className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 px-4 snap-x snap-mandatory scrollbar-hide"
             >
                <div className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                    <AppScreenCard imageUrl="/images/appc1.webp" />
                </div>
                <div className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                    <AppScreenCard imageUrl="/images/appc2.webp" />
                </div>
                <div className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                    <AppScreenCard imageUrl="/images/appc3.webp" />
                </div>
                <div className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                    <AppScreenCard imageUrl="/images/appc4.webp" />
                </div>
            </div>
        </section>
    )
}