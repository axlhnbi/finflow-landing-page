import Image from "next/image";

interface AppScreenCardProps {
    imageUrl: string;
}

export default function AppScreenCard({ imageUrl }: AppScreenCardProps) {
    return (
        <div className="group relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="relative flex items-center justify-center w-50 h-75">
                <Image 
                    src={imageUrl}
                    alt="App Screen Image"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                    className="objective-cover object-center"
                />
            </div>
        </div>
    )
}