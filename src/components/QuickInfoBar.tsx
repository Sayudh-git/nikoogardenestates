import { Building2, Ruler, Home, IndianRupee } from "lucide-react";

export default function QuickInfoBar() {
    return (
        <section className="py-12 bg-white border-y border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-around items-center gap-8">
                    <div className="flex flex-col items-center">
                        <Home className="w-12 h-12 text-primary mb-2" />
                        <p className="text-sm font-medium text-muted-foreground">
                            Possession Onwards
                        </p>
                        <p className="text-lg font-bold text-foreground">2025</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Ruler className="w-12 h-12 text-primary mb-2" />
                        <p className="text-sm font-medium text-muted-foreground">
                            Land Area
                        </p>
                        <p className="text-lg font-bold text-foreground">50 Acres</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Building2 className="w-12 h-12 text-primary mb-2" />
                        <p className="text-sm font-medium text-muted-foreground">
                            Total Units
                        </p>
                        <p className="text-lg font-bold text-foreground">2000+</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <IndianRupee className="w-12 h-12 text-primary mb-2" />
                        <p className="text-sm font-medium text-muted-foreground">
                            Starting Price
                        </p>
                        <p className="text-lg font-bold text-foreground">₹1.27 Lakhs</p>
                    </div>

                    <div>
                        <button className="px-8 py-3 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors">
                            DOWNLOAD BROCHURE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
