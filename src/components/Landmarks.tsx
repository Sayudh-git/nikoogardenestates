import { Mountain, Plane, Building2, Train, ShoppingBag, MapPin } from "lucide-react";

export default function Landmarks() {
    const landmarks = [
        {
            icon: Mountain,
            text: "OPP PRESTIGE CLOUD TECH PARK",
        },
        {
            icon: Plane,
            text: "BEFORE AIRPORT TOLL GATE",
        },
        {
            icon: Building2,
            text: "AEROSPACE SEZ 26 MINS",
        },
        {
            icon: Building2,
            text: "JW MARRIOT 500 MTRS",
        },
        {
            icon: ShoppingBag,
            text: "PRESTIGE MALL 500 MTRS",
        },
        {
            icon: Train,
            text: "DODDAJALA METRO STATION 500 MTRS",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 uppercase tracking-wide">
                    LANDMARKS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto mb-16">
                    {landmarks.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex items-center gap-6">
                                <div className="flex-shrink-0">
                                    <Icon className="w-12 h-12 text-foreground stroke-1" />
                                </div>
                                <p className="text-lg font-bold text-foreground uppercase leading-tight max-w-[200px]">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <button className="px-8 py-4 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors shadow-lg">
                        DOWNLOAD BHARTIYA GARDEN ESTATE BROCHURE
                    </button>
                </div>
            </div>
        </section>
    );
}
