import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Play, Music, Youtube, Instagram, Facebook, Mail, Phone, MapPin, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import profileImage from './assets/profile_image.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleDescription = (videoId) => {
    setExpandedDescriptions(prevState => ({
      ...prevState,
      [videoId]: !prevState[videoId]
    }));
  };

  // Sample YouTube videos data - replace with actual video IDs
  const youtubeVideos = [
    {
      id: 'roXi5XonUZI',
      title: 'Banjaara | Live Singing Cover | Jo De Rooh Ko Sukoon Ke Pal | Suvojeet Sengupta',
      description: 'Presenting my live singing cover of "Banjaara" — a beautiful track from the movie Ek Villain.\nRecorded during a casual Sunday practice session at our music class — no studio, just pure vibes and heartfelt singing.\nThis song always touches the soul, especially the line "Kisi shayar ki ghazal, jo de rooh ko sukoon ke pal" — and I tried to bring out that same emotion through my voice.\nHope you feel the sukoon too.\n\nIf you enjoyed it, don’t forget to like, share, and subscribe for more raw and real music covers.\n\nFollow me on:\nInstagram & Facebook\n\n#Banjaara #LiveSinging #MusicCover #SoulfulSongs #EkVillain #RawVocals #SingingPractice #BanjaaraCover #EkVillain #MohammadIrfan #SoulfulSinging #GhazalVibes #RawVocals #SingingPractice #MusicClassVibes #HindiCoverSong #CoverSongHindi #IndianMusic #UnpluggedVersion #JoDeRoohKoSukoon',
      thumbnail: `https://img.youtube.com/vi/roXi5XonUZI/maxresdefault.jpg`
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-slate-900 border-l border-blue-400/20">
                  <nav className="flex flex-col gap-6 pt-10">
                    {['home', 'about', 'videos', 'reels', 'contact'].map((item) => (
                      item === 'about' ? (
                        <Link
                          key={item}
                          to="/about"
                          className={`capitalize text-white text-lg font-medium hover:text-blue-400 transition-colors ${
                            activeSection === item ? 'text-blue-400' : ''
                          }`}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {item}
                        </Link>
                      ) : (
                        <button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className={`capitalize text-white text-lg font-medium hover:text-blue-400 transition-colors ${
                            activeSection === item ? 'text-blue-400' : ''
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
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              <Music className="mr-2 h-5 w-5" />
              About Me
            </Button>
          </div>
        </motion.div>
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
                      <p className="text-gray-400 mb-4">
                        {expandedDescriptions[video.id] || video.description.length <= 150
                          ? video.description
                          : `${video.description.substring(0, 150)}...`}
                      </p>
                      {video.description.length > 150 && (
                        <button
                          onClick={() => toggleDescription(video.id)}
                          className="text-purple-300 hover:text-purple-200 transition-colors duration-200 text-sm font-medium mt-2 inline-flex items-center"
                        >
                          {expandedDescriptions[video.id] ? 'Show Less' : 'Read More'}
                          {expandedDescriptions[video.id] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 ml-1"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3 ml-1"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>}
                        </button>
                      )}
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
                  <span>suvojitsengupta21@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-4 text-gray-300">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>India</span>
                </div>
              </div>
              
              <div className="flex space-x-4 pt-6">
                <Button size="icon" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
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
            © 2024 Suvojeet Sengupta - Professional Singer. All rights reserved. | Developed by Suvojeet
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

