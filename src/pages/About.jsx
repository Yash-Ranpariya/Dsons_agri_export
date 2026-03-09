import { motion } from 'framer-motion';
import { Award, Target, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="py-24 bg-beige min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif mb-6">About Ranpariya's Sons</h1>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop"
                                alt="Spice Market"
                                className="relative rounded-2xl shadow-xl w-full object-cover h-[450px]"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl font-bold font-serif text-gray-900">A Legacy of Quality and Trust</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Ranpariya's Sons started as a family-based spice export business with a clear vision: to bring the authentic taste and rich aroma of Indian spices to kitchens across the globe. From a small local enterprise, our dedication to uncompromising quality has propelled us into the global market.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We work directly with farmers and cultivators, ensuring that every batch of spices meets our stringent quality standards. Our global export operations span over 35 countries.
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
                            whileHover={{ y: -10 }}
                            className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center"
                        >
                            <div className="flex justify-center">{item.icon}</div>
                            <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
