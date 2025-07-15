import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.tsx';
import { Youtube, Music } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Suvojeet Sengupta
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Professional Singer | YouTube Content Creator | Music Enthusiast
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Passionate about music and singing. Creating beautiful covers and original compositions. 
          Building my future in the music industry through dedication and practice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('videos')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
          >
            <Youtube className="mr-2 h-5 w-5" />
            Watch My Videos
          </Button>
          <Button 
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            <Music className="mr-2 h-5 w-5" />
            About Me
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
