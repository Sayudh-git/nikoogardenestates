import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            {/* About Section - White Background */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left - About Text */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase">
                                ABOUT BHARTIYA GARDEN ESTATE
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Bhartiya Garden Estate, an integral part of the prestigious Bhartiya City, is crafted to bring together
                                    modern living, timeless design, and exceptional craftsmanship. Conceived with the vision of
                                    creating world-class residential spaces, this development offers the perfect blend of luxury, comfort,
                                    and convenience in one of Bangalore's most desirable locations.
                                </p>
                                <p>
                                    With spacious, Vastu-compliant homes and a thoughtfully curated range of premium amenities, it promises an elevated living
                                    experience tailored for today's modern families.
                                </p>
                                <p>
                                    Built on the principles of quality, innovation, and integrity, Bhartiya Garden Estate reflects the
                                    developer's unwavering commitment to excellence. Every home is designed with meticulous
                                    attention to detail and smart planning, ensuring not just functionality but also a lifestyle of
                                    refinement. More than just residences, these homes represent a new benchmark in urban living,
                                    redefining what it means to live in Bangalore.
                                </p>
                            </div>
                            <button className="mt-8 bg-primary text-white uppercase font-bold py-3 px-8 hover:bg-primary/90 transition-colors">
                                GET A CALLBACK
                            </button>
                        </div>

                        {/* Right - Image */}
                        <div className="relative h-[400px] md:h-[500px]">
                            <Image
                                src="/assets/last-img.jpg"
                                alt="Bhartiya Urban"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* RERA Disclaimer Section */}
            <div className="bg-gray-50 py-8">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        {/* Left - Disclaimer */}
                        <div className="flex-1">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                RERA Registration No: PRM/KA/RERA/1251/309/PR/171117/001696 |
                                This is not an official website. This website is for information purposes only.
                                The information provided on this website is collected from various sources and
                                is subject to change without prior notice. We do not guarantee the accuracy or
                                completeness of the information provided herein.
                            </p>
                        </div>

                        {/* Right - Logo */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/assets/niko-garden-logo-header.jpg"
                                alt="Bhartiya City"
                                width={180}
                                height={60}
                                className="h-16 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Red Background */}
            <div className="bg-primary py-4">
                <div className="container mx-auto px-4 lg:px-8">
                    <p className="text-white text-center text-sm">
                        © 2024 Bhartiya City Nikoo Homes. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
