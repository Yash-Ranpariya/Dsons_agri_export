import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Clock, Package } from 'lucide-react';
import { useState } from 'react';
import BrandLogo from './BrandLogo';

const ProductModal = ({ isOpen, onClose, product }) => {
    const [selectedWeight, setSelectedWeight] = useState('500gm');
    const weights = ['100gm', '250gm', '500gm', '1kg', '5kg'];

    if (!isOpen || !product) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm overflow-y-auto"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="bg-white rounded-3xl overflow-hidden w-full max-w-5xl shadow-2xl flex flex-col md:flex-row my-8 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-gray-800 p-2 rounded-full backdrop-blur-md shadow-sm transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Left Column: Image & Visual Packet Mockup */}
                    <div className="w-full md:w-2/5 bg-gray-50 flex flex-col">
                        <div className="h-64 md:h-2/5 w-full relative">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                        </div>

                        {/* Packaging Mockup */}
                        <div className="flex-1 p-8 flex flex-col items-center justify-center bg-[#fdf8f5] overflow-hidden">
                            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-8 inline-flex items-center">
                                <Package size={16} className="mr-2" /> Export Packaging Preview
                            </h4>

                            {/* realistic standup pouch - Black & Gold Theme */}
                            <div className="relative w-56 h-80 bg-gray-900 rounded-t-md rounded-b-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden transform hover:scale-[1.03] transition-transform duration-500 border border-gray-800 flex flex-col items-center group">
                                {/* Heat seal lines */}
                                <div className="absolute top-0 w-full h-8 bg-gray-900 border-b border-gray-800 flex flex-col justify-evenly py-1 px-2 z-20">
                                    <div className="w-full h-0.5 bg-gray-700/50 rounded-full"></div>
                                    <div className="w-full h-0.5 bg-gray-700/50 rounded-full"></div>
                                    {/* Tear notch */}
                                    <div className="absolute -left-1.5 top-4 w-3 h-3 bg-[#fdf8f5] rounded-full shadow-inner border border-gray-800"></div>
                                    <div className="absolute -right-1.5 top-4 w-3 h-3 bg-[#fdf8f5] rounded-full shadow-inner border border-gray-800"></div>
                                </div>

                                {/* Ziplock line */}
                                <div className="absolute top-8 w-full h-1.5 bg-gray-800 border-b border-gray-950 z-20 shadow-sm shadow-black/50"></div>

                                <div className="flex-1 w-full bg-gradient-to-b from-gray-800 via-gray-900 to-black flex flex-col items-center pt-10 pb-5 px-5 relative z-10">
                                    <div className="transform scale-[0.6] w-full flex justify-center h-12 mb-2 origin-top">
                                        <BrandLogo isDark={true} />
                                    </div>

                                    {/* Golden Typography */}
                                    <h3 className="font-serif font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 leading-none tracking-tight text-center drop-shadow-sm">{product.name}</h3>
                                    <span className="text-[0.6rem] font-bold text-yellow-500/80 mt-1.5 tracking-[0.2em] uppercase">100% Pure & Natural</span>

                                    {/* Product Image Window */}
                                    <div className="mt-5 w-32 h-32 rounded-full overflow-hidden border-[3px] border-yellow-500/40 shadow-[0_0_15px_rgba(234,179,8,0.2)] relative group">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 shadow-[inset_0_4px_15px_rgba(0,0,0,0.8)] rounded-full pointer-events-none border border-black/50"></div>
                                    </div>

                                    <div className="mt-auto w-full flex justify-between items-end border-t border-gray-800 pt-3">
                                        <div className="flex flex-col">
                                            <span className="text-[0.5rem] text-gray-500 font-bold uppercase tracking-wider">Export Quality</span>
                                            <span className="text-xs font-bold text-yellow-500 tracking-tight">Grade A</span>
                                        </div>
                                        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-gray-900 text-[0.65rem] font-extrabold px-2 py-1 rounded shadow-[0_2px_5px_rgba(234,179,8,0.3)]">
                                            {selectedWeight} Net Wt.
                                        </div>
                                    </div>
                                </div>

                                {/* 3D Pouch Lighting Overlay - Matte Black Finish Highlights */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-black/60 pointer-events-none z-30"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/80 pointer-events-none z-30"></div>
                                {/* Pouch wrinkles/reflections (Subtle gloss on matte body) */}
                                <div className="absolute top-1/4 -left-3 w-8 h-32 bg-white/10 blur-xl transform -skew-x-12 pointer-events-none z-30"></div>
                                <div className="absolute top-1/3 right-0 w-12 h-40 bg-black/40 blur-lg transform skew-x-12 pointer-events-none z-30"></div>
                                <div className="absolute top-2/3 left-1/4 w-32 h-8 bg-white/5 blur-xl rounded-full pointer-events-none z-30"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{product.category || 'Premium Spice'}</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-gray-900 mb-6">{product.name}</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8 border-b border-gray-100 pb-8">
                            {product.desc}
                        </p>

                        {/* Informational Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <MapPin className="text-primary mb-3" size={24} />
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Origin</h4>
                                <p className="text-gray-600 text-sm">{product.origin}</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <Calendar className="text-primary mb-3" size={24} />
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Harvest time</h4>
                                <p className="text-gray-600 text-sm">{product.harvestSeason}</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                <Clock className="text-primary mb-3" size={24} />
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">Shelf Life</h4>
                                <p className="text-gray-600 text-sm">{product.shelfLife}</p>
                            </div>
                        </div>

                        {/* Weight Selector */}
                        <div className="mt-auto">
                            <h4 className="font-bold text-gray-900 mb-4 inline-flex items-center">
                                Select Packaging Size
                            </h4>
                            <div className="flex flex-wrap gap-3 mb-8">
                                {weights.map((w) => (
                                    <button
                                        key={w}
                                        onClick={() => setSelectedWeight(w)}
                                        className={`px-5 py-2.5 rounded-lg border-2 font-bold text-sm transition-all ${selectedWeight === w
                                            ? 'border-primary bg-primary text-white shadow-md'
                                            : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                                            }`}
                                    >
                                        {w}
                                    </button>
                                ))}
                            </div>

                            <a href={`mailto:export@ranpariyassons.com?subject=Inquiry for ${product.name} (${selectedWeight})`} className="w-full md:w-auto inline-block text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                Request Bulk Quote
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;
