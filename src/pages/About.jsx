import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="py-32 bg-beige dark:bg-dark-bg min-h-screen relative overflow-hidden transition-colors duration-500">
            {/* Background glowing orbs */}
            <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 relative"
                >
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-pulse">Our Story</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-serif mb-6 drop-shadow-lg">About <span className="text-gradient">Ranpariya's</span> Sons</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-16 items-center mb-28">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="relative group perspective">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-700 blur-[2px]"></div>
                            <img
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop"
                                alt="Spice Market"
                                className="relative rounded-3xl shadow-2xl w-full object-cover h-[450px] transform group-hover:scale-[1.02] transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl font-bold font-serif text-gray-900 dark:text-white leading-tight">A Legacy of Quality and Trust</h2>
                        <div className="w-16 h-1 bg-accent"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                            Ranpariya's Sons started as a family-based spice export business with a clear vision: to bring the authentic taste and rich aroma of Indian spices to kitchens across the globe. From a small local enterprise, our dedication to uncompromising quality has propelled us into the global market.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-light">
                            We work directly with farmers and cultivators, ensuring that every batch of spices meets our stringent quality standards. Our global export operations span over <span className="text-primary dark:text-accent font-bold">35 countries</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20"
                >
                    {[
                        {
                            icon: <Award className="text-primary w-12 h-12 mb-6" />,
                            title: "Unmatched Quality",
                            desc: "Lab-tested, sorted, and naturally processed to retain the best color and flavor."
                        },
                        {
                            icon: <Target className="text-primary w-12 h-12 mb-6" />,
                            title: "Global Export",
                            desc: "Seamless supply chain for on-time delivery across major global markets."
                        },
                        {
                            icon: <Heart className="text-primary w-12 h-12 mb-6" />,
                            title: "Ethical Sourcing",
                            desc: "Working closely with farming communities to ensure fair pricing and sustainability."
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10 }}
                            className="glass-premium p-10 rounded-3xl text-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="flex justify-center">
                                <div className="bg-white/50 dark:bg-black/30 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-inner border border-white/20 dark:border-gray-700/50 group-hover:scale-110 transition-transform duration-500">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
