import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge.jsx';
import profileImage from '../assets/profile_image.jpg';

function AboutPage() {
  return (
    <section id="about" className="py-20 px-4 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Suvojeet Sengupta - Professional Singer" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">My Musical Journey</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate singer who has been practicing and honing my craft for years. 
              While I may not be a professional singer yet, my love for music drives me to 
              practice regularly and continuously improve my skills.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Singing brings me immense joy and satisfaction. I believe that with dedication, 
              practice, and passion, I can build a successful future in the music industry. 
              Every day is an opportunity to grow and get closer to my dreams.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-600/30">Vocal Training</Badge>
              <Badge className="bg-pink-600/20 text-pink-300 border-pink-600/30">Cover Songs</Badge>
              <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30">Original Music</Badge>
              <Badge className="bg-green-600/20 text-green-300 border-green-600/30">Live Performance</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
