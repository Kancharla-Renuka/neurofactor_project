import React from 'react';
import { motion } from 'framer-motion';
const CommunityEngagement = () => {
  const communityImages = [
    {
      id: 1,
      src: "/images/img_23.png",
      alt: "Community event 1"
    },
    {
      id: 2,
      src: "/images/img_25.png",
      alt: "Community event 2"
    },
    {
      id: 3,
      src: "/images/img_24.png",
      alt: "Community event 3"
    },
    {
      id: 4,
      src: "/images/img_22.png",
      alt: "Community event 4"
    }
  ];
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 mt-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 lg:mb-24">
          <motion.p 
            whileHover={{ scale: 1.05, letterSpacing: '8px' }}
            transition={{ duration: 0.3 }}
            className="text-xs font-normal leading-xs tracking-[6px] text-center uppercase text-accent-primary mb-6"
            style={{
              fontSize: '14px',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '400',
              lineHeight: '18px',
              letterSpacing: '6px',
              color: '#fcb017'
            }}>
            Instagram
          </motion.p> 
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="text-[23px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-light leading-[35px] sm:leading-[45px] md:leading-[57px] lg:leading-[69px] tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] text-center uppercase text-text-lighter"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '300',
              color: '#9a9a9a'
            }}>
            JOIN our community
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4 lg:px-[151px]">
          {communityImages?.map((image, index) => (
            <motion.div 
              key={image?.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer">
              <motion.div 
                className="overflow-hidden rounded-lg relative"
                whileHover={{ boxShadow: '0 20px 40px rgba(252, 176, 23, 0.3)' }}
                transition={{ duration: 0.3 }}>
                <motion.img 
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                  src={image?.src} 
                  alt={image?.alt}
                  className="w-full h-[250px] md:h-[300px] lg:h-[384px] object-cover"/>
                                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="flex items-center gap-2">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="#fcb017"
                      strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span 
                      className="text-sm font-medium tracking-wider uppercase"
                      style={{
                        fontFamily: 'Plus Jakarta Sans',
                        color: '#fcb017'
                      }}>
                      View on Instagram
                    </span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CommunityEngagement;