import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Instagram, Mail, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/mockData';
import { toast } from '../hooks/use-toast';

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

export const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navItems.map(item => item.id);
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-coral-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>KR</motion.div>
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-colors relative ${activeSection === item.id ? 'text-teal-600 dark:text-teal-400' : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400'}`}>
                                {item.label}
                                {activeSection === item.id && <motion.div layoutId="activeSection" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 dark:bg-teal-400" />}
                            </button>
                        ))}
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">{theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}</button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
                    </div>
                </div>
            </div>
            <AnimatePresence>{isOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="px-4 py-4 space-y-3">{navItems.map((item) => (<button key={item.id} onClick={() => scrollToSection(item.id)} className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${activeSection === item.id ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>{item.label}</button>))}</div>
                </motion.div>
            )}</AnimatePresence>
        </motion.nav>
    );
};

export const Footer = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            toast({ title: 'Access Granted', description: 'Admin panel is currently in read-only mode for this demonstration.' });
            setShowLogin(false);
        } else {
            toast({ title: 'Access Denied', description: 'Incorrect password.', variant: 'destructive' });
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-coral-400 bg-clip-text text-transparent mb-4">{personalData.name}</h3>
                        <p className="text-gray-400 mb-4">{personalData.title}</p>
                        <p className="text-gray-400 text-sm">{personalData.location}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">{['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (<li key={link}><a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">{link}</a></li>))}</ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
                        <div className="space-y-3">
                            <a href={`mailto:${personalData.email}`} className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"><Mail className="w-4 h-4" /><span>{personalData.email}</span></a>
                            <a href={`tel:${personalData.phone}`} className="flex items-center space-x-2 text-gray-400 hover:text-teal-400 transition-colors text-sm"><Phone className="w-4 h-4" /><span>{personalData.phone}</span></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <div className="flex space-x-4">
                            {[{ icon: Linkedin, href: personalData.social.linkedin }, { icon: Github, href: personalData.social.github }, { icon: Instagram, href: personalData.social.instagram }].map((social, i) => (
                                <motion.a key={i} href={social.href} target="_blank" whileHover={{ y: -2 }} className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-600 transition-colors"><social.icon className="w-4 h-4" /></motion.a>
                            ))}
                        </div>
                        <button onClick={() => setShowLogin(true)} className="text-gray-600 hover:text-teal-500 transition-colors"><ShieldCheck className="w-5 h-5" /></button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showLogin && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-sm w-full relative">
                            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-gray-500"><X className="w-5 h-5" /></button>
                            <h3 className="text-2xl font-bold mb-6 dark:text-white">Admin Login</h3>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div><label className="block text-sm font-medium mb-1 dark:text-gray-300">Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" autoFocus /></div>
                                <button type="submit" className="w-full py-2 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 transition-colors">Access Dashboard</button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
};
