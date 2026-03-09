import { motion } from 'framer-motion';
import { Factory, Archive, ShieldCheck } from 'lucide-react';

const Infrastructure = () => {
    return (
        <div className="py-24 bg-beige min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">State Of The Art</span>
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif mb-6">Our Infrastructure</h1>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
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
                            <div className="flex items-center mb-6">
                                <Factory className="text-primary w-10 h-10 mr-4" />
                                <h2 className="text-3xl font-bold font-serif text-gray-900">Modern Processing Unit</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Our widespread processing facilities are equipped with state-of-the-art machinery capable of sorting, cleaning, and grinding tons of spices daily with highly automated systems to minimize human contact and preserve purity.
                            </p>
                            <ul className="space-y-3 text-gray-600 list-disc pl-5">
                                <li>Automated cleaning & grading</li>
                                <li>Cryogenic grinding technology</li>
                                <li>Climate-controlled storage silos</li>
                            </ul>
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
                            <div className="flex items-center mb-6">
                                <Archive className="text-primary w-10 h-10 mr-4" />
                                <h2 className="text-3xl font-bold font-serif text-gray-900">Advanced Packaging</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Freshness is paramount. Our packaging facility ensures that every shipment is hermetically sealed to preserve volatile essential oils, offering customized packaging options ranging from small pouches to large 50kg bulk bags tailored to client needs.
                            </p>
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
                            <div className="flex items-center mb-6">
                                <ShieldCheck className="text-primary w-10 h-10 mr-4" />
                                <h2 className="text-3xl font-bold font-serif text-gray-900">Stringent Quality Testing</h2>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Every batch of spices undergoes rigorous laboratory testing before export. We adhere strictly to international food safety standards, testing for aflatoxins, pesticide residues, and microbiology to ensure only the highest grade product reaches our clients.
                            </p>
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
