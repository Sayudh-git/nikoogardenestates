"use client";

import { useEffect } from "react";
import ContactModal from "./ContactModal";
import { useContactModal } from "@/contexts/ContactModalContext";

export default function AutoContactModal() {
    const { openModal, shouldShowAutoModal, isOpen } = useContactModal();

    useEffect(() => {
        // Don't set up auto-modal if it shouldn't show (e.g., after successful submission)
        if (!shouldShowAutoModal) {
            return;
        }

        // Show modal after 4-5 seconds (using 4.5 seconds)
        const initialTimeout = setTimeout(() => {
            // Only open if modal is not already open
            if (!isOpen) {
                openModal();
            }
        }, 4500);

        // Then show it every 12 seconds (12000ms)
        const interval = setInterval(() => {
            // Only open if modal is not already open and should show
            if (!isOpen && shouldShowAutoModal) {
                openModal();
            }
        }, 12000);

        // Cleanup
        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, [openModal, shouldShowAutoModal, isOpen]);

    return <ContactModal />;
}

