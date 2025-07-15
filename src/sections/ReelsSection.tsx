import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { Play } from 'lucide-react';

interface ReelsSectionProps {
  reels: { id: number; title: string; description: string; thumbnail: string }[];
}

const ReelsSection: React.FC<ReelsSectionProps> = ({ reels }) => {
  return (
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
  );
};

export default ReelsSection;
