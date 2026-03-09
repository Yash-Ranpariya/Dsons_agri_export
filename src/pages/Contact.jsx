import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-32 bg-beige dark:bg-dark-bg transition-colors duration-500 min-h-screen relative overflow-hidden">
            {/* Background glowing orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 relative"
                >
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-pulse">Get In Touch</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-serif mb-6 drop-shadow-lg">Contact Us</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto drop-shadow-md">For wholesale inquiries, export pricing, or general questions, our team is ready to assist you.</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:w-5/12 space-y-12"
                    >
                        <div className="glass-premium p-10 rounded-3xl shadow-2xl">
                            <h2 className="text-3xl font-bold font-serif text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">Contact Detail</h2>

                            <div className="space-y-8">
                                <div className="flex items-start group">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl mr-6 text-primary dark:text-accent mt-1 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-serif group-hover:text-primary dark:group-hover:text-accent transition-colors">Head Office</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">123 Spice Market, Industrial Area Phase II, <br /> New Delhi, India - 110020</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl mr-6 text-primary dark:text-accent mt-1 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-serif group-hover:text-primary dark:group-hover:text-accent transition-colors">Phone & WhatsApp</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-2 font-light">+91 98765 43210</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg font-light">+91 11223 34455</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl mr-6 text-primary dark:text-accent mt-1 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 font-serif group-hover:text-primary dark:group-hover:text-accent transition-colors">Email Us</h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-2 font-light hover:text-primary transition-colors cursor-pointer">export@ranpariyassons.com</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-lg font-light hover:text-primary transition-colors cursor-pointer">info@ranpariyassons.com</p>
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
                        <div className="glass-premium p-10 rounded-3xl shadow-2xl mb-10">
                            <h2 className="text-3xl font-bold font-serif text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">Export Inquiry Form</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" required className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 backdrop-blur-sm transition-all shadow-inner" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" required className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 backdrop-blur-sm transition-all shadow-inner" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="phone">Phone/WhatsApp *</label>
                                        <input type="tel" id="phone" required className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 backdrop-blur-sm transition-all shadow-inner" placeholder="+1234567890" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="company">Company Name</label>
                                        <input type="text" id="company" className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 backdrop-blur-sm transition-all shadow-inner" placeholder="Trading LLC" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="subject">Subject / Product Interest</label>
                                    <input type="text" id="subject" className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 backdrop-blur-sm transition-all shadow-inner" placeholder="Requirement for Turmeric and Black Pepper" />
                                </div>

                                <div>
                                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2" htmlFor="message">Your Message / Bulk Quantity *</label>
                                    <textarea id="message" required rows="5" className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 backdrop-blur-sm transition-all resize-none shadow-inner" placeholder="Please provide pricing for 10 tons of Turmeric CIF New York..."></textarea>
                                </div>

                                <button type="submit" className="w-full relative overflow-hidden group bg-primary text-white font-bold py-5 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(139,26,32,0.4)] hover:shadow-[0_4px_30px_rgba(139,26,32,0.6)] hover:-translate-y-1 mt-6">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                                    <span className="relative flex items-center justify-center text-lg"><Send className="mr-3" size={20} /> Submit Inquiry</span>
                                </button>
                            </form>
                        </div>

                        {/* Google Map Embedded */}
                        <div className="h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-dark-surface bg-gray-200 dark:bg-black relative group block">
                            <div className="absolute inset-0 bg-primary/20 dark:bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 mix-blend-color"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x390d027dc4bcfca3%3A0xc3fa8e716ed5771d!2sFatehpuri%20Masjid!5e0!3m2!1sen!2sin!4v1703666666666!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map Location"
                                className="dark:brightness-75 dark:contrast-125 dark:grayscale-[0.3] transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
