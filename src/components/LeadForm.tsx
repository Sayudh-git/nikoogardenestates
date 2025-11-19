"use client";

import { useState } from "react";

export default function LeadForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center uppercase">
                        Express Your Interest
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded bg-white border border-input focus:outline-none focus:ring-2 focus:ring-accent"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded bg-white border border-input focus:outline-none focus:ring-2 focus:ring-accent"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone Number (+91)"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded bg-white border border-input focus:outline-none focus:ring-2 focus:ring-accent"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-3 bg-accent text-white font-bold uppercase hover:bg-accent/90 transition-colors rounded"
                        >
                            ENQUIRE NOW
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
