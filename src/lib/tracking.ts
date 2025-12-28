// Utility functions for collecting tracking data

export interface TrackingData {
    location: {
        country: string;
        state: string;
        city: string;
        pincode: string;
        latitude: number | null;
        longitude: number | null;
    };
    isp: string;
    ip: string;
    sessionId: string;
    device: string;
    utm: {
        utm_source: string;
        utm_medium: string;
        utm_campaign: string;
        utm_term: string;
        utm_content: string;
    };
    userAgent: string;
    clientId?: string;
}

// Get Google Analytics Client ID
function getClientId(): string | undefined {
    if (typeof window === "undefined") return undefined;
    
    // Try to get from Google Analytics
    if ((window as any).gtag) {
        // This would need Google Analytics to be set up
        // For now, we'll try to get from cookies
    }
    
    // Try to get from cookies (GA stores it as _ga cookie)
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === '_ga' && value) {
            // GA client ID format: GA1.2.123456789.1234567890
            const parts = value.split('.');
            if (parts.length >= 4) {
                return `${parts[1]}.${parts[2]}.${parts[3]}.${parts[4]}`;
            }
        }
    }
    
    return undefined;
}

// Extract UTM parameters from URL
export function getUTMParameters(): {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
} {
    if (typeof window === "undefined") {
        return {
            utm_source: "N/A",
            utm_medium: "N/A",
            utm_campaign: "N/A",
            utm_term: "N/A",
            utm_content: "N/A",
        };
    }

    const urlParams = new URLSearchParams(window.location.search);
    
    return {
        utm_source: urlParams.get("utm_source") || "N/A",
        utm_medium: urlParams.get("utm_medium") || "N/A",
        utm_campaign: urlParams.get("utm_campaign") || "N/A",
        utm_term: urlParams.get("utm_term") || "N/A",
        utm_content: urlParams.get("utm_content") || "N/A",
    };
}

// Detect device type
export function detectDevice(): string {
    if (typeof window === "undefined") return "N/A";
    
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // Check for mobile devices
    if (/android/i.test(userAgent)) {
        return "Mobile";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return "Mobile";
    }
    
    // Check for tablets
    if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
        return "Tab";
    }
    if (/android/i.test(userAgent) && !/mobile/i.test(userAgent)) {
        return "Tab";
    }
    
    // Check for desktop
    if (/windows|macintosh|linux/i.test(userAgent)) {
        return "Desktop";
    }
    
    return "N/A";
}

// Get user's geolocation
export function getGeolocation(): Promise<{ latitude: number | null; longitude: number | null }> {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve({ latitude: null, longitude: null });
            return;
        }
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            () => {
                resolve({ latitude: null, longitude: null });
            },
            { timeout: 5000 }
        );
    });
}

// Fetch location and IP data from API
export async function fetchLocationData(): Promise<{
    country: string;
    state: string;
    city: string;
    pincode: string;
    ip: string;
    isp: string;
}> {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        
        return {
            country: data.country_name || "N/A",
            state: data.region || "N/A",
            city: data.city || "N/A",
            pincode: data.postal || "N/A",
            ip: data.ip || "N/A",
            isp: data.org || "N/A",
        };
    } catch (error) {
        console.error("Error fetching location data:", error);
        try {
            const ipResponse = await fetch("https://api.ipify.org?format=json");
            const ipData = await ipResponse.json();
            return {
                country: "N/A",
                state: "N/A",
                city: "N/A",
                pincode: "N/A",
                ip: ipData.ip || "N/A",
                isp: "N/A",
            };
        } catch (fallbackError) {
            return {
                country: "N/A",
                state: "N/A",
                city: "N/A",
                pincode: "N/A",
                ip: "N/A",
                isp: "N/A",
            };
        }
    }
}

// Generate a unique session ID
export function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Collect all tracking data
export async function collectTrackingData(): Promise<TrackingData> {
    const sessionId = generateSessionId();
    const device = detectDevice();
    const utmParams = getUTMParameters();
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "N/A";
    const clientId = getClientId();
    
    // Get geolocation
    const { latitude, longitude } = await getGeolocation();
    
    // Get location, IP, and ISP data
    const locationData = await fetchLocationData();
    
    return {
        location: {
            country: locationData.country,
            state: locationData.state,
            city: locationData.city,
            pincode: locationData.pincode,
            latitude,
            longitude,
        },
        isp: locationData.isp,
        ip: locationData.ip,
        sessionId,
        device,
        utm: utmParams,
        userAgent,
        clientId,
    };
}

