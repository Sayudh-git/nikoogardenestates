import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            {/* Bottom Bar - Red Background */}
            <div className="bg-primary py-6">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                        {/* Left - Disclaimer */}
                        <div className="flex-1 text-white text-xs md:text-sm leading-relaxed">
                            <p className="mb-2">
                                <strong>Disclaimer:</strong> The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purposes only. This is the official website of authorized marketing partner. We may share data with RERA registered brokers/companies for further processing. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.
                            </p>
                            <p className="mb-1">
                                <strong>AGENT RERA:</strong> PRM/KA/RERA/1251/309/AG/210802/002417
                            </p>
                            <p>
                                <strong>PROJECT RERA:</strong> Bhartiya Garden Estate - PRM/KA/RERA/1251/472/PR/260825/008038
                            </p>
                        </div>

                        {/* Right - Privacy Policy */}
                        <div className="flex-shrink-0">
                            <Link 
                                href="/privacy-policy" 
                                className="text-white text-sm md:text-base hover:underline"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
