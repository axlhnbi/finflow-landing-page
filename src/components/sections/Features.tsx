import FeaturedCard from "../ui/FeatureCard";
import { FEATURES } from "@/data/features";

export default function Features() {
    return (
        <section id="features" className="w-full max-w-6x mx-auto px-4 pt-16 flex flex-col">
            <div className="text-center mb-12">
                <h2 className="text-4xl">Fitur Utama</h2>
            </div>
            <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible px-4 snap-x snap-mandatory scrollbar-hide">   
                { FEATURES.map((feature, index ) => (
                    <div key={index} className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                        <FeaturedCard
                            imageUrl={feature.imageUrl}
                            title={feature.title}
                            description={feature.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}