import React from 'react'
import { Code2, Database, Smartphone, Zap, CheckCircle, Clock, TrendingUp } from 'lucide-react' 

export default function Services() {
    const services = [
        {
            icon: <Code2 className="w-8 h-8" />,
            title: "Custom Websites",
            description: "Professional websites built from scratch to match your brand",
            features: ["Business Websites", "Landing Pages", "Portfolio Sites", "Company Sites"]
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Web Applications",
            description: "Interactive apps with user accounts, data storage, and more",
            features: ["User Authentication", "Data Management", "Admin Dashboards", "Real-time Features"]
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile-Friendly Design",
            description: "Sites that work perfectly on phones, tablets, and desktops",
            features: ["Responsive Layout", "Fast Loading", "Touch-Friendly", "Cross-Device Testing"]
        }
    ]

    


    return (
        <section id="services" className="py-16 px-2 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 reveal" data-animation="fade-up">
                   
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Need a <span className="text-blue-600">Website?</span> I Can Build It
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From simple business sites to complex web applications. I'll handle everything from design to launch.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300 reveal" data-animation="zoom-in" data-delay={`${index * 0.1}s`}
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <div className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                

                {/* CTA */}
                <div className="mt-12 text-center reveal" data-animation="pop-in">
                    <a
                        href="https://wa.me/2349161489807?text=Hello%20Charles!%20I'm%20interested%20in%20your%20web%20development%20services.%20Can%20we%20discuss%20my%20project%20requirements?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm6 16.33a3.5 3.5 0 0 1-3.5 3.5h-5a3.5 3.5 0 0 1-3.5-3.5v-5a3.5 3.5 0 0 1 3.5-3.5h5a3.5 3.5 0 0 1 3.5 3.5zm-2.5-5a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm-5 0a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm2.5 5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" />
                        </svg>
                        Get Free Quote on WhatsApp
                    </a>
                    <p className="text-gray-500 text-sm mt-4">Click to start a conversation about your project</p>
                </div>
            </div>
        </section>
    )
}