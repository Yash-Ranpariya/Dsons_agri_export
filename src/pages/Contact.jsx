import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-24 bg-beige min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif mb-6">Contact Us</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">For wholesale inquiries, export pricing, or general questions, our team is ready to assist you.</p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-8"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-5/12 space-y-12"
                    >
                        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 border-b pb-4">Contact Detail</h2>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary mt-1">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Head Office</h3>
                                        <p className="text-gray-600 leading-relaxed">123 Spice Market, Industrial Area Phase II, <br /> New Delhi, India - 110020</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary mt-1">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Phone & WhatsApp</h3>
                                        <p className="text-gray-600 text-lg mb-2">+91 98765 43210</p>
                                        <p className="text-gray-600 text-lg">+91 11223 34455</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-4 rounded-full mr-6 text-primary mt-1">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">Email Us</h3>
                                        <p className="text-gray-600 text-lg mb-2">export@ranpariyassons.com</p>
                                        <p className="text-gray-600 text-lg">info@ranpariyassons.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA Button */}
                        <motion.a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#25D366] hover:bg-[#128C7E] w-full text-white px-8 py-5 rounded-2xl text-xl font-bold transition-all duration-300 shadow-xl flex items-center justify-center font-serif tracking-wide"
                        >
                            <MessageCircle className="mr-3" size={28} /> Chat on WhatsApp
                        </motion.a>
                    </motion.div>

                    {/* Form & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-7/12"
                    >
                        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 mb-10">
                            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8 border-b pb-4">Export Inquiry Form</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" required className="w-full bg-beige border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" required className="w-full bg-beige border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone/WhatsApp *</label>
                                        <input type="tel" id="phone" required className="w-full bg-beige border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900" placeholder="+1234567890" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="company">Company Name</label>
                                        <input type="text" id="company" className="w-full bg-beige border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900" placeholder="Trading LLC" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">Subject / Product Interest</label>
                                    <input type="text" id="subject" className="w-full bg-beige border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900" placeholder="Requirement for Turmeric and Black Pepper" />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Your Message / Bulk Quantity *</label>
                                    <textarea id="message" required rows="5" className="w-full bg-beige border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-gray-900 resize-none" placeholder="Please provide pricing for 10 tons of Turmeric CIF New York..."></textarea>
                                </div>

                                <button type="submit" className="bg-primary hover:bg-secondary w-full text-white font-bold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center text-lg mt-4">
                                    <Send className="mr-3" size={20} /> Submit Inquiry
                                </button>
                            </form>
                        </div>

                        {/* Google Map Embedded */}
                        <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x390d027dc4bcfca3%3A0xc3fa8e716ed5771d!2sFatehpuri%20Masjid!5e0!3m2!1sen!2sin!4v1703666666666!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map Location"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
