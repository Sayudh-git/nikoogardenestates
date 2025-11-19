import Image from "next/image";

export default function MasterPlan() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-center text-foreground mb-12">
                    THE GREAT WIDE OPEN
                </h2>

                <div className="grid md:grid-cols-3 gap-12 items-start">
                    {/* Left Column - Description */}
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Master Plan
                        </h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li>• Sprawling green landscapes</li>
                            <li>• Thoughtfully planned layout</li>
                            <li>• Multiple recreational zones</li>
                            <li>• Central park and gardens</li>
                            <li>• Well-connected internal roads</li>
                            <li>• Dedicated amenity blocks</li>
                        </ul>
                    </div>

                    {/* Right Column - Master Plan Image */}
                    <div className="md:col-span-2">
                        <div className="relative w-full h-[600px]">
                            <Image
                                src="/assets/new-masterplan.jpg"
                                alt="Nikoo Homes Master Plan"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
