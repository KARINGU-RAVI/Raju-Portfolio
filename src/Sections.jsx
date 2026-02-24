import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { createPortal } from 'react-dom';
import {
    ArrowDown, Download, MapPin, Languages, Calendar, Briefcase,
    Video, Wand2, Palette, Boxes, ExternalLink, ArrowRight, X, ZoomIn,
    GraduationCap, BookOpen, Clock, Users, Mail, Phone, Send,
    Linkedin, Github, Instagram, Twitter
} from 'lucide-react';
import { personalData, aboutData, experienceData, skillsData, projectsData, educationData, coursesData, contactConfig } from './data/mockData';
import ImageCarousel from './components/ui/ImageCarousel';
import { toast } from './hooks/use-toast';

// --- HERO SECTION ---
export const Hero = () => {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-teal-200/20 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-coral-200/20 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-600 dark:text-teal-400 font-medium mb-4 text-lg">
                            Hello, I'm
                        </motion.p>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent block">
                                {personalData.name}
                            </motion.span>
                        </h1>
                        <motion.h2 initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">
                            {personalData.title}
                        </motion.h2>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
                            Creating engaging visuals and animations that tell compelling stories.
                            Passionate about bringing ideas to life through motion graphics and video editing.
                        </motion.p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                        >
                            <span>Get In Touch</span>
                        </motion.button>
                        <motion.a
                            href={personalData.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 border border-gray-200 dark:border-gray-700"
                        >
                            <Download className="w-5 h-5" />
                            <span>Download Resume</span>
                        </motion.a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-20">
                        <motion.button
                            onClick={scrollToAbout}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                            aria-label="Scroll down"
                        >
                            <ArrowDown className="w-8 h-8" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- ABOUT SECTION ---
export const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                        <div className="relative">
                            <motion.div whileHover={{ scale: 1.02 }} className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img src={aboutData.image} alt="Profile" className="w-full h-auto max-h-[500px] lg:max-h-[650px] object-cover" />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-coral-400/20 rounded-2xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-coral-400/20 to-teal-400/20 rounded-full -z-10" />
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            About <span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-coral-600 mb-8" />
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">{aboutData.summary}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 border border-teal-200 dark:border-teal-800">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">{personalData.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} className="p-4 rounded-xl bg-gradient-to-br from-coral-50 to-coral-100 dark:from-coral-900/20 dark:to-coral-800/20 border border-coral-200 dark:border-coral-800">
                                <div className="flex items-center space-x-3">
                                    <Languages className="w-5 h-5 text-coral-600 dark:text-coral-400" />
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Languages</p>
                                        <p className="font-semibold text-gray-900 dark:text-white">{personalData.languages.join(', ')}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

// --- EXPERIENCE SECTION ---
export const Experience = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
    const getTypeColor = (type) => {
        switch (type) {
            case 'freelance': return 'from-teal-500 to-teal-600';
            case 'project': return 'from-coral-500 to-coral-600';
            case 'content': return 'from-purple-500 to-purple-600';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        My <span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-coral-600 mx-auto mb-6" />
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">A journey of creative exploration and professional growth</p>
                </motion.div>
                <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400/50 via-coral-400/50 to-teal-400/50 blur-[0.5px]" />
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-400 via-coral-400 to-teal-400" />
                    <div className="space-y-12">
                        {experienceData.map((exp, index) => (
                            <motion.div key={exp.id} variants={itemVariants} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-coral-500 border-4 border-white dark:border-gray-800 shadow-[0_0_15px_rgba(20,184,166,0.3)] z-10 transition-transform duration-300 hover:scale-125" />
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <motion.div whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)", transition: { duration: 0.3, ease: "easeOut" } }} style={{ transformZ: 0, backfaceVisibility: "hidden" }} className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 will-change-transform">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(exp.type)}`}><Briefcase className="w-5 h-5 text-white" /></div>
                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400"><Calendar className="w-4 h-4 mr-1" />{exp.period}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                                        {exp.images && exp.images.length > 0 && <ImageCarousel images={exp.images} />}
                                    </motion.div>
                                </div>
                                <div className="hidden md:block w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// --- SKILLS SECTION ---
export const Skills = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [activeCategory, setActiveCategory] = useState('videoEditing');
    const categories = [
        { id: 'videoEditing', title: 'Video Editing', icon: Video, gradient: 'from-teal-500 to-teal-600', skills: skillsData.videoEditing },
        { id: 'motionGraphics', title: 'Motion Graphics', icon: Wand2, gradient: 'from-green-500 to-green-600', skills: skillsData.motionGraphics },
        { id: 'graphicDesign', title: 'Graphic Design', icon: Palette, gradient: 'from-purple-500 to-purple-600', skills: skillsData.graphicDesign },
        { id: 'advanced', title: '3D & Advanced', icon: Boxes, gradient: 'from-indigo-500 to-indigo-600', skills: skillsData.advanced }
    ];
    const activeSkills = categories.find(cat => cat.id === activeCategory)?.skills || [];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Skills & <span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-coral-600 mx-auto mb-6" />
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">Crafting visual experiences with industry-leading tools</p>
                </motion.div>
                <div ref={ref}>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category.id ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg` : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <category.icon className="w-5 h-5" /><span>{category.title}</span>
                            </motion.button>
                        ))}
                    </div>
                    <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeSkills.map((skill, index) => (
                            <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                                    <span className="text-sm font-bold text-teal-600 dark:text-teal-400">{skill.level}%</span>
                                </div>
                                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={inView ? { width: `${skill.level}%` } : { width: 0 }} transition={{ duration: 1, delay: index * 0.1 }} className={`absolute top-0 left-0 h-full bg-gradient-to-r ${categories.find(cat => cat.id === activeCategory)?.gradient} rounded-full`} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- PROJECTS SECTION ---
export const Projects = () => {
    const [selectedImg, setSelectedImg] = useState(null);
    useEffect(() => {
        if (selectedImg) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = 'unset'; }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedImg]);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const isVideo = (src) => { if (typeof src !== 'string') return false; return src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm'); };

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Featured <span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">Projects</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-coral-600 mx-auto mb-6" />
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">Showcasing creative solutions and brand storytelling</p>
                </motion.div>
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ y: -10 }} className="group">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative h-48 sm:h-64 overflow-hidden cursor-pointer group/img" style={{ transform: 'translateZ(0)' }} onClick={() => setSelectedImg(project.image)}>
                                    {isVideo(project.image) ? <video autoPlay loop muted playsInline src={project.image} className="w-full h-full object-cover will-change-transform group-hover:scale-105 transition-transform duration-500" /> : <motion.img whileHover={{ scale: 1.05 }} transition={{ duration: 0.5, ease: "easeOut" }} src={project.image} alt={project.title} className="w-full h-full object-cover will-change-transform" style={{ backfaceVisibility: "hidden" }} />}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/20"><div className="bg-white/20 backdrop-blur-md p-3 rounded-full"><ZoomIn className="w-6 h-6 text-white" /></div></div>
                                    <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="absolute inset-0 bg-gradient-to-br from-teal-600/90 to-coral-600/90 flex items-center justify-center"><motion.a href={project.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center space-x-2 shadow-lg"><span>View Project</span><ExternalLink className="w-4 h-4" /></motion.a></motion.div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">{project.skills.map((skill, idx) => <span key={idx} className="px-3 py-1 text-sm bg-gradient-to-r from-teal-50 to-coral-50 dark:from-teal-900/30 dark:to-coral-900/30 text-teal-700 dark:text-teal-300 rounded-full border border-teal-200 dark:border-teal-800">{skill}</span>)}</div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 font-semibold hover:underline"><span>View Details</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {typeof document !== 'undefined' && createPortal(<AnimatePresence>{selectedImg && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImg(null)} className="fixed inset-0 bg-black z-[9999] flex items-center justify-center cursor-zoom-out overflow-hidden" style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}><motion.button onClick={() => setSelectedImg(null)} className="absolute top-8 right-8 z-[10000] text-white/80 hover:text-white p-4 bg-white/10 rounded-full backdrop-blur-md shadow-2xl" whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }} whileTap={{ scale: 0.95 }} aria-label="Close fullscreen"><X className="w-10 h-10 md:w-8 md:h-8" /></motion.button><motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="relative w-full h-full flex items-center justify-center p-0 md:p-10" onClick={(e) => e.stopPropagation()}>{isVideo(selectedImg) ? <motion.video autoPlay loop muted playsInline src={selectedImg} className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-sm shadow-[0_0_100px_rgba(255,255,255,0.1)] cursor-default" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} /> : <motion.img src={selectedImg} alt="Project Fullscreen" className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-sm shadow-[0_0_100px_rgba(255,255,255,0.1)] cursor-default" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} />}</motion.div></motion.div>)}</AnimatePresence>, document.body)}
        </section>
    );
};

// --- EDUCATION SECTION ---
export const Education = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Education & <span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">Courses</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-coral-600 mx-auto mb-6" />
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">Academic foundation and specialized training</p>
                </motion.div>
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6 }}>
                        <div className="h-full bg-gradient-to-br from-teal-50 to-coral-50 dark:from-teal-900/20 dark:to-coral-900/20 rounded-2xl p-8 border border-teal-200 dark:border-teal-800 shadow-lg">
                            <div className="flex items-center space-x-3 mb-6"><div className="p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl"><GraduationCap className="w-8 h-8 text-white" /></div><h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Education</h3></div>
                            {educationData.map((edu) => (<motion.div key={edu.id} whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-4"><h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4><p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-3">{edu.institution}</p><div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400"><div className="flex items-center space-x-2"><MapPin className="w-4 h-4" /><span>{edu.location}</span></div><span className="font-medium">{edu.period}</span></div></motion.div>))}
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.6 }}>
                        <div className="h-full bg-gradient-to-br from-coral-50 to-purple-50 dark:from-coral-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-coral-200 dark:border-coral-800 shadow-lg">
                            <div className="flex items-center space-x-3 mb-6"><div className="p-3 bg-gradient-to-r from-coral-500 to-coral-600 rounded-xl"><BookOpen className="w-8 h-8 text-white" /></div><h3 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Courses</h3></div>
                            <div className="space-y-4">{coursesData.map((course, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.03, x: 5 }} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md flex items-center space-x-3"><div className="w-2 h-2 shrink-0 bg-gradient-to-r from-coral-500 to-purple-500 rounded-full" /><p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">{course}</p></motion.div>))}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// --- AVAILABILITY SECTION ---
export const Availability = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const availabilityOptions = [
        { id: 1, title: 'Freelancing', description: 'Available for exciting freelance projects and creative collaborations', icon: Briefcase, gradient: 'from-teal-500 to-teal-600', bgColor: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20', borderColor: 'border-teal-200 dark:border-teal-800' },
        { id: 2, title: 'Full-Time Roles', description: 'Open to full-time opportunities with innovative creative teams', icon: Users, gradient: 'from-coral-500 to-coral-600', bgColor: 'from-coral-50 to-coral-100 dark:from-coral-900/20 dark:to-coral-800/20', borderColor: 'border-coral-200 dark:border-coral-800' },
        { id: 3, title: 'Part-Time Work', description: 'Available for part-time engagements and contract positions', icon: Clock, gradient: 'from-purple-500 to-purple-600', bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20', borderColor: 'border-purple-200 dark:border-purple-800' }
    ];

    return (
        <section id="availability" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Work <span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">Availability</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-coral-600 mx-auto mb-6" />
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">Ready to bring your creative vision to life</p>
                </motion.div>
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {availabilityOptions.map((option, index) => (
                        <motion.div key={option.id} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ y: -10, scale: 1.02 }} className="group">
                            <div className={`h-full bg-gradient-to-br ${option.bgColor} rounded-2xl p-5 sm:p-6 border ${option.borderColor} shadow-lg hover:shadow-2xl transition-all`}>
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${option.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}><option.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" /></div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{option.title}</h3>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{option.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.6 }} className="text-center"><motion.button whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-teal-600 to-coral-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all">Hire Me</motion.button></motion.div>
            </div>
        </section>
    );
};

// --- CONTACT SECTION ---
export const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch(`https://formspree.io/f/${contactConfig.formspreeId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message })
            });
            if (response.ok) {
                toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
                setFormData({ name: '', email: '', message: '' });
            } else { throw new Error('Failed to send'); }
        } catch (err) {
            toast({ title: "Submission Error", description: "There was an issue sending your message. Please try again or use direct email.", variant: "destructive" });
        } finally { setIsSubmitting(false); }
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: personalData.email, href: `mailto:${personalData.email}`, gradient: 'from-teal-500 to-teal-600' },
        { icon: Phone, label: 'Phone', value: personalData.phone, href: `tel:${personalData.phone}`, gradient: 'from-blue-500 to-blue-600' },
        { icon: MapPin, label: 'Location', value: personalData.location, href: null, gradient: 'from-purple-500 to-purple-600' }
    ];

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Get In <span className="bg-gradient-to-r from-teal-600 to-coral-600 bg-clip-text text-transparent">Touch</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-teal-600 to-coral-600 mx-auto mb-6" />
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">Let's collaborate on your next creative project</p>
                </motion.div>
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.6 }} className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3><div className="space-y-4">{contactInfo.map((info, index) => (<motion.div key={index} whileHover={{ scale: 1.02, x: 5 }} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"><div className={`p-3 bg-gradient-to-r ${info.gradient} rounded-lg`}><info.icon className="w-6 h-6 text-white" /></div><div><p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>{info.href ? <a href={info.href} className="text-gray-900 dark:text-white font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors">{info.value}</a> : <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>}</div></motion.div>))}</div></div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connect With Me</h3>
                            <div className="flex space-x-4">{[{ icon: Linkedin, href: personalData.social.linkedin, color: 'hover:bg-blue-600' }, { icon: Github, href: personalData.social.github, color: 'hover:bg-gray-800' }, { icon: Instagram, href: personalData.social.instagram, color: 'hover:bg-pink-600' }, { icon: Twitter, href: personalData.social.twitter, color: 'hover:bg-blue-400' }].map((social, index) => (<motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }} className={`w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${social.color} transition-colors`}><social.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" /></motion.a>))}</div>
                        </div>
                        <motion.a href={personalData.resume} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-coral-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"><Download className="w-5 h-5" /><span>Download Resume</span></motion.a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.6 }}>
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">Your Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 sm:py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all text-sm sm:text-base" placeholder="John Doe" /></div>
                            <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">Your Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 sm:py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all text-sm sm:text-base" placeholder="john@example.com" /></div>
                            <div><label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">Your Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 sm:py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all resize-none text-sm sm:text-base" placeholder="Tell me about your project..." /></div>
                            <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-teal-600 to-coral-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">{isSubmitting ? <span>Sending...</span> : <><Send className="w-5 h-5" /><span>Send Message</span></>}</motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
