import Image from "next/image";

export default function LocationSection() {
    return (
        <section id="location" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 uppercase">
                    Get In Touch With Us
                </h2>

                {/* Google Maps */}
                <div className="mb-12">
                    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0679669682917!2d77.63677931482213!3d13.098646990756863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19b3d0000001%3A0x1c2b551c0000001!2sThanisandra%20Main%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Find Your Way Home */}
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-foreground mb-6">
                        FIND YOUR WAY HOME
                    </h3>
                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/assets/maps.jpg"
                            alt="Location Map"
                            fill
                            className="object-contain bg-gray-50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
