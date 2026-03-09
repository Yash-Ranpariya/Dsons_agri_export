import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        title: 'Health Benefits of Authentic Indian Spices',
        category: 'Wellness',
        date: 'Oct 12, 2024',
        author: 'Ranpariya\'s Sons Quality Team',
        excerpt: 'Discover the profound health benefits of incorporating traditional Indian spices like Turmeric and Cumin into your daily diet.',
        img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop'
    },
    {
        title: 'The Guide to Export Quality Spices',
        category: 'Industry Standards',
        date: 'Nov 05, 2024',
        author: 'Ranpariya\'s Sons Export Division',
        excerpt: 'What does "Export Quality" really mean? Learn the rigorous testing and grading processes involved before international shipping.',
        img: 'https://plus.unsplash.com/premium_photo-1671130282133-c211283fb299?q=80&w=2370&auto=format&fit=crop'
    },
    {
        title: 'Spice Farming in India: A Traditional Heritage',
        category: 'Agriculture',
        date: 'Dec 01, 2024',
        author: 'Ranpariya\'s Sons Supply Chain',
        excerpt: 'Explore the lush spice farms of Southern and Northern India, where generations-old agricultural traditions meet modern farming.',
        img: 'https://images.unsplash.com/photo-1588612501099-2a9bb4454f39?q=80&w=2670&auto=format&fit=crop'
    }
]

const Blog = () => {
    return (
        <div className="py-32 bg-beige dark:bg-dark-bg min-h-screen relative overflow-hidden transition-colors duration-500">
            {/* Background glowing orbs */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20 relative"
                >
                    <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-pulse">Knowledge Hub</span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white font-serif mb-6 drop-shadow-lg">Our Blog</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">Insights, industry news, and everything you need to know about the world of premium spices.</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -10 }}
                            className="glass-premium rounded-3xl overflow-hidden shadow-xl group flex flex-col h-full cursor-pointer transition-all"
                        >
                            <div className="h-64 overflow-hidden relative m-3 rounded-2xl">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col relative z-10">
                                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4 space-x-4 font-medium">
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-1.5 text-primary dark:text-accent" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User size={16} className="mr-1.5 text-primary dark:text-accent" />
                                        {post.author}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1 leading-relaxed font-light">
                                    {post.excerpt}
                                </p>
                                <Link to="#" className="text-primary dark:text-accent font-bold group-hover:text-secondary transition-colors flex items-center md:mt-auto">
                                    <span className="relative flex items-center transition-transform group-hover:translate-x-2">
                                        Read Article &rarr;
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Blog;
