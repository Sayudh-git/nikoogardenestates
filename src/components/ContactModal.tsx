"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fadeIn">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                >
                    <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-bold text-foreground mb-6">
                    Request a Callback
                </h3>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                            Message (Optional)
                        </label>
                        <textarea
                            id="message"
                            rows={3}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-md bg-gradient-gold text-foreground font-semibold hover:shadow-lg transition-shadow"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
}
