import Image from "next/image";
import Button from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full h-[99vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/hero-bg-deskstop.png" 
                    alt="App Dashboard Background Deskstop"
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                    className="object-cover object-center hidden md:block"
                />
                 <Image 
                    src="/images/hero-bg-mobile.png" 
                    alt="App Dashboard Background Mobile"
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                    className="object-cover object-center md:hidden"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="realtive z-10 max-w-4xl px-4 text-center text-white">
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                    Kelola Keungan Anda Dengan FinFlow
                </h1>
                <p className="mb-8 text-lg text-gray-200 md:text-2xl">
                    Kelola pemasukan dan pengeluaran harian, monitor arus kas, dan atur transaksi secara cerdas
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Button size="lg" variant="primary" className="md:w-max w-full">
                        < Download className="mr-2" /> Unduh Aplikasi
                    </Button>
                    <Button size="lg" variant="secondary" className="md:w-max w-full">Pelajari Fitur</Button>
                </div>
            </div>
        </section>
    )
}