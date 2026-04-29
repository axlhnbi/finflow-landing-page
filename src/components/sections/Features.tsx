import FeaturedCard from "../ui/FeatureCard";

export default function Features() {
    return (
        <section id="features" className="w-full max-w-6x mx-auto px-4 pt-16 flex flex-col">
            <div className="text-center mb-12">
                <h2 className="text-4xl">Fitur Utama</h2>
            </div>
            <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible px-4 snap-x snap-mandatory scrollbar-hide">   
                <div className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                    <FeaturedCard
                        imageUrl="/images/featurec1.webp"
                        title="Lacak Transaksi Harian"
                        description="Kelola pemasukan dan pengeluaran harian dengan antarmuka yang intuitif dan cepat."
                    />
                </div>
                <div className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                    <FeaturedCard
                        imageUrl="/images/featurec2.webp"
                        title="Arus Kas Real-time"
                        description="Monitor arus kas Anda secara langsung melalui grafik interaktif yang mudah dipahami."
                    />
                </div>
                <div className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                    <FeaturedCard
                        imageUrl="/images/featurec3.webp"
                        title="Kategori Pintar"
                        description="Kategorisasi dompet dan transaksi secara otomatis untuk pengaturan keuangan yang lebih rapi."
                    />
                </div>
            </div>
        </section>
    )
}