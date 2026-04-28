import FeaturedCard from "../ui/FeatureCard"
import { LineChart, Wallet, PieChart } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="w-full max-w-6x mx-auto px-4 pt-16 flex flex-col">
            <div className="text-center mb-12">
                <h2 className="text-4xl">Fitur Utama</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeaturedCard
                    icon={LineChart}
                    title="Lacak Transaksi Harian"
                    description="Kelola pemasukan dan pengeluaran harian dengan antarmuka yang intuitif dan cepat."
                />
                <FeaturedCard
                    icon={Wallet}
                    title="Arus Kas Real-time"
                    description="Monitor arus kas Anda secara langsung melalui grafik interaktif yang mudah dipahami."
                />
                <FeaturedCard
                    icon={PieChart}
                    title="Kategori Pintar"
                    description="Kategorisasi dompet dan transaksi secara otomatis untuk pengaturan keuangan yang lebih rapi."
                />
            </div>
        </section>
    )
}