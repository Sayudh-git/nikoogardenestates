import { NextRequest, NextResponse } from "next/server";

// Backend API URL - Update this to your actual backend URL
const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:3000/api/leads/submit";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        
        // Log the received data
        console.log("=== Lead Submission Received ===");
        console.log("Body:", JSON.stringify(body, null, 2));
        
        // Forward to backend API with retry logic
        let lastError: Error | null = null;
        const maxRetries = 3;
        const retryDelay = 1000; // 1 second
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                console.log(`Attempting to submit lead (attempt ${attempt}/${maxRetries})...`);
                
                const response = await fetch(BACKEND_API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                    signal: AbortSignal.timeout(30000), // 30 second timeout
                });

                const result = await response.json();

                if (!response.ok) {
                    throw new Error(result.error || result.message || `HTTP ${response.status}`);
                }

                if (result.success) {
                    console.log("Lead submitted successfully to backend");
                    return NextResponse.json(
                        {
                            success: true,
                            message: "Lead submitted successfully",
                            data: result.data || body,
                        },
                        { status: 200 }
                    );
                } else {
                    throw new Error(result.error || result.message || "Backend returned unsuccessful response");
                }
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                console.error(`Attempt ${attempt} failed:`, lastError.message);
                
                // If it's not a retryable error, break immediately
                if (lastError.message.includes("Database error") || 
                    lastError.message.includes("Transaction API error")) {
                    // Wait before retrying (except on last attempt)
                    if (attempt < maxRetries) {
                        await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
                    }
                } else {
                    // Non-retryable error, break immediately
                    break;
                }
            }
        }

        // All retries failed
        console.error("All retry attempts failed. Last error:", lastError);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to submit lead after multiple attempts",
                error: lastError?.message || "Unknown error",
                details: "The backend service may be experiencing issues. Please try again later.",
            },
            { status: 500 }
        );
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to submit lead",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 }
        );
    }
}

