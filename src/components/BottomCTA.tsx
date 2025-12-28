"use client";

import Image from "next/image";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function BottomCTA() {
    const { openModal } = useContactModal();
    return (
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
            {/* Background Image - Full Width */}
            <Image
                src="/assets/visit.jpg"
                alt="Visit Bhartiya Garden Estate"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay Content */}
            <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                        Schedule your<br />visit to come home.
                    </h2>
                    <button 
                        onClick={openModal}
                        className="bg-primary text-white uppercase font-bold py-4 px-10 hover:bg-primary/90 transition-colors text-lg shadow-lg"
                    >
                        I AM INTERESTED
                    </button>
                </div>
            </div>
        </section>
    );
}
