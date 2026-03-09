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
        <nav className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-md fixed w-full z-50 top-0 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center mt-2 group">
                            <BrandLogo isDark={isDarkMode} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`${location.pathname === link.path
                                    ? 'text-primary font-bold dark:text-accent'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300'
                                    } text-sm uppercase tracking-wider font-medium`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="ml-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-all duration-300 shadow-md hover:shadow-lg">
                            Get Quote
                        </Link>
                        {/* Dark Mode Switcher */}
                        <ThemeToggle />
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
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl absolute w-full left-0 border-t border-gray-100 dark:border-gray-800">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block mt-4 text-center bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary font-medium shadow-md"
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
