import React from 'react';
import { motion } from 'framer-motion';
const FreshFlavors = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 mt-[236px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="relative w-full h-[400px] md:h-[600px] lg:h-[760px]">
            <div className="absolute top-0 right-[262px] w-[234px] h-[234px] rounded-[116px] bg-gradient-to-r from-[#11111119] to-[#44444419] border-gradient-to-r from-primary-light to-secondary-background shadow-[0px_4px_4px_#0000003f] hidden lg:block"></div>
        <img 
              src="/images/img_1.png" 
              alt="Fresh ingredients background" 
              className="absolute bottom-0 left-0 w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"/>
                        <div className="absolute top-0 left-0 w-full lg:w-[72%] h-full flex flex-col justify-center px-4 lg:px-0">
              <div className="max-w-2xl">
                <p 
                  className="text-xs font-normal leading-xs tracking-[6px] text-center lg:text-left uppercase text-accent-primary mb-6"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '400',
                    lineHeight: '18px',
                    letterSpacing: '6px',
                    color: '#fcb017'
                  }}
                >
                  Online Order
                </p>
                                <h2 
                  className="text-[23px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-light leading-[35px] sm:leading-[45px] md:leading-[57px] lg:leading-[69px] tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] uppercase text-text-lighter mb-8 w-full lg:w-[54%]"
                  style={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    color: '#9a9a9a'
                  }}>
                  Fresh South Indian Flavors Delivered!
                </h2>
                                <p 
                  className="text-sm font-light leading-4xl tracking-[2px] text-text-gray mb-12 w-full lg:w-[38%]"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '28px',
                    letterSpacing: '2px',
                    color: '#c9c9c9'
                  }}>
                  Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring a delicious experience every time
                </p>
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
                     <span className="transition-all duration-200 group-hover:tracking-wider">Order Online</span>
                     <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 ease-out group-hover:translate-x-2 group-hover:scale-110 animate-pulse" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
                     </svg>
                  </span>
                </motion.button>
              </div>
            </div>
                        <motion.img 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.15,
                rotate: 5,
                y: -10
              }}
              src="/images/img_14.png" 
              alt="Fresh food decoration" 
              className="absolute top-[68px] right-[270px] w-[106px] h-[101px] md:w-[150px] md:h-[150px] lg:w-[212px] lg:h-[202px] object-contain hidden lg:block cursor-pointer transition-shadow duration-300 hover:drop-shadow-[0_10px_30px_rgba(252,176,23,0.5)] animate-[float_3s_ease-in-out_infinite]"/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FreshFlavors;