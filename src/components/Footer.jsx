import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-primary mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="inline-block mb-4">
                            <BrandLogo isDark={true} />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Premium Quality Indian Spices Exporter. We deliver authentic Indian spices worldwide,
                            ensuring the highest standards of quality and purity.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-secondary">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> About Us</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Our Products</Link></li>
                            <li><Link to="/infrastructure" className="hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Infrastructure</Link></li>
                            <li><Link to="/blog" className="hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Spice Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center"><span className="mr-2 text-primary">›</span> Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-secondary">
                            Contact Info
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">123 Spice Market, Industrial Area Phase II, New Delhi, India - 110020</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-primary mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">export@ranpariyassons.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Ranpariya's Sons Exporters. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
