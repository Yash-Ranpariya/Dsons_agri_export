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
    }
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="py-24 bg-white min-h-screen relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Export Quality</span>
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif mb-6">Our Premium Spices</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our exquisite selection of 100% natural, lab-tested spices ready for global dispatch in bulk quantities.</p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((prod, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group bg-beige rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={prod.image}
                                    alt={prod.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col cursor-pointer" onClick={() => setSelectedProduct(prod)}>
                                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-3">{prod.name}</h3>
                                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                                    {prod.desc}
                                </p>
                                <button className="text-primary font-bold flex items-center group/btn mt-auto">
                                    View Full Details
                                    <Info className="ml-2 transform group-hover/btn:scale-110 transition-transform" size={20} />
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
