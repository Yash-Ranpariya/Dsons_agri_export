import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

const SpiceParticle = ({ color, duration, delay, left }) => (
    <div
        className="absolute rounded-full"
        style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            backgroundColor: color,
            left: `${left}%`,
            top: '-5%',
            opacity: 0,
            animation: `spiceFall ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            boxShadow: `0 0 5px ${color}`
        }}
    ></div>
);

const RecipeVideoCard = ({ title, img, spiceColor }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Generate 40 random particles
    const particles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        duration: Math.random() * 1.5 + 0.8,
        delay: Math.random() * 2,
        left: Math.random() * 80 + 10 // concentrated in center 80%
    }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden shadow-2xl h-96 cursor-pointer bg-black"
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
        >
            {/* Background Image that zooms on hover */}
            <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-40"
            />

            {/* Play Button Interface */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-20 h-20 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/90 group-hover:bg-primary group-hover:border-primary transition-all">
                    <Play size={32} className="ml-2" fill="currentColor" />
                </div>
            </div>

            {/* Simulated Video Effect: Falling Spices from strict Top to Bottom! */}
            {isPlaying && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Simulated smoke rising from the pan */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-white/10 blur-3xl rounded-t-[100%] animate-[smokeRise_3s_ease-out_infinite]"></div>
                    <div className="absolute bottom-10 left-10 right-10 h-32 bg-yellow-500/10 blur-2xl animate-[smokeRise_4s_ease-in_infinite_0.5s]"></div>

                    {/* Falling Spice Particles */}
                    {particles.map(p => (
                        <SpiceParticle
                            key={p.id}
                            color={spiceColor}
                            duration={p.duration}
                            delay={p.delay}
                            left={p.left}
                        />
                    ))}
                </div>
            )}

            {/* Title Gradient Footer */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <span className="text-xs font-bold text-accent uppercase tracking-widest mb-1 block ">{isPlaying ? 'Now Playing' : 'Recipe Video'}</span>
                <h3 className="text-2xl font-serif font-bold text-white leading-tight">{title}</h3>
            </div>
        </motion.div>
    );
};

const RecipeVideos = () => {
    return (
        <section className="py-24 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
            {/* Atmospheric Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Cinematic Experience</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white font-serif mb-6">Culinary Inspirations</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Watch authentic Indian recipes come to life. See our premium spices in action as they elevate every dish.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <RecipeVideoCard
                        title="Authentic Golden Turmeric Curry"
                        img="/images/ranpariyas_sons_turmeric_3d_1772956658958.png"
                        spiceColor="#facc15" // yellow-400
                    />
                    <RecipeVideoCard
                        title="Fiery Cast-Iron Chilli Roast"
                        img="/images/ranpariyas_sons_chilli_3d_1772956734797.png"
                        spiceColor="#ef4444" // red-500
                    />
                    <RecipeVideoCard
                        title="Slow-Cooked Cumin Rice Pilaf"
                        img="/images/ranpariyas_sons_cumin_3d_1772956763093.png"
                        spiceColor="#b45309" // amber-700
                    />
                </div>
            </div>
        </section>
    );
};

export default RecipeVideos;
