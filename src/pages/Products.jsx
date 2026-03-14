import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../components/ProductModal';

const products = [
    {
        name: 'Turmeric',
        category: 'Root Spice',
        desc: 'Golden premium grade turmeric powder with high curcumin content, ethically sourced from the best farms in South India.',
        image: '/images/ranpariyas_sons_turmeric_3d_1772956658958.png',
        origin: 'Erode, Tamil Nadu, India',
        harvestSeason: 'January to March',
        shelfLife: '18-24 Months in cool, dry place'
    },
    {
        name: 'Red Chilli',
        category: 'Ground Spice',
        desc: 'Vibrant, fiery red whole chillies and powder, carefully sorted for precise heat levels and deep natural color.',
        image: '/images/ranpariyas_sons_chilli_3d_1772956734797.png',
        origin: 'Guntur, Andhra Pradesh, India',
        harvestSeason: 'February to April',
        shelfLife: '12-18 Months in airtight packaging'
    },
    {
        name: 'Cumin Seeds',
        category: 'Whole Spice',
        desc: 'Aromatic, large-size Indian cumin seeds renowned for their strong, robust flavor and essential oil profiles.',
        image: '/images/ranpariyas_sons_cumin_3d_1772956763093.png',
        origin: 'Gujarat & Rajasthan, India',
        harvestSeason: 'February to May',
        shelfLife: '24 Months (Whole Seeds)'
    },
    {
        name: 'Coriander Seeds',
        category: 'Whole Spice',
        desc: 'Crisp and aromatic whole coriander seeds, processed seamlessly to preserve their sweet and citrusy flavor.',
        image: '/images/ranpariyas_sons_coriander_3d_1772956791737.png',
        origin: 'Madhya Pradesh & Rajasthan, India',
        harvestSeason: 'February to April',
        shelfLife: '12-15 Months stored properly'
    },
    {
        name: 'Garam Masala',
        category: 'Spice Blend',
        desc: 'Our signature blend of premium spices, roasted and ground together to perfect the authentic Indian aroma in any dish.',
        image: '/images/ranpariyas_sons_garam_masala_3d_1772956847430.png',
        origin: 'Expertly Blended in New Delhi',
        harvestSeason: 'Year-Round Production',
        shelfLife: '12 Months to retain aroma'
    },
    {
        name: 'Black Pepper',
        category: 'Whole Spice',
        desc: 'Known as "Black Gold"—bold, sharp, and intense peppercorns exported directly from the plantations of Malabar.',
        image: '/images/ranpariyas_sons_pepper_3d_1772956819977.png',
        origin: 'Malabar Coast, Kerala, India',
        harvestSeason: 'November to February',
        shelfLife: '3-4 Years (Whole Peppercorns)'
    },
    {
        name: 'Green Cardamom',
        category: 'Whole Pods',
        desc: 'The "Queen of Spices", hand-picked green cardamom pods full of intense, refreshing, and highly aromatic black seeds.',
        image: '/images/ranpariyas_sons_cardamom_3d_1772956878078.png',
        origin: 'Idukki, Kerala, India',
        harvestSeason: 'August to February',
        shelfLife: '24 Months in sealed containers'
    },
    {
        name: 'Cloves',
        category: 'Whole Buds',
        desc: 'Select, full-head cloves bursting with essential oils, delivering a warm, intense, and sweet-spicy flavor profile.',
        image: '/images/ranpariyas_sons_cloves_3d_1772956894487.png',
        origin: 'Kanyakumari, Tamil Nadu, India',
        harvestSeason: 'December to April',
        shelfLife: '24-36 Months in cool, dark place'
    },
    {
        name: 'Garlic Powder',
        category: 'Dehydrated Spice',
        desc: 'Premium quality dehydrated garlic powder with an intense flavor and aroma, perfect for culinary use and mass manufacturing.',
        image: '/images/garlic_powder.png',
        origin: 'Gujarat & Madhya Pradesh, India',
        harvestSeason: 'March to May',
        shelfLife: '12-18 Months in airtight packaging'
    },
    {
        name: 'Onion Powder',
        category: 'Dehydrated Spice',
        desc: 'Aromatic and fine onion powder, made from farm-fresh dehydrated onions, delivering sweet and sharp savory flavor.',
        image: '/images/onion_powder.png',
        origin: 'Maharashtra & Gujarat, India',
        harvestSeason: 'January to May',
        shelfLife: '12-18 Months in airtight packaging'
    }
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="py-32 bg-beige dark:bg-dark-bg transition-colors duration-500 min-h-screen relative z-0">
            {/* Background glowing orbs */}
            <div className="fixed top-20 left-10 w-96 h-96 bg-primary/5 dark:bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="fixed bottom-10 right-10 w-[500px] h-[500px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 relative"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[100px] -z-10 rounded-full"></div>
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-pulse">Export Quality</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-serif mb-6 drop-shadow-lg">Our Premium Spices</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">Browse our exquisite selection of 100% natural, lab-tested spices ready for global dispatch in bulk quantities.</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((prod, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-3xl overflow-hidden glass-premium flex flex-col h-full cursor-pointer"
                            onClick={() => setSelectedProduct(prod)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                            <div className="h-72 overflow-hidden relative z-10 m-3 rounded-2xl">
                                <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <span className="bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">{prod.category}</span>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col z-10 relative">
                                <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">{prod.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                                    {prod.desc}
                                </p>
                                <button className="text-primary dark:text-accent font-bold flex items-center group/btn mt-auto relative">
                                    <span className="relative z-10 flex items-center transition-transform group-hover/btn:translate-x-2">
                                        View Full Details
                                        <Info className="ml-2" size={20} />
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            <ProductModal
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
                product={selectedProduct}
            />
        </div>
    );
};

export default Products;
