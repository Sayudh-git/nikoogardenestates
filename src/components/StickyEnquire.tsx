"use client";

import { useState } from "react";

export default function StickyEnquire() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky Tab */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-0 top-1/2 -translate-y-1/2 bg-primary text-white py-4 px-2 writing-mode-vertical-rl rotate-180 font-bold uppercase text-sm hover:bg-primary/90 transition-colors z-40 shadow-lg"
                style={{ writingMode: "vertical-rl" }}
            >
                ENQUIRE NOW
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
                    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            ENQUIRE NOW
                        </h3>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="tel"
                                placeholder="Phone (+91)"
                                className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
