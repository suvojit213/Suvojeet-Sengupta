import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Play, Youtube } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog.tsx';

interface VideosSectionProps {
  youtubeVideos: { id: string; title: string; description: string; thumbnail: string }[];
  expandedDescriptions: { [key: string]: boolean };
  toggleDescription: (videoId: string) => void;
}

const VideosSection: React.FC<VideosSectionProps> = ({
  youtubeVideos,
  expandedDescriptions,
  toggleDescription,
}) => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  return (
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="relative overflow-hidden rounded-t-lg cursor-pointer"
                        onClick={() => setSelectedVideoId(video.id)}
                      >
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] p-0 overflow-hidden bg-transparent border-none">
                      {selectedVideoId && (
                        <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                          ></iframe>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
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
                      onClick={() => setSelectedVideoId(video.id)}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Play Video
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
