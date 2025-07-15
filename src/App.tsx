import { useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import HeroSection from '@/sections/HeroSection.tsx'
import VideosSection from '@/sections/VideosSection.tsx'
import ReelsSection from '@/sections/ReelsSection.tsx'
import ContactSection from '@/sections/ContactSection.tsx'

import { youtubeVideos, reels } from '@/data/content.ts'

import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleDescription = (videoId: string) => {
    setExpandedDescriptions(prevState => ({
      ...prevState,
      [videoId]: !prevState[videoId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'about') {
      navigate('/about');
    } else {
      setActiveSection(sectionId)
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSheetOpen(false); // Close sheet on navigation
  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Suvojeet Sengupta
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'videos', 'reels', 'contact'].map((item) => (
                item === 'about' ? (
                  <Link
                    key={item}
                    to="/about"
                    className={`capitalize text-white hover:text-blue-400 transition-colors ${
                      activeSection === item ? 'text-blue-400' : ''
                    }`}
                  >
                    {item}
                  </Link>
                ) : (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-white hover:text-blue-400 transition-colors ${
                      activeSection === item ? 'text-blue-400' : ''
                    }`}
                  >
                    {item}
                  </button>
                )
              ))}
            </div>
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="lg" className="text-white">
                    <Menu className="h-14 w-14" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-slate-900 border-l border-blue-400/20">
                  <nav className="flex flex-col gap-2 pt-12">
                    {['home', 'about', 'videos', 'reels', 'contact'].map((item) => (
                      item === 'about' ? (
                        <Link
                          key={item}
                          to="/about"
                          className={`capitalize text-white text-xl font-semibold px-4 py-3 rounded-lg hover:bg-blue-400/20 transition-colors ${
                            activeSection === item ? 'text-blue-400 bg-blue-400/10' : ''
                          }`}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {item}
                        </Link>
                      ) : (
                        <button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className={`capitalize text-white text-xl font-semibold px-4 py-3 rounded-lg hover:bg-blue-400/20 transition-colors ${
                            activeSection === item ? 'text-blue-400 bg-blue-400/10' : ''
                          }`}
                        >
                          {item}
                        </button>
                      )
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <HeroSection scrollToSection={scrollToSection} />
      <VideosSection youtubeVideos={youtubeVideos} expandedDescriptions={expandedDescriptions} toggleDescription={toggleDescription} />
      <ReelsSection reels={reels} />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Suvojeet Sengupta - Passionate Singer. All rights reserved. | Developed by Suvojeet
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App