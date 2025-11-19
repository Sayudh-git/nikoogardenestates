import Image from "next/image";

export default function Gallery() {
    const images = [1, 2, 3, 4];

    return (
        <section id="gallery" className="py-20 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 uppercase">
                    Gallery
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                    {images.map((img) => (
                        <div
                            key={img}
                            className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <Image
                                src="/assets/gallery1.jpg"
                                alt={`Gallery image ${img}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
