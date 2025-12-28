"use client";

import { MapPin, Building2, Landmark } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function About() {
    const { openModal } = useContactModal();
    return (
        <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            About Bhartiya Garden Estate
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Bhartiya Garden Estate, an integral part of the prestigious
                            Bhartiya City, is crafted to bring together modern living,
                            timeless design, and exceptional craftsmanship. Conceived with the
                            vision of creating world-class residential spaces, this
                            development offers the perfect blend of luxury, comfort, and
                            convenience in one of Bangalore's most desirable locations.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            With spacious, Vastu-compliant homes and a thoughtfully curated
                            range of premium amenities, it promises an elevated living
                            experience tailored for today's modern families. Built on the
                            principles of quality, innovation, and integrity, Bhartiya Garden
                            Estate reflects the developer's unwavering commitment to
                            excellence.
                        </p>
                        <button
                            onClick={openModal}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-gold text-foreground font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Get A CallBack
                            <span>→</span>
                        </button>
                    </div>

                    {/* Landmarks */}
                    <div className="space-y-4">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">
                                        Doddajala Metro Station
                                    </h3>
                                    <p className="text-sm text-muted-foreground">500 Meters</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">
                                        Prestige Cloud Tech Park
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Right Opposite
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Landmark className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-1">
                                        Aerospace SEZ
                                    </h3>
                                    <p className="text-sm text-muted-foreground">26 Minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
