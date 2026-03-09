import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Infrastructure', path: '/infrastructure' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ];

    // Setup dark mode state detection for the BrandLogo text color
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Create an observer to watch for class changes on html tag
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDarkMode(document.documentElement.classList.contains('dark'));
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        // Initial state
        setIsDarkMode(document.documentElement.classList.contains('dark'));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-500 bg-white/70 dark:bg-dark-surface/70 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24 transition-all duration-300">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center mt-2 group transform hover:scale-105 transition-transform duration-300">
                            <BrandLogo isDark={isDarkMode} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center bg-white/40 dark:bg-black/30 px-6 py-2 rounded-full border border-white/50 dark:border-white/10 shadow-inner backdrop-blur-md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative group px-2 py-1 ${location.pathname === link.path
                                    ? 'text-primary dark:text-accent font-bold'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300'
                                    } text-sm uppercase tracking-[0.15em] font-medium`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent rounded-full transition-transform duration-300 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {/* Dark Mode Switcher */}
                        <ThemeToggle />
                        <Link to="/contact" className="relative overflow-hidden group bg-gray-900 dark:bg-primary text-white px-8 py-3 rounded-full hover:bg-gray-800 dark:hover:bg-primary/90 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(139,26,32,0.4)] hover:-translate-y-0.5 font-bold tracking-wider uppercase text-sm">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                            <span className="relative">Get Quote</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button & Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass-premium absolute w-full left-0 border-t border-white/20 dark:border-white/10 mt-1 shadow-2xl origin-top animate-in slide-in-from-top-2 duration-300">
                    <div className="px-4 pt-4 pb-8 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-4 rounded-xl text-base font-bold uppercase tracking-wider ${location.pathname === link.path ? 'bg-primary/10 text-primary dark:text-accent' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-white/50 dark:hover:bg-black/50'} transition-colors`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block mt-6 text-center bg-gray-900 dark:bg-primary text-white px-6 py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-primary/90 font-bold uppercase tracking-widest shadow-xl"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
