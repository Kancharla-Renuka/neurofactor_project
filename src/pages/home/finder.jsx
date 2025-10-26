import React from 'react';
import { motion } from 'framer-motion';
const LocationFinder = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 mt-[194px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[44%] flex flex-col justify-center px-4 lg:px-0">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs font-normal leading-xs tracking-[6px] text-center lg:text-left uppercase text-accent-primary mb-6 hover:scale-110 hover:tracking-[8px] transition-all duration-300"
              style={{
                fontSize: '14px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '6px',
                color: '#fcb017'
              }}>
              our locations
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[23px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-light leading-[35px] sm:leading-[45px] md:leading-[57px] lg:leading-[69px] tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] uppercase text-text-lighter mb-12 lg:mb-16 hover:text-accent-primary hover:scale-105 transition-all duration-500"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '300',
                color: '#9a9a9a'
              }}
            >
              Find Us <br />at These Convenient Locations
            </motion.h2>
                        <div className="flex justify-center lg:justify-start">
              <motion.button
                whileHover={{ 
                  scale: 1.08,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                  delay: 0.6
                }}
                className="flex items-center justify-center gap-2 
                           text-sm group relative overflow-hidden
                           bg-black
                           px-5 py-3 rounded-none
                           hover:shadow-[0_10px_40px_rgba(255,215,0,0.3)]
                           transform-gpu"
                style={{ color: '#9a9a9a', border: '1px solid #9a9a9a' }}
                onClick={() => {}}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-200 ease-out">
                   <span className="transition-all duration-200 group-hover:tracking-wider whitespace-nowrap">Our Store</span>
                   <svg className="w-4 h-4 transition-all duration-200 ease-out group-hover:translate-x-2 group-hover:scale-110 animate-pulse" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
                   </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
  <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-[50%] relative">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[674px]">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full rounded-[336px] bg-gradient-to-r from-[#11111119] to-[#44444419] border-gradient-to-r from-[#1c1c1c] to-secondary-background p-8 md:p-12 lg:p-[64px_56px] shadow-[0px_4px_4px_#0000003f] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300">
                <div className="w-full h-full rounded-[270px] overflow-hidden relative group">
                  <img 
                    src="/images/img_19.png" 
                    alt="Restaurant location map" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                                    <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[211px] left-[120px] w-[26px] h-[26px] cursor-pointer hover:scale-150 transition-transform duration-300">
                    <img 
                      src="/images/img_frame_yellow_800_26x26.svg" 
                      alt="Location marker" 
                      className="w-full h-full drop-shadow-[0_0_8px_rgba(252,176,23,0.8)]"/>
                  </motion.div>
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[292px] left-[120px] w-[26px] h-[26px] cursor-pointer hover:scale-150 transition-transform duration-300">
                    <img 
                      src="/images/img_frame_yellow_800_26x26.svg" 
                      alt="Location marker" 
                      className="w-full h-full drop-shadow-[0_0_8px_rgba(252,176,23,0.8)]"/>
                  </motion.div>
                </div>
              </motion.div>
                            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute top-[158px] right-0 w-[38%] bg-accent-overlay rounded-sm p-4 lg:p-[18px] shadow-[0px_4px_44px_#888888ff] hover:shadow-[0_10px_50px_rgba(252,176,23,0.4)] transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <address 
                    className="text-xs font-normal leading-2xl tracking-[6px] uppercase text-text-lighter not-italic"
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: '400',
                      lineHeight: '25px',
                      letterSpacing: '6px',
                      color: '#9a9a9a'
                    }}>
                    tiffin box<br />
                    Allerton Rd, Liverpool L25 7RE
                  </address>    
                  <div className="border-b border-accent-primary pb-3 group">
                    <button 
                      className="text-xs font-normal leading-xs tracking-[3px] uppercase text-text-lighter hover:text-accent-primary hover:tracking-[5px] transition-all duration-300 flex items-center gap-2"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Plus Jakarta Sans',
                        fontWeight: '400',
                        lineHeight: '18px',
                        letterSpacing: '3px',
                        color: '#9a9a9a'
                      }}>
                      get direction
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default LocationFinder;