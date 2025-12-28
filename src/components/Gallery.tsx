"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
    "/assets/gallery01.jpg",
    "/assets/gallery02.jpg",
    "/assets/gallery03.jpg",
    "/assets/gallery04.jpg",
    "/assets/gallery05.jpg",
    "/assets/gallery06.jpg",
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const handleNext = () => {
        if (selectedIndex === null) return;
        
        if (selectedIndex === galleryImages.length - 1) {
            closeModal();
        } else {
            setSelectedIndex(selectedIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (selectedIndex === null || selectedIndex === 0) return;
        setSelectedIndex(selectedIndex - 1);
    };

    const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        
        // Click on right side (60% of width)
        if (clickX > width * 0.6) {
            handleNext();
        }
        // Click on left side (40% of width)
        else if (clickX < width * 0.4) {
            handlePrevious();
        }
    };

    return (
        <>
            <section id="gallery" className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 uppercase">
                        GALLERY
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                                onClick={() => openModal(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                        aria-label="Close"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Previous Button */}
                    {selectedIndex > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrevious();
                            }}
                            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                    )}

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                        aria-label={selectedIndex === galleryImages.length - 1 ? "Close" : "Next"}
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="relative w-full h-full cursor-pointer"
                            onClick={handleImageClick}
                        >
                            <Image
                                src={galleryImages[selectedIndex]}
                                alt={`Gallery image ${selectedIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                        {selectedIndex + 1} / {galleryImages.length}
                    </div>
                </div>
            )}
        </>
    );
}
