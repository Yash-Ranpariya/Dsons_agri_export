import { motion } from 'framer-motion';
import { Factory, Archive, ShieldCheck } from 'lucide-react';

const Infrastructure = () => {
    return (
        <div className="py-32 bg-beige dark:bg-dark-bg transition-colors duration-500 min-h-screen relative overflow-hidden">
            {/* Background glowing orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24 relative"
                >
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-pulse">State Of The Art</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-serif mb-6 drop-shadow-lg">Our Infrastructure</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
                </motion.div>

                <div className="space-y-32">
                    {/* Section 1 */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 order-2 md:order-1"
                        >
                            <div className="glass-premium p-10 rounded-3xl relative z-10 border border-white/20 dark:border-white/10 shadow-2xl">
                                <div className="flex items-center mb-6">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl mr-5">
                                        <Factory className="text-primary dark:text-accent w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-bold font-serif text-gray-900 dark:text-white">Modern Processing Unit</h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                    Our widespread processing facilities are equipped with state-of-the-art machinery capable of sorting, cleaning, and grinding tons of spices daily with highly automated systems to minimize human contact and preserve purity.
                                </p>
                                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                    <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-accent mr-3"></div>Automated cleaning & grading</li>
                                    <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-accent mr-3"></div>Cryogenic grinding technology</li>
                                    <li className="flex items-center"><div className="w-2 h-2 rounded-full bg-accent mr-3"></div>Climate-controlled storage silos</li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 order-1 md:order-2"
                        >
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" alt="Processing Unit" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
                        </motion.div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <img src="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=2670&auto=format&fit=crop" alt="Packaging Facility" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <div className="glass-premium p-10 rounded-3xl relative z-10 border border-white/20 dark:border-white/10 shadow-2xl">
                                <div className="flex items-center mb-6">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl mr-5">
                                        <Archive className="text-primary dark:text-accent w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-bold font-serif text-gray-900 dark:text-white">Advanced Packaging</h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                    Freshness is paramount. Our packaging facility ensures that every shipment is hermetically sealed to preserve volatile essential oils, offering customized packaging options ranging from small pouches to large 50kg bulk bags tailored to client needs.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Section 3 */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 order-2 md:order-1"
                        >
                            <div className="glass-premium p-10 rounded-3xl relative z-10 border border-white/20 dark:border-white/10 shadow-2xl">
                                <div className="flex items-center mb-6">
                                    <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-xl mr-5">
                                        <ShieldCheck className="text-primary dark:text-accent w-10 h-10" />
                                    </div>
                                    <h2 className="text-3xl font-bold font-serif text-gray-900 dark:text-white">Stringent Quality Testing</h2>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 font-light">
                                    Every batch of spices undergoes rigorous laboratory testing before export. We adhere strictly to international food safety standards, testing for aflatoxins, pesticide residues, and microbiology to ensure only the highest grade product reaches our clients.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 order-1 md:order-2"
                        >
                            <img src="https://images.unsplash.com/photo-1579389083175-247ef703006f?q=80&w=2670&auto=format&fit=crop" alt="Lab Testing" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Infrastructure;
