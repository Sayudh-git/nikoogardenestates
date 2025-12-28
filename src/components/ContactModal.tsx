"use client";

import { useState, useEffect } from "react";
import { X, Phone, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import { collectTrackingData } from "@/lib/tracking";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function ContactModal() {
    const { isOpen, closeModal, formData, setFormData, resetForm, setWasSubmitted } = useContactModal();
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Reset states when modal closes
    useEffect(() => {
        if (!isOpen) {
            setAgreed(false);
            setIsSuccess(false);
            setErrorMessage(null);
        }
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Collect tracking data
            const trackingData = await collectTrackingData();
            
            // Get UTM source for the source field
            const source = trackingData.utm.utm_source !== "N/A" 
                ? trackingData.utm.utm_source.toUpperCase().replace(/\s+/g, "_")
                : "ORGANIC";
            
            // Get current URL with UTM parameters
            const currentUrl = typeof window !== "undefined" 
                ? window.location.href 
                : "";

            // Format mobile number - handle various formats
            let formattedMobile = formData.mobile.trim().replace(/\s+/g, ""); // Remove spaces
            
            if (formattedMobile) {
                // If already starts with +, keep as is (e.g., +91XXXXXXXXXX)
                if (formattedMobile.startsWith("+")) {
                    // Already formatted, keep as is
                }
                // 13 digits starting with +91 (e.g., +91XXXXXXXXXX)
                else if (formattedMobile.startsWith("+91") && formattedMobile.length === 13) {
                    // Already correct format
                }
                // 12 digits starting with 91 (e.g., 91XXXXXXXXXX)
                else if (formattedMobile.startsWith("91") && formattedMobile.length === 12 && /^[0-9]+$/.test(formattedMobile)) {
                    formattedMobile = `+${formattedMobile}`;
                }
                // 11 digits starting with 0 (e.g., 0XXXXXXXXXX) - keep as is or format
                else if (formattedMobile.startsWith("0") && formattedMobile.length === 11 && /^[0-9]+$/.test(formattedMobile)) {
                    // Remove leading 0 and add +91
                    formattedMobile = `+91${formattedMobile.substring(1)}`;
                }
                // 10 digits (e.g., XXXXXXXXXX) - assume Indian number
                else if (formattedMobile.length === 10 && /^[0-9]+$/.test(formattedMobile)) {
                    formattedMobile = `+91${formattedMobile}`;
                }
                // Otherwise, keep as user entered (for international numbers)
            }

            // Prepare the payload
            const payload: any = {
                name: formData.name,
                email: formData.email,
                mobile: formattedMobile,
                source: source,
                url: currentUrl,
                device: trackingData.device.toLowerCase(),
                projectName: "Bhartiya Garden Estate",
                trackingData: {
                    country: trackingData.location.country,
                    state: trackingData.location.state,
                    city: trackingData.location.city,
                    pincode: trackingData.location.pincode,
                    latitude: trackingData.location.latitude !== null 
                        ? String(trackingData.location.latitude) 
                        : null,
                    longitude: trackingData.location.longitude !== null 
                        ? String(trackingData.location.longitude) 
                        : null,
                    isp: trackingData.isp,
                    ip: trackingData.ip,
                },
            };

            // Add optional fields only if they have values
            if (trackingData.utm.utm_campaign !== "N/A") {
                payload.campaignId = trackingData.utm.utm_campaign;
            }
            if (trackingData.clientId) {
                payload.trackingData.clientId = trackingData.clientId;
            }

            // Submit to API
            const response = await fetch("/api/leads/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.success) {
                console.log("Lead submitted successfully:", result);
                // Mark as submitted
                setWasSubmitted(true);
                // Reset form
                resetForm();
                setAgreed(false);
                // Show success state
                setIsSuccess(true);
                setErrorMessage(null);
            } else {
                console.error("Failed to submit lead:", result);
                // Show error message in modal
                const errorMsg = result.details || result.error || "Failed to submit. Please try again.";
                setErrorMessage(errorMsg);
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error submitting lead:", error);
            setErrorMessage("An error occurred. Please try again.");
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
        >
            <div
                className="relative bg-white rounded-lg shadow-2xl w-full max-w-sm sm:max-w-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with Logo */}
                <div className="bg-white border-b border-gray-200 py-3 sm:py-4 px-6 sm:px-8">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/assets/niko-garden-logo-header.jpg"
                            alt="Nikoo Garden Estate"
                            width={180}
                            height={50}
                            className="h-10 sm:h-12 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-red-400 hover:text-red-600 transition-colors"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="px-6 sm:px-8 py-4 sm:py-5">
                    {isSuccess ? (
                        /* Success State */
                        <div className="text-center py-8">
                            <div className="flex justify-center mb-4">
                                <CheckCircle className="w-16 h-16 text-green-500" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                                Thank You!
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Your interest has been registered successfully. Our team will contact you shortly.
                            </p>
                            <button
                                onClick={() => {
                                    setIsSuccess(false);
                                    closeModal();
                                }}
                                className="px-6 sm:px-8 py-2 sm:py-2.5 bg-cyan-400 text-white font-semibold rounded hover:bg-cyan-500 transition-colors uppercase text-xs sm:text-sm"
                            >
                                Close
                            </button>
                        </div>
                    ) : errorMessage ? (
                        /* Error State */
                        <div className="text-center py-8">
                            <div className="flex justify-center mb-4">
                                <AlertCircle className="w-16 h-16 text-red-500" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                                Submission Failed
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {errorMessage}
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => {
                                        setErrorMessage(null);
                                    }}
                                    className="px-6 sm:px-8 py-2 sm:py-2.5 bg-cyan-400 text-white font-semibold rounded hover:bg-cyan-500 transition-colors uppercase text-xs sm:text-sm"
                                >
                                    Try Again
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="px-6 sm:px-8 py-2 sm:py-2.5 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300 transition-colors uppercase text-xs sm:text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* Form State */
                        <>
                            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-5 text-center">
                                Express Your Interest
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
                            />
                        </div>

                        {/* Mobile Input */}
                        <div>
                            <input
                                type="tel"
                                placeholder="Mobile No"
                                required
                                value={formData.mobile}
                                onChange={(e) => {
                                    // Allow digits, +, and spaces for formatting
                                    const value = e.target.value.replace(/[^\d+]/g, "");
                                    setFormData({ ...formData, mobile: value });
                                }}
                                onBlur={(e) => {
                                    // Validate on blur - check if it's a valid format
                                    const value = e.target.value.trim().replace(/\s+/g, "");
                                    if (value) {
                                        const isValid = 
                                            (value.startsWith("+91") && value.length === 13) || // +91XXXXXXXXXX
                                            (value.startsWith("91") && value.length === 12 && /^[0-9]+$/.test(value)) || // 91XXXXXXXXXX
                                            (value.startsWith("0") && value.length === 11 && /^[0-9]+$/.test(value)) || // 0XXXXXXXXXX
                                            (value.length === 10 && /^[0-9]+$/.test(value)) || // XXXXXXXXXX
                                            (value.startsWith("+") && value.length > 10); // International format
                                        
                                        if (!isValid) {
                                            e.target.setCustomValidity("Please enter a valid mobile number");
                                        } else {
                                            e.target.setCustomValidity("");
                                        }
                                    }
                                }}
                                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <input
                                type="email"
                                placeholder="E-Mail Address"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-cyan-400 text-sm sm:text-base text-gray-700 placeholder-gray-400 transition-colors"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 sm:px-8 py-2 sm:py-2.5 bg-cyan-400 text-white font-semibold rounded hover:bg-cyan-500 transition-colors uppercase text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Pre-Register Now"}
                            </button>
                        </div>

                        {/* Consent Checkbox */}
                        <div className="flex items-start gap-2 pt-1">
                            <input
                                type="checkbox"
                                id="consent"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="mt-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-blue-600 cursor-pointer flex-shrink-0"
                                required
                            />
                            <label htmlFor="consent" className="text-[9px] sm:text-[10px] text-gray-500 leading-tight cursor-pointer">
                                I give my consent for the privacy policy to apply to the processing of the provided data. I give authority to the website owner and its representatives permission to contact me via phone, text, email, or whatsapp with its offers and products. This agreement takes precedence over any DNC/NDNC registration.
                            </label>
                        </div>
                    </form>
                        </>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-white border-t border-gray-200 px-6 sm:px-8 py-3 sm:py-4 flex flex-row items-center justify-between gap-2 sm:gap-4">
                    <a
                        href="tel:+918150049883"
                        className="flex items-center gap-2 text-red-600 flex-shrink-0"
                    >
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="font-semibold text-xs sm:text-base">Call: +91 8150049883</span>
                    </a>
                    <button
                        onClick={closeModal}
                        className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors font-medium text-xs sm:text-sm flex-shrink-0"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}