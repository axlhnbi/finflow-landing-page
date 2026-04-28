
import Image from "next/image";

interface FeatureCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

export default function FeaturedCard({ imageUrl, title, description }: FeatureCardProps) {
    return (
        <div className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="relative flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-inner">
                <Image 
                    src={imageUrl} 
                    alt="Category Image" 
                    fill 
                    priority 
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-blue-10 blur-xl opacity-20 rounded-full transition-opacity duration-300 group-hover:opacity-40"></div>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900 text-center tracking-tight">
                {title}
            </h3>
            <p className="text-sm text-gray-500 text-justify leading-relaxed">
                {description}
            </p>
        </div>
    )

}