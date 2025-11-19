import Image from "next/image";

export default function MasterPlan() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-bold uppercase text-center text-foreground mb-12">
                    MASTER PLAN
                </h2>

                <div className="flex justify-center">
                    <div className="relative w-full max-w-5xl h-[600px]">
                        <Image
                            src="/assets/new-masterplan.jpg"
                            alt="Nikoo Homes Master Plan"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
