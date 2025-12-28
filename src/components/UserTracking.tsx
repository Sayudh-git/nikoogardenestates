"use client";

import { useEffect, useState } from "react";
import { collectTrackingData, type TrackingData } from "@/lib/tracking";

export default function UserTracking() {
    const [userData, setUserData] = useState<TrackingData | null>(null);

    useEffect(() => {
        const collectUserData = async () => {
            const data = await collectTrackingData();
            
            setUserData(data);
            
            // Log to console
            console.log("=== User Tracking Data ===");
            console.log("Location:", data.location);
            console.log("ISP:", data.isp);
            console.log("IP:", data.ip);
            console.log("Session ID:", data.sessionId);
            console.log("Device:", data.device);
            console.log("UTM Parameters:", data.utm);
            console.log("User Agent:", data.userAgent);
            if (data.clientId) {
                console.log("Client ID:", data.clientId);
            }
            console.log("========================");
        };

        collectUserData();
    }, []);

    // This component doesn't render anything
    return null;
}

