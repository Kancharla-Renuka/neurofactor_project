import React from 'react';
import { motion } from 'framer-motion';
const MealPlanning = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[48%] group">
            <div className="overflow-hidden rounded-lg lg:rounded-none">
              <img 
                src="/images/img_3.png" 
                alt="Meal planning setup" 
                className="w-full h-auto max-w-[870px] object-cover transition-transform duration-700 group-hover:scale-105"/>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-[42%] flex flex-col justify-start px-4 lg:px-0">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs font-normal leading-xs tracking-[6px] text-center lg:text-left uppercase text-accent-primary mb-6 hover:scale-110 hover:tracking-[8px] transition-all duration-300"
              style={{
                fontSize: '14px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '6px',
                color: '#fcb017'
              }}>
              book table
            </motion.p>
                        <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[23px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-light leading-[35px] sm:leading-[45px] md:leading-[57px] lg:leading-[69px] tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] uppercase text-text-lighter mb-12 lg:mb-16 w-full lg:w-[64%] hover:text-accent-primary hover:scale-105 transition-all duration-500"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '300',
                color: '#9a9a9a'
              }}>
              Planning a meal at The Tiffin Box?
            </motion.h2>
                        <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm font-light leading-4xl tracking-[2px] text-text-gray mb-12 w-full lg:w-[74%]"
              style={{
                fontSize: '16px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '300',
                lineHeight: '28px',
                letterSpacing: '2px',
                color: '#c9c9c9'
              }}>
              Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious
            </motion.p>
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
                  delay: 0.7
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
                   <span className="transition-all duration-200 group-hover:tracking-wider whitespace-nowrap">Book Table</span>
                   <svg className="w-4 h-4 transition-all duration-200 ease-out group-hover:translate-x-2 group-hover:scale-110 animate-pulse" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
                   </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default MealPlanning;