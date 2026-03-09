import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe } from 'lucide-react';
import RecipeVideos from '../components/RecipeVideos';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                    >
                        <source src="/videos/hero-spice.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Dark gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/60 to-gray-900/40"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="block text-accent font-semibold tracking-widest uppercase mb-4 text-sm md:text-base tracking-[0.2em] animate-pulse">Welcome to Ranpariya's Sons</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-serif drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                            Premium Quality <br />
                            <span className="text-gradient drop-shadow-[0_2px_5px_rgba(230,170,50,0.3)]">Indian Spices</span> Exporter
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-lg tracking-wide">
                            Delivering authentic, ethically-sourced Indian spices worldwide.
                        </p>
                        <div className="flex justify-center gap-6 flex-wrap mt-8">
                            <Link to="/products" className="relative overflow-hidden group bg-primary/90 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(185,28,28,0.4)] hover:shadow-[0_0_30px_rgba(185,28,28,0.7)] hover:bg-primary flex items-center border border-white/20">
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                                <span className="relative flex items-center">
                                    Explore Products <ArrowRight className="ml-2" size={20} />
                                </span>
                            </Link>
                            <Link to="/contact" className="glass hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Overview */}
            <section className="py-24 bg-beige dark:bg-gray-950 relative transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="flex flex-col md:flex-row items-center gap-16"
                    >
                        <motion.div variants={fadeIn} className="flex-1">
                            <div className="relative">
                                <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/20 rounded-full z-0"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1599909693688-693358055ee4?q=80&w=2670&auto=format&fit=crop"
                                    alt="Assorted Spices"
                                    className="rounded-xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                                />
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="flex-1 space-y-6">
                            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm relative pl-12 after:content-[''] after:absolute after:left-0 after:top-1/2 after:w-8 after:h-0.5 after:bg-primary">Our Story</h2>
                            <h3 className="text-4xl text-gray-900 dark:text-white font-bold mb-4 font-serif transition-colors duration-500">Global Leader in Spices Export</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-500">
                                Ranpariya's Sons has established itself as a premier name in the spices export industry. We bring you the authentic aroma and taste of India, carefully processed and packaged to retain their natural oils and flavor.
                            </p>

                            <ul className="space-y-4 mt-8">
                                {[
                                    '100% natural and authentic spices',
                                    'Rigorous quality control and lab testing',
                                    'Global export capabilities and certifications',
                                    'State-of-the-art processing infrastructure'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                                        <CheckCircle className="text-primary mr-3 flex-shrink-0" size={20} />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <motion.div whileHover={{ x: 10 }} className="pt-6">
                                <Link to="/about" className="text-primary font-bold flex items-center group">
                                    Learn more about us
                                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Products Mini-Section */}
            <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif transition-colors duration-500">Our Signature Spices</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Turmeric Powder', image: '/images/ranpariyas_sons_turmeric_3d_1772956658958.png' },
                            { name: 'Red Chilli', image: '/images/ranpariyas_sons_chilli_3d_1772956734797.png' },
                            { name: 'Cumin Seeds', image: '/images/ranpariyas_sons_cumin_3d_1772956763093.png' }
                        ].map((prod, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="group relative rounded-xl overflow-hidden shadow-xl cursor-pointer"
                            >
                                <div className="h-80 w-full overflow-hidden">
                                    <img
                                        src={prod.image}
                                        alt={prod.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-2">{prod.name}</h3>
                                    <div className="w-12 h-0.5 bg-accent mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        <Link to="/products" className="inline-flex items-center text-secondary font-bold border-2 border-secondary px-8 py-3 rounded-full hover:bg-secondary hover:text-white transition-colors duration-300">
                            View All Products
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Culinary Inspirations (Simulated Video Component) */}
            <RecipeVideos />

            {/* Global Reach */}
            <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 mb-12 md:mb-0"
                        >
                            <Globe className="text-accent mb-6 w-16 h-16" strokeWidth={1.5} />
                            <h2 className="text-4xl font-bold mb-6 font-serif leading-tight">Exporting Excellence <br />Across the Globe</h2>
                            <p className="text-gray-400 text-lg mb-8 max-w-lg">
                                Our widespread network ensures timely delivery and unmatched quality across multiple continents. From farm to your doorstep.
                            </p>
                            <div className="grid grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">35+</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-500">Countries Served</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary mb-2">20K+</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-500">Tons Exported</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-5/12 relative"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
                            <div className="glass-premium p-10 rounded-3xl relative z-10 text-gray-900 dark:text-white">
                                <h3 className="text-3xl font-bold mb-8 font-serif">Ready to export?</h3>
                                <form className="space-y-5">
                                    <input type="text" placeholder="Your Name" className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all shadow-inner" />
                                    <input type="email" placeholder="Email Address" className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all shadow-inner" />
                                    <textarea placeholder="Tell us about your requirement" rows="4" className="w-full bg-white/50 dark:bg-black/40 border border-gray-300 dark:border-gray-700/50 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all resize-none shadow-inner"></textarea>
                                    <button className="w-full relative overflow-hidden group bg-primary text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(139,26,32,0.4)] hover:shadow-[0_0_30px_rgba(139,26,32,0.6)] hover:-translate-y-1">
                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                                        <span className="relative">Send Inquiry</span>
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
