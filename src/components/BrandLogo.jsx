import { Link } from 'react-router-dom';

const BrandLogo = ({ isDark = false }) => {
    return (
        <div className="flex items-center gap-3 md:gap-4 group cursor-pointer transition-transform duration-300 hover:scale-105">
            {/* Emblem Circle */}
            <div className={`relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full shadow-lg overflow-hidden border-2 ${isDark ? 'border-gray-800 shadow-accent/10 bg-gray-900' : 'border-white shadow-primary/20 bg-white'}`}>
                {/* Embedded Spice Texture in Logo */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=200&auto=format&fit=crop')" }}
                ></div>
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/80 to-gray-900/90 mix-blend-multiply"></div>

                {/* Emblem Letter */}
                <span className="relative z-10 font-serif text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-accent via-yellow-300 to-yellow-100 drop-shadow-md">
                    R
                </span>
            </div>

            {/* Typography Details */}
            <div className="flex flex-col justify-center">
                <span className={`font-serif text-2xl md:text-3xl font-extrabold leading-none tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Ranpariya's <span className="text-primary drop-shadow-sm">Sons</span>
                </span>
                <span className={`font-sans text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.25em] font-semibold mt-1.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Global Spice Exporter
                </span>
            </div>
        </div>
    );
};

export default BrandLogo;
