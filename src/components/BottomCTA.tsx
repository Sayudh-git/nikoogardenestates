export default function BottomCTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-white via-purple-50 to-pink-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Left Side */}
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
                            Scheduling your visit to come home.
                        </h2>
                        <button className="px-8 py-3 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors">
                            ENQUIRE NOW
                        </button>
                    </div>

                    {/* Right Side - Placeholder for illustration */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg flex items-center justify-center">
                            <p className="text-gray-600 text-center px-4">
                                [Isometric Building Illustration]
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
