"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            {/* Top Section - White */}
            <div className="bg-white py-12 border-t border-border">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        {/* Left - Disclaimer */}
                        <div className="flex-1">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Disclaimer: The content provided on this website is for information purposes only
                                and does not constitute an offer to avail any service. The prices mentioned are
                                subject to change without prior notice and properties mentioned are subject to
                                availability. Images are for representation purpose only. This is the official
                                website of authorized marketing partner. We may share data with RERA registered
                                brokers/companies for additional information. Project marketed by authorized
                                channel partner.
                            </p>
                        </div>

                        {/* Right - Logo */}
                        <div className="flex-shrink-0">
                            <div className="w-48 h-16 relative">
                                <Image
                                    src="/assets/niko-garden-logo-header.jpg"
                                    alt="Bhartiya City"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Red */}
            <div className="bg-primary py-4">
                <div className="container mx-auto px-4 lg:px-8">
                    <p className="text-white text-sm text-center">
                        © 2024 Bhartiya City Nikoo Homes. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
