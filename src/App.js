import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './components/Core';
import { Hero, About, Experience, Skills, Projects, Education, Availability, Contact } from './Sections';
import { Toaster } from './components/ui/toaster';

function App() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="App selection:bg-teal-100 dark:selection:bg-teal-900/40">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Education />
                <Availability />
                <Contact />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
}

export default App;