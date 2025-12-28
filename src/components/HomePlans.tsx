"use client";

import Image from "next/image";
import { useContactModal } from "@/contexts/ContactModalContext";

const plans = [
    {
        title: "2 BHK",
        subtitle: "Built-Up Area: 1,170 Sq.Ft - ₹1.27 Cr*",
        image: "/assets/image1.jpg"
    },
    {
        title: "2 BHK + STUDY",
        subtitle: "Built-Up Area: 1,386 Sq.Ft - ₹1.50 Cr*",
        image: "/assets/image2.jpg"
    },
    {
        title: "3 BHK",
        subtitle: "Built-Up Area: 1,735 Sq.Ft - ₹1.87 Cr*",
        image: "/assets/image3.jpg"
    },
    {
        title: "3 BHK + STUDY",
        subtitle: "Built-Up Area: 1,872 Sq.Ft - ₹2.25 Cr*",
        image: "/assets/image4.jpg"
    },
    {
        title: "LOFT",
        subtitle: "Built-Up Area: 2,188 Sq.Ft- ₹2.40 Cr*",
        image: "/assets/image5.jpg"
    },
    {
        title: "4 BHK",
        subtitle: "Built-Up Area: 2,553 Sq.Ft - ₹2.75 Cr*",
        image: "/assets/image6.jpg"
    },
    {
        title: "3 Bed Villament",
        subtitle: "Built-Up Area: 2,204 Sq.Ft - ₹3.53 CR*",
        image: "/assets/image7.jpg"
    },
    {
        title: "3 Bed Villament with Terrace",
        subtitle: "Built-Up Area: 2,320 Sq.Ft - ₹3.77 CR*",
        image: "/assets/image8.jpg"
    },
    {
        title: "4 Bed",
        subtitle: "Built-Up Area: 3,171 Sq.Ft - ₹5.06 CR*",
        image: "/assets/image9.jpg"
    },
    {
        title: "4 Bed + Staff - G+1",
        subtitle: "Built-Up Area: 3,267 Sq.Ft - ₹5.56 CR*",
        image: "/assets/image10.jpg"
    },
];

export default function HomePlans() {
    const { openModal } = useContactModal();

    return (
        <section id="floorplan" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl md:text-3xl font-semibold uppercase text-center text-foreground mb-12">
                Home Plans That'll Have You Feeling <br />Right At Home..
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white"
                        >
                            <div className="relative w-full h-80 md:h-96 rounded-t-lg overflow-hidden">
                                <Image
                                    src={plan.image}
                                    alt={plan.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 border border-black rounded-b-lg">
                                <h3 className="text-xl font-bold text-foreground mb-2 uppercase">
                                    {plan.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    {plan.subtitle}
                                </p>
                                <button 
                                    onClick={openModal}
                                    className="w-full py-3 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors"
                                >
                                    FLOOR PLAN
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button 
                        onClick={openModal}
                        className="px-8 py-4 bg-primary text-white font-bold uppercase hover:bg-primary/90 transition-colors shadow-lg"
                    >
                        DOWNLOAD BHARTIYA GARDEN ESTATE BROCHURE
                    </button>
                </div>
            </div>
        </section>
    );
}
