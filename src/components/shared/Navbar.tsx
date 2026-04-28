"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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

    const closeMenu = () => setIsOpen(false);


    return(
        <header 
            className={cn('fixed top-0 w-full z-50  bg-background backdrop-blur-md transition-all duration-300 ease-in-out',
                isScroll && 'opacity-70'
            )}>
            <div className="md:hidden flex px-4 py-4 items-center relative">
                <button 
                    className="text-foreground focus:outline-none hover:cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    { isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>
            <div className="hidden md:flex px-6 py-2 justify-between items-center">
                <div className="flex items-center gap-x-5">
                    <Link href="/" className="flex items-center font-semibold">
                        <div className="relative w-16 h-16">
                            <Image 
                                src="/images/logo.svg" 
                                alt="App Logo"
                                fill
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </Link>
                    <nav className="space-x-3">
                        <Link href="/" className="p-2 hover:bg-gray-100 rounded-full">Beranda</Link>
                        <Link href="#features" className="p-2 hover:bg-gray-100 rounded-full">Fitur</Link>
                        <Link href="#pricing" className="p-2 hover:bg-gray-100 rounded-full">Tampilan Aplikasi</Link>
                    </nav>
                </div>
                <Link href="#pricing">
                    <Button>
                        < Download className="mr-2" /> Unduh Aplikasi
                    </Button>
                </Link>
            </div>
            {isOpen && (
                <div className="md:hidden bg-background">
                    <nav className="flex flex-col px-6  pb-2 text-sm font-medium text-foreground">
                        <Link href="/" className="p-2  hover:bg-gray-100 rounded-full">Beranda</Link>
                        <Link href="/" className="p-2  hover:bg-gray-100 rounded-full">Fiture</Link>
                        <Link href="/" className="p-2  hover:bg-gray-100 rounded-full">Tampilan Aplikasi</Link>
                    </nav>
                </div>
            )}
        </header>
    )
};