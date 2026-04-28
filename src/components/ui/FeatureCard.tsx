import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function FeaturedCard({ icon: Icon, title, description }: FeatureCardProps) {
    return (
        <div className="group relative flex flex-col items-center p-8 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] cursor-pointer">
            <div className="relative flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-linear-to-br from-blue-50 via white to-purple-50 shadow-inner">
                <Icon className="relative z-10 w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20 rounded-full transition-opacity duration-300 group-hover:opacity-40"></div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 text-center tracking-tight">
                {title}
            </h3>
            <p className="text-sm text-gray-500 text-center leading-relaxed">
                {description}
            </p>
        </div>
    )

}