import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow bg-white py-12 md:py-20">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 uppercase">
                        Privacy Policy for Bhartiya Garden Estate
                    </h1>
                    
                    <p className="text-muted-foreground mb-8">
                        <strong>Effective Date:</strong> October 4, 2024
                    </p>

                    <div className="prose prose-lg max-w-none text-foreground space-y-6">
                        <p>
                            At Bhartiya Garden Estate, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
                        </p>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                                1. Information We Collect
                            </h2>
                            <p className="mb-4">
                                We may collect personal information from you in a variety of ways, including when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Register for an account</li>
                                <li>Fill out forms</li>
                                <li>Subscribe to newsletters</li>
                                <li>Interact with our services</li>
                            </ul>
                            <p className="mb-4">
                                The types of personal information we may collect include, but are not limited to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name</li>
                                <li>Contact information (email address, phone number)</li>
                                <li>Address</li>
                                <li>Payment information</li>
                                <li>Any other information you voluntarily provide</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                                2. How We Use Your Information
                            </h2>
                            <p className="mb-4">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide and maintain our services</li>
                                <li>To improve our website and services</li>
                                <li>To process transactions</li>
                                <li>To communicate with you</li>
                                <li>To send you updates and marketing communications</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                                3. Disclosure of Your Information
                            </h2>
                            <p className="mb-4">
                                We may share your information in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>With service providers who assist us in operating our website and services</li>
                                <li>In response to legal requests or to comply with the law</li>
                                <li>To protect the rights and safety of our users and our company</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                                4. Data Security
                            </h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                                5. Your Rights
                            </h2>
                            <p className="mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of any inaccurate or incomplete information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Object to or restrict our processing of your information</li>
                                <li>Withdraw consent at any time where we are relying on consent to process your personal information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8">
                                6. Changes to This Privacy Policy
                            </h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. We encourage you to review this Privacy Policy periodically for any updates.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

