import Image from "next/image";

export default function IntroSection() {
    return (
        <section id="overview" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    {/* Left Column - Text (60%) */}
                    <div className="md:col-span-3">
                        <h2 className="text-4xl md:text-5xl font-bold uppercase text-foreground mb-4">
                            BHARTIYA CITY NIKOO HOMES II
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Thanisandra Main Road, Bangalore
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Nikoo Homes is a family of districts brought together by green and
                            connected by convenience. With green spaces artfully blended with
                            thoughtfully designed residences, Nikoo Homes provides a holistic
                            living experience.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            The master plan integrates residential units with world-class
                            amenities, parks, and recreational facilities creating a truly
                            self-sustained ecosystem for modern families.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Located in one of Bangalore's most rapidly developing corridors,
                            this premium enclave offers unmatched connectivity and lifestyle
                            convenience.
                        </p>
                        <button className="px-8 py-3 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors">
                            READ MORE
                        </button>
                    </div>

                    {/* Right Column - Image (40%) */}
                    <div className="md:col-span-2">
                        <div className="relative w-full h-[400px]">
                            <Image
                                src="/assets/feature-banner.jpg"
                                alt="Nikoo Homes Estate"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
