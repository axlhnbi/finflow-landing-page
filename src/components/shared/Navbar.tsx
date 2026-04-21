"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);  
    }, []);


    return(
        <header 
            className={cn('fixed top-0 w-full z-50  bg-background backdrop-blur-md border-b border-blue-950 transition-all duration-300 ease-in-out',
                isScroll && 'opacity-70'
            )}>
            <div className="flex container mx-auto px-6 py-2 justify-between items-center">
                <Link href="/" className="flex items-center font-semibold">
                    <div className="relative w-16 h-16">
                        <Image 
                            src="/images/logo.svg" 
                            alt="App Logo"
                            fill
                            className="object-contain w-full h-auto"
                        />
                    </div>
                    <span>FinFlow App</span>
                </Link>
                <nav className="space-x-8">
                    <Link href="/" className="font-semibold">Beranda</Link>
                    <Link href="#features" className="font-semibold">Fitur</Link>
                    <Link href="#pricing" className="font-semibold">Tampilan Aplikasi</Link>
                    <Link href="#pricing" className="font-semibold">Keamanan</Link>
                    <Link href="#pricing" className="font-semibold">Unduh</Link>
                </nav>
            </div>
        </header>
    )
};