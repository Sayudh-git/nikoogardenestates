"use client";

import Image from "next/image";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function IntroSection() {
    const { openModal } = useContactModal();
    return (
        <section id="overview" className="relative bg-white">
            {/* Mobile Layout - Text Only */}
            <div className="md:hidden px-4 sm:px-6 py-8 sm:py-12">
                <h2 className="text-3xl sm:text-4xl font-normal uppercase text-black mb-4 leading-tight">
                    BHARTIYA GARDEN ESTATE
                    NIKOO HOMES 7
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 font-medium">
                    At Sadahalli, North Bangalore
                </p>
                <p className="text-gray-600 leading-relaxed text-base mb-8">
                    Bhartiya Garden Estate is the latest landmark township from the prestigious Bhartiya City developers, strategically positioned in Sadahalli, North Bangalore. Designed to redefine urban living, this premium residential enclave offers a thoughtfully planned mix of apartments, duplexes, row houses, and villas—all set amidst refreshing green landscapes. Located in one of Bangalore's most rapidly developing corridors, Nikoo Garden Estate ensures seamless connectivity and everyday convenience. The project sits opposite Prestige Cloud Tech Park, right before the Airport Toll Gate, and is just 26 minutes away from the Aerospace SEZ. With homes starting at ₹1.27 Lakhs onwards*, it perfectly balances lifestyle, accessibility, and long-term investment value. Carrying forward the architectural brilliance and lifestyle innovation that made the Nikoo Homes brand iconic, this township is envisioned to elevate community living with world-class amenities, sustainable design, and easy access to North Bangalore's IT and industrial hubs. Whether you seek the comfort of a spacious apartment, the sophistication of a duplex, or the elegance of a villa, Bhartiya Nikoo Garden Estate, Sadahalli, offers a dream home for every family.
                </p>
                <button 
                    onClick={openModal}
                    style={{ backgroundColor: '#ec202d' }} 
                    className="px-8 py-3 bg-black text-white text-base font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                    GET A CALLBACK
                </button>
            </div>

            {/* Desktop/Tablet Layout - Two Column */}
            <div className="hidden md:block py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Column - Text */}
                        <div className="md:pr-4 lg:pr-8">
                            <h2 className="text-4xl lg:text-5xl font-normal uppercase text-black mb-4 leading-tight">
                                BHARTIYA GARDEN ESTATE<br />
                                NIKOO HOMES 7
                            </h2>
                            <p className="text-xl text-gray-700 mb-6 font-medium">
                                At Sadahalli, North Bangalore
                            </p>
                            <p style={{ color: '#676767' }} className="text-gray-600 leading-relaxed text-base mb-8">
                                Bhartiya Garden Estate is the latest landmark township from the prestigious Bhartiya City developers, strategically positioned in Sadahalli, North Bangalore. Designed to redefine urban living, this premium residential enclave offers a thoughtfully planned mix of apartments, duplexes, row houses, and villas—all set amidst refreshing green landscapes. Located in one of Bangalore's most rapidly developing corridors, Nikoo Garden Estate ensures seamless connectivity and everyday convenience. The project sits opposite Prestige Cloud Tech Park, right before the Airport Toll Gate, and is just 26 minutes away from the Aerospace SEZ. With homes starting at ₹1.27 Lakhs onwards*, it perfectly balances lifestyle, accessibility, and long-term investment value. Carrying forward the architectural brilliance and lifestyle innovation that made the Nikoo Homes brand iconic, this township is envisioned to elevate community living with world-class amenities, sustainable design, and easy access to North Bangalore's IT and industrial hubs. Whether you seek the comfort of a spacious apartment, the sophistication of a duplex, or the elegance of a villa, Bhartiya Nikoo Garden Estate, Sadahalli, offers a dream home for every family.
                            </p>
                            <button 
                                onClick={openModal}
                                style={{ backgroundColor: '#ec202d' }} 
                                className="px-8 py-3 bg-black text-white text-base font-semibold uppercase tracking-wide hover:bg-gray-800 transition-colors"
                            >
                                GET A CALLBACK
                            </button>
                        </div>

                        {/* Right Column - Image (Desktop Only) */}
                        <div className="relative">
                            <div className="relative w-full h-[400px] lg:h-[500px]">
                                <Image
                                    src="/assets/feature-banner.jpg"
                                    alt="Nikoo Homes Estate"
                                    fill
                                    quality={100}
                                    className="object-cover"
                                    sizes="50vw"
                                />
                                {/* Nikoo Homes Logo overlay - top right */}
                                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-2 text-xs font-bold uppercase leading-tight">
                                    nikoo<br />homes
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}