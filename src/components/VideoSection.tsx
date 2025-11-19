export default function VideoSection() {
    return (
        <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Video 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="relative w-full aspect-video rounded overflow-hidden mb-4">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/tFdaC1u_KjQ"
                                title="Happy Nikoo Family - Part 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-center text-foreground font-medium">
                            Watch the Nikoo Homes video
                        </p>
                    </div>

                    {/* Video 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="relative w-full aspect-video rounded overflow-hidden mb-4">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/tFdaC1u_KjQ"
                                title="Happy Nikoo Family - Part 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="text-center text-foreground font-medium">
                            Watch the Nikoo Homes video
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
