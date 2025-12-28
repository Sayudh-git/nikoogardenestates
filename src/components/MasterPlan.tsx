import Image from "next/image";

export default function MasterPlan() {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center text-black mb-2 sm:mb-3 md:mb-6">
                    MASTER PLAN
                </h2>

                {/* Image Container - Full Width on Mobile, Constrained on Desktop */}
                <div className="w-full">
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[700px] xl:h-[800px]">
                        <Image
                            src="/assets/new-masterplan.jpg"
                            alt="Nikoo Homes Master Plan"
                            fill
                            className="object-contain"
                            quality={100}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}