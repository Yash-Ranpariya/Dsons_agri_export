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
        <div className="py-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Knowledge Hub</span>
                    <h1 className="text-5xl font-extrabold text-gray-900 font-serif mb-6">Our Blog</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Insights, industry news, and everything you need to know about the world of premium spices.</p>
                    <div className="w-24 h-1 bg-accent mx-auto mt-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-beige rounded-2xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full cursor-pointer hover:shadow-2xl transition-all"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User size={16} className="mr-1" />
                                        {post.author}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <Link to="#" className="text-secondary font-bold hover:text-primary transition-colors flex items-center md:mt-auto">
                                    Read Article &rarr;
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
