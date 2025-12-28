"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ContactModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    formData: {
        name: string;
        mobile: string;
        email: string;
    };
    setFormData: (data: { name: string; mobile: string; email: string }) => void;
    resetForm: () => void;
    wasSubmitted: boolean;
    setWasSubmitted: (value: boolean) => void;
    shouldShowAutoModal: boolean;
    setShouldShowAutoModal: (value: boolean) => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormDataState] = useState({
        name: "",
        mobile: "",
        email: "",
    });
    const [wasSubmitted, setWasSubmitted] = useState(false);
    const [shouldShowAutoModal, setShouldShowAutoModal] = useState(true);

    // Load form data from sessionStorage on mount
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedFormData = sessionStorage.getItem("contactModalFormData");
            if (savedFormData) {
                try {
                    const parsed = JSON.parse(savedFormData);
                    if (parsed.name || parsed.mobile || parsed.email) {
                        setFormDataState(parsed);
                    }
                } catch (e) {
                    // Ignore parse errors
                }
            }
        }
    }, []);

    const setFormData = (data: { name: string; mobile: string; email: string }) => {
        setFormDataState(data);
        // Save to sessionStorage
        if (typeof window !== "undefined") {
            sessionStorage.setItem("contactModalFormData", JSON.stringify(data));
        }
    };

    const resetForm = () => {
        setFormDataState({ name: "", mobile: "", email: "" });
        if (typeof window !== "undefined") {
            sessionStorage.removeItem("contactModalFormData");
        }
    };

    const openModal = () => {
        // Always allow manual opens (user clicking buttons)
        setIsOpen(true);
        // Reset wasSubmitted flag when manually opening
        if (wasSubmitted) {
            setWasSubmitted(false);
            setShouldShowAutoModal(true);
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        // If form was submitted successfully, prevent auto-modal from reopening
        if (wasSubmitted) {
            setShouldShowAutoModal(false);
        }
    };

    return (
        <ContactModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
                formData,
                setFormData,
                resetForm,
                wasSubmitted,
                setWasSubmitted,
                shouldShowAutoModal,
                setShouldShowAutoModal,
            }}
        >
            {children}
        </ContactModalContext.Provider>
    );
}

export function useContactModal() {
    const context = useContext(ContactModalContext);
    if (context === undefined) {
        throw new Error("useContactModal must be used within a ContactModalProvider");
    }
    return context;
}

