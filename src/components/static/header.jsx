import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-start items-center">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1a1a] rounded-xl p-4 md:p-6 cursor-pointer">
              <img 
                src="/images/img_group_6.svg" 
                alt="Tiffin Box Logo" 
                className="w-[34px] h-[18px]"
              />
            </motion.div>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="block lg:hidden p-3 text-text-lighter" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}>
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="#9a9a9a" 
              viewBox="0 0 24 24"
              animate={menuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          </motion.button>
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-black lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-0">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  backgroundColor: '#e0a015',
                  boxShadow: '0 10px 30px rgba(252, 176, 23, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
                className="flex items-center justify-center gap-2 group relative overflow-hidden rounded"
                style={{
                  fontSize: '18px',
                  fontFamily: 'Montserrat',
                  fontWeight: '600',
                  lineHeight: '22px',
                  textTransform: 'capitalize',
                  color: '#0a0a0a',
                  backgroundColor: '#fcb017',
                  padding: '24px',
                  minHeight: '64px'
                }}
                onClick={() => {}}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span> 
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                  <span>View Menu</span>
                  <motion.img 
                    src="/images/img_icon_outline_chevron_right.svg" 
                    alt="Arrow right" 
                    className="w-6 h-6"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}/>
                </span>
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </div>
    </header>
  );
};
export default Header;