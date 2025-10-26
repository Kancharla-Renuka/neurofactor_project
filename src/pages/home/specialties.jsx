import React from 'react';
import { motion } from 'framer-motion';
const Specialties = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 mt-[100px] bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20">
          <motion.p 
            whileHover={{ scale: 1.05, letterSpacing: '8px' }}
            transition={{ duration: 0.3 }}
            className="text-xs font-normal tracking-[6px] text-center uppercase mb-4"
            style={{
              fontSize: '14px',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '400',
              lineHeight: '18px',
              color: '#fcb017'
            }}>
            WHY TIFFIN BOX
          </motion.p>
                    <motion.h2 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="text-[32px] sm:text-[38px] md:text-[44px] font-light tracking-[15px] sm:tracking-[20px] text-center uppercase"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '300',
              lineHeight: '1.3',
              color: '#9a9a9a'
            }}>
            OUR SPECIALTIES
          </motion.h2>
        </motion.div>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="flex flex-col gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-4 text-center lg:text-right group cursor-pointer">
                <h3 
                  className="font-medium tracking-[2px] uppercase transition-colors duration-300 group-hover:text-[#fcb017]"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '500',
                    lineHeight: '26px',
                    color: '#9a9a9a'
                  }}>
                  AUTHENTIC SOUTH INDIAN CUISINE
                </h3>
                <p 
                  className="font-light tracking-[1.5px] transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '22px',
                    color: '#7a7a7a'
                  }}>
                  Our dishes are prepared using traditional recipes to bring you the true flavors of South India.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-4 text-center lg:text-right group cursor-pointer">
                <h3 
                  className="font-medium tracking-[2px] uppercase transition-colors duration-300 group-hover:text-[#fcb017]"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '500',
                    lineHeight: '26px',
                    color: '#9a9a9a'
                  }}>
                  EXPERT CHEFS
                </h3>
                <p 
                  className="font-light tracking-[1.5px] transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '22px',
                    color: '#7a7a7a'
                  }}>
                  Our chefs have years of experience crafting exquisite South Indian dishes, ensuring every bite is a delight.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-4 text-center lg:text-right group cursor-pointer">
                <h3 
                  className="font-medium tracking-[2px] uppercase transition-colors duration-300 group-hover:text-[#fcb017]"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '500',
                    lineHeight: '26px',
                    color: '#9a9a9a'
                  }}>
                  FRESH, QUALITY INGREDIENTS
                </h3>
                <p 
                  className="font-light tracking-[1.5px] transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '22px',
                    color: '#7a7a7a'
                  }}>
                  We use only the finest, fresh ingredients to ensure the highest quality and authentic taste in every meal.
                </p>
              </motion.div>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center relative py-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-[340px] h-[340px] flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute top-6 left-6 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#fcb017' }}
                />
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                  className="absolute top-6 right-6 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#fcb017' }}/>
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
                  className="absolute bottom-6 left-6 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#fcb017' }}/>
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1.8 }}
                  className="absolute bottom-6 right-6 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#fcb017' }}/>
                                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-[300px] h-[300px] flex items-center justify-center">
                  <img 
                    src="/images/img_4.png" 
                    alt="South Indian Specialty Dishes" 
                    className="w-full h-full object-contain"/>
                </motion.div>
                                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{ bottom: '-10px' }}>
                  <motion.button
                    whileHover={{ scale: 1.08, backgroundColor: '#fcb017' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-3 px-6 py-3 rounded-full border transition-all duration-300"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: '400',
                      letterSpacing: '1.5px',
                      color: '#ececec',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      borderColor: 'rgba(252, 176, 23, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="9" strokeWidth="1.5"/>
                      <path d="M12 8v8M8 12h8" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="uppercase">OUR SPECIALTIES</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
            <div className="flex flex-col gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-4 text-center lg:text-left group cursor-pointer">
                <h3 
                  className="font-medium tracking-[2px] uppercase transition-colors duration-300 group-hover:text-[#fcb017]"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '500',
                    lineHeight: '26px',
                    color: '#9a9a9a'
                  }}>
                  COMFORTABLE DINING EXPERIENCE
                </h3>
                <p 
                  className="font-light tracking-[1.5px] transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '22px',
                    color: '#7a7a7a'
                  }}>
                  Our restaurant offers a warm and welcoming ambiance for a relaxed and enjoyable dining experience.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-4 text-center lg:text-left group cursor-pointer">
                <h3 
                  className="font-medium tracking-[2px] uppercase transition-colors duration-300 group-hover:text-[#fcb017]"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '500',
                    lineHeight: '26px',
                    color: '#9a9a9a'
                  }}>
                  HEALTH-CONSCIOUS OPTIONS
                </h3>
                <p 
                  className="font-light tracking-[1.5px] transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '22px',
                    color: '#7a7a7a'
                  }}>
                  From vegetarian to gluten-free dishes, we provide healthy options without compromising on flavor.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col gap-4 text-center lg:text-left group cursor-pointer">
                <h3 
                  className="font-medium tracking-[2px] uppercase transition-colors duration-300 group-hover:text-[#fcb017]"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '500',
                    lineHeight: '26px',
                    color: '#9a9a9a'
                  }}>
                  SEAMLESS ONLINE ORDERING & DELIVERY
                </h3>
                <p 
                  className="font-light tracking-[1.5px] transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '22px',
                    color: '#7a7a7a'
                  }}>
                  Enjoy your favorite dishes at home with our easy online ordering and fast delivery service.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -20 }}
            whileInView={{ opacity: 0.6, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ opacity: 0.9, scale: 1.1, rotate: 5 }}
            className="absolute bottom-[-150px] left-[45%] transform -translate-x-1/2 hidden lg:block"
            style={{ zIndex: 5 }}>
            <img 
              src="/images/img_5.png" 
              alt="Decorative spoon" 
              className="w-[140px] h-[100px] object-contain"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Specialties;