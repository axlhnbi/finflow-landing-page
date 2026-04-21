import Image from "next/image"

export default function Hero(){
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/images/hero-bg.png" 
                    alt="App Dashboard Background"
                    fill 
                    priority 
                    quality={90} 
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="realtive z-10 max-w-4xl px-4 text-center text-white">
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                    Kelola Keungan Anda Dengan FinFlow
                </h1>
                <p className="mb-8 text-lg text-gray-200 md:text-2xl">
                    Kelola pemasukan dan pengeluaran harian, monitor arus kas, dan atur transaksi secara cerdas
                </p>
                <div className="flex justify-center gap-4">
                    <button className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
                        Unduh Aplikasi
                    </button>
                    <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/20">
                        Pelajari Fitur
                    </button>
                </div>
            </div>
        </section>
    )
}