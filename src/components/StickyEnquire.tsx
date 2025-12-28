"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function StickyEnquire() {
    const { openModal } = useContactModal();

    const handleWhatsApp = () => {
        window.open("https://wa.me/918150049883", "_blank");
    };

    const handleCall = () => {
        window.location.href = "tel:+918150049883";
    };

    return (
        <>
            {/* Desktop - Vertical Sticky Tab (hidden on mobile) */}
            <button
                onClick={openModal}
                className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 bg-red-600 text-white py-2 px-3 font-bold uppercase text-sm hover:bg-red-700 transition-colors z-40 shadow-lg"
                style={{ writingMode: "vertical-rl" }}
            >
                <span className="rotate-180 inline-block">BOOK YOUR NIKOO HOME</span>
            </button>

            {/* Mobile - Bottom Sticky Bar (visible only on mobile) */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="grid grid-cols-3 divide-x divide-gray-700">
                    {/* WhatsApp */}
                    <button
                        onClick={handleWhatsApp}
                        className="flex flex-row items-center justify-center gap-2 py-3 px-3 hover:bg-gray-800 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-semibold text-white">WhatsApp</span>
                    </button>

                    {/* Call */}
                    <button
                        onClick={handleCall}
                        className="flex flex-row items-center justify-center gap-2 py-3 px-3 hover:bg-gray-800 transition-colors"
                    >
                        <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-sm font-semibold text-white">Call</span>
                    </button>

                    {/* Enquire */}
                    <button
                        onClick={openModal}
                        className="flex flex-row items-center justify-center gap-2 py-3 px-3 hover:bg-gray-800 transition-colors"
                    >
                        <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-sm font-semibold text-white">Enquire</span>
                    </button>
                </div>
            </div>

            {/* Add padding to bottom of page on mobile to prevent content being hidden behind sticky bar */}
            <div className="lg:hidden h-16" />
        </>
    );
}