import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Play, Music, Youtube, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImage from './assets/profile_image.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Sample YouTube videos data - replace with actual video IDs
  const youtubeVideos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Popular Cover Song 1',
      description: 'Beautiful rendition of a classic song',
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Original Composition',
      description: 'My latest original music creation',
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Bollywood Cover',
      description: 'Popular Bollywood song cover',
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'Acoustic Session',
      description: 'Intimate acoustic performance',
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`
    }
  ]

  // Sample reels data
  const reels = [
    {
      id: 1,
      title: 'Quick Cover #1',
      description: 'Short singing clip',
      thumbnail: 'https://via.placeholder.com/300x400/ff6b6b/ffffff?text=Reel+1'
    },
    {
      id: 2,
      title: 'Behind the Scenes',
      description: 'Studio recording session',
      thumbnail: 'https://via.placeholder.com/300x400/4ecdc4/ffffff?text=Reel+2'
    },
    {
      id: 3,
      title: 'Live Performance',
      description: 'Live singing moment',
      thumbnail: 'https://via.placeholder.com/300x400/45b7d1/ffffff?text=Reel+3'
    },
    {
      id: 4,
      title: 'Vocal Practice',
      description: 'Daily practice routine',
      thumbnail: 'https://via.placeholder.com/300x400/f9ca24/ffffff?text=Reel+4'
    }
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Suno
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'videos', 'reels', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-white hover:text-purple-300 transition-colors ${
                    activeSection === item ? 'text-purple-300' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Suno
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
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              <Music className="mr-2 h-5 w-5" />
              About Me
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
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
                  alt="Suno - Professional Singer" 
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

      {/* YouTube Videos Section */}
      <section id="videos" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">YouTube Videos</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Check out my popular singing videos and covers on YouTube
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {youtubeVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
                      <p className="text-gray-400 mb-4">{video.description}</p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.open(`https://youtube.com/watch?v=${video.id}`, '_blank')}
                      >
                        <Youtube className="mr-2 h-4 w-4" />
                        Watch on YouTube
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section id="reels" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Reels & Shorts</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Quick singing clips and behind-the-scenes moments
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reels.map((reel, index) => (
              <motion.div
                key={reel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={reel.thumbnail} 
                        alt={reel.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{reel.title}</h3>
                      <p className="text-gray-400 text-sm">{reel.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Let's connect and create beautiful music together
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>suno.singer@email.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>India</span>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <Button size="icon" className="bg-red-600 hover:bg-red-700">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-pink-600 hover:bg-pink-700">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-blue-600 hover:bg-blue-700">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    />
                    <textarea 
                      placeholder="Your Message" 
                      rows="4"
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 resize-none"
                    ></textarea>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Suno - Professional Singer. All rights reserved. | Developed by Suvojeet
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

