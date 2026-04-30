interface Feature {
    imageUrl: string;
    title: string;
    description: string;
}

export const FEATURES: Feature[] = [
    {
        imageUrl: "/images/featurec1.webp",
        title: "Lacak Transaksi Harian",
        description: "Kelola pemasukan dan pengeluaran harian dengan antarmuka yang intuitif dan cepat."
    },
    {
        imageUrl: "/images/featurec2.webp",
        title: "Arus Kas Real-time",
        description: "Monitor arus kas Anda secara langsung melalui grafik interaktif yang mudah dipahami."
    },
    {
        imageUrl: "/images/featurec3.webp",
        title: "Kategori Pintar",
        description: "Kategorisasi dompet dan transaksi secara otomatis untuk pengaturan keuangan yang lebih rapi."
    }
]