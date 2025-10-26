import React from 'react';
import Header from '../../components/static/Header';
import Button from '../../components/ui_components/button';
import { motion } from 'framer-motion'; 
const HeroSection = () => {
  return (
    <section className="w-full bg-primary-light relative overflow-hidden min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
                <div className="relative mt-3 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '16rem' }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden lg:block absolute left-0 top-32 xl:top-56 w-[1px] h-64 xl:h-80 bg-secondary-background animate-pulse"
          ></motion.div>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: '4rem' }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:block absolute left-0 top-32 xl:top-56 w-[4px] h-16 xl:h-20 bg-accent-secondary transform transition-all duration-700 hover:h-32 hover:bg-accent-primary"
          ></motion.div>
                    <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="hidden lg:block absolute top-8 xl:top-16 right-8 xl:right-32 w-80 xl:w-[650px] h-80 xl:h-[650px] rounded-full bg-gradient-to-r from-[#1111118e] to-[#4444448e] opacity-50 animate-pulse"
            ></motion.div>
                        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full h-full pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-32">              <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col gap-6 sm:gap-8 lg:gap-10 xl:gap-12 order-2 lg:order-1 mt-8 lg:mt-16 xl:mt-24 text-center lg:text-left">
                <motion.img 
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 120 }}
                  src="/images/img_group_7.svg" 
                  alt="Decorative icon" 
                  className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 lg:w-16 lg:h-20 xl:w-20 xl:h-24 mx-auto lg:mx-0 animate-bounce transition-transform duration-300 hover:scale-110"/>
                                <motion.h1 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight tracking-wide sm:tracking-wider lg:tracking-widest uppercase text-text-lighter animate-fade-in-up transition-all duration-500 hover:text-accent-primary hover:scale-105"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    color: '#9a9a9a',
                    animationDelay: '0.2s'
                  }}>
                  Authentic <br />South Indian Cuisine
                </motion.h1>
                                <div className="flex justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.4s'}}>
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
                      damping: 17
                    }}
                    className="flex items-center justify-center gap-3 w-auto
                               text-sm sm:text-base lg:text-lg group relative overflow-hidden
                               bg-black
                               px-8 py-4 sm:py-5 lg:py-6 xl:py-7 rounded-none
                               hover:shadow-[0_10px_40px_rgba(255,215,0,0.3)]
                               transform-gpu"
                    style={{ color: '#9a9a9a', border: '1px solid #9a9a9a' }}
                    onClick={() => {}}>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
                    <span className="relative z-10 flex items-center gap-3 group-hover:gap-5 transition-all duration-200 ease-out">
                       <span className="transition-all duration-200 group-hover:tracking-wider">Order Now</span>
                       <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 ease-out group-hover:translate-x-2 group-hover:scale-110 animate-pulse" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
                       </svg>
                    </span>
                  </motion.button>
                </div>
              </div>
                            <div className="w-full lg:w-[55%] xl:w-[58%] order-1 lg:order-2 relative">
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="lg:hidden flex justify-center mb-8 animate-fade-in">
                  <img 
                    src="/images/img_7.png" 
                    alt="South Indian Cuisine" 
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain transition-transform duration-500 hover:scale-105 hover:rotate-2"/>
                </motion.div>
                                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="hidden lg:block relative animate-fade-in"
                >
                  <img 
                    src="/images/img_7.png" 
                    alt="South Indian Cuisine" 
                    className="w-full max-w-lg xl:max-w-2xl h-auto object-contain ml-auto animate-float transition-transform duration-500 hover:scale-105 hover:rotate-1"
                  />
                              <motion.img 
                    initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 360, scale: 1, opacity: 0.8 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    src="/images/img_11.png" 
                    alt="Decorative element" 
                    className="absolute top-0 left-1/4 w-64 h-64 xl:w-80 xl:h-80 object-contain opacity-80 animate-spin-slow-reverse"
                  />
                </motion.div>
                <div className="hidden lg:flex flex-col gap-2 xl:gap-3 absolute top-1/3 right-4 xl:right-8">
                  <motion.button 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="w-12 h-12 xl:w-16 xl:h-16 bg-secondary-muted rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-125 hover:bg-accent-primary hover:shadow-xl hover:-translate-y-2 group">
                    <img src="/images/img_badge.svg" alt="Social media" className="w-6 h-6 xl:w-8 xl:h-8 transition-transform duration-300 group-hover:rotate-12" />
                  </motion.button>
                  <motion.button 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="w-12 h-12 xl:w-16 xl:h-16 bg-secondary-muted rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-125 hover:bg-accent-primary hover:shadow-xl hover:-translate-y-2 group" >
                    <img src="/images/img_badge_gray_500.svg" alt="Social media" className="w-6 h-6 xl:w-8 xl:h-8 transition-transform duration-300 group-hover:rotate-12" />
                  </motion.button>
                  <motion.button 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="w-12 h-12 xl:w-16 xl:h-16 bg-secondary-muted rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-125 hover:bg-accent-primary hover:shadow-xl hover:-translate-y-2 group" >
                    <img src="/images/img_badge_gray_500_62x62.svg" alt="Social media" className="w-6 h-6 xl:w-8 xl:h-8 transition-transform duration-300 group-hover:rotate-12" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;