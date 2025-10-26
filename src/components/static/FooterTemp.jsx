import React, { useState } from 'react';
import { motion } from 'framer-motion';
const Footer = () => {
  const [email, setEmail] = useState('');
  return (
    <footer className="w-full bg-black mt-[200px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-9">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-12 w-full max-w-2xl mb-12">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/images/img_footer_logo.svg" 
              alt="Tiffin Box Footer Logo" 
              className="w-[84px] h-[106px]"/>
                        <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, letterSpacing: '22px' }}
              className="text-2xl font-light leading-7xl tracking-[20px] text-center uppercase text-text-lighter"
              style={{
                fontSize: '28px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '300',
                lineHeight: '42px',
                letterSpacing: '20px',
                color: '#9a9a9a'
              }}>
              Subscribe to<br />our newsletter
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full px-8">
              <motion.div 
                whileFocus={{ scale: 1.02 }}
                className="flex-1 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-[#9a9a9a] px-3 py-3 text-[#9a9a9a] placeholder-[#757575] focus:outline-none focus:border-[#fcb017] transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '300',
                    lineHeight: '18px',
                    letterSpacing: '5px',
                    textTransform: 'uppercase'
                  }}/>
              </motion.div>
              <motion.button
                whileHover={{ 
                  scale: 1.08,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }}
                className="flex items-center justify-center gap-2 
                           text-sm group relative overflow-hidden
                           bg-black
                           px-5 py-3 rounded-none
                           hover:shadow-[0_10px_40px_rgba(255,215,0,0.3)]
                           transform-gpu"
                style={{ color: '#9a9a9a', border: '1px solid #9a9a9a' }}
                onClick={() => console.log('Subscribe clicked')}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>  
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all duration-200 ease-out">
                   <span className="transition-all duration-200 group-hover:tracking-wider whitespace-nowrap">Subscribe</span>
                   <svg className="w-4 h-4 transition-all duration-200 ease-out group-hover:translate-x-2 group-hover:scale-110 animate-pulse" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
                   </svg>
                </span>
              </motion.button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-8 h-8 bg-black mb-6"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-3 mb-12">
            <motion.h3 
              whileHover={{ letterSpacing: '8px', color: '#fcb017' }}
              transition={{ duration: 0.3 }}
              className="text-sm font-semibold leading-sm tracking-[6px] text-center uppercase text-text-lighter"
              style={{
                fontSize: '16px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '600',
                lineHeight: '21px',
                letterSpacing: '6px',
                color: '#9a9a9a'
              }}>
              Contact Us
            </motion.h3> 
            <motion.a 
              whileHover={{ scale: 1.05, color: '#fcb017', letterSpacing: '8px' }}
              transition={{ duration: 0.3 }}
              href="tel:01512451500"
              className="text-xs font-normal leading-xs tracking-[6px] text-center uppercase text-text-lighter"
              style={{
                fontSize: '14px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '6px',
                color: '#9a9a9a'
              }}>
              0151 245 1500
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, color: '#fcb017', letterSpacing: '8px' }}
              transition={{ duration: 0.3 }}
              href="mailto:Info@tiffinbox.co.uk"
              className="text-xs font-normal leading-xs tracking-[6px] text-center uppercase text-text-lighter"
              style={{
                fontSize: '14px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '6px',
                color: '#9a9a9a'
              }}>
              Info@tiffinbox.co.uk
            </motion.a> 
            <motion.address 
              whileHover={{ scale: 1.05, color: '#fcb017' }}
              transition={{ duration: 0.3 }}
              className="text-xs font-normal leading-xs tracking-[6px] text-center uppercase text-text-lighter not-italic"
              style={{
                fontSize: '14px',
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                lineHeight: '18px',
                letterSpacing: '6px',
                color: '#9a9a9a'
              }}>
              Allerton Rd, Liverpool L25 7RE
            </motion.address>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row justify-between items-center w-full gap-8">
            <nav className="flex flex-wrap justify-center lg:justify-start items-center gap-8 lg:gap-11">
              <div className="flex items-center gap-2">
                <motion.a 
                  whileHover={{ scale: 1.1, color: '#fcb017', letterSpacing: '8px' }}
                  transition={{ duration: 0.3 }}
                  href="/menu"
                  className="text-xs font-normal leading-xs tracking-[6px] uppercase text-text-lighter"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '400',
                    lineHeight: '18px',
                    letterSpacing: '6px',
                    color: '#9a9a9a'
                  }} >
                  Menu
                </motion.a>
                <div className="w-[1px] h-[18px] bg-text-lighter"></div>
              </div>
              <motion.a 
                whileHover={{ scale: 1.1, color: '#fcb017', letterSpacing: '8px' }}
                transition={{ duration: 0.3 }}
                href="/order"
                className="text-xs font-normal leading-xs tracking-[6px] text-center uppercase text-text-lighter"
                style={{
                  fontSize: '14px',
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: '400',
                  lineHeight: '18px',
                  letterSpacing: '6px',
                  color: '#9a9a9a'
                }}>
                Order Online
              </motion.a>
              <div className="w-[1px] h-[18px] bg-text-lighter"></div>
              <motion.a 
                whileHover={{ scale: 1.1, color: '#fcb017', letterSpacing: '8px' }}
                transition={{ duration: 0.3 }}
                href="/book"
                className="text-xs font-normal leading-xs tracking-[6px] text-center uppercase text-text-lighter"
                style={{
                  fontSize: '14px',
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: '400',
                  lineHeight: '18px',
                  letterSpacing: '6px',
                  color: '#9a9a9a'
                }}>
                Book a Table
              </motion.a>         
              <div className="w-[1px] h-[18px] bg-text-lighter"></div>    
              <motion.a 
                whileHover={{ scale: 1.1, color: '#fcb017', letterSpacing: '8px' }}
                transition={{ duration: 0.3 }}
                href="/about"
                className="text-xs font-normal leading-xs tracking-[6px] uppercase text-text-lighter"
                style={{
                  fontSize: '14px',
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: '400',
                  lineHeight: '18px',
                  letterSpacing: '6px',
                  color: '#9a9a9a'
                }}>
                About Us
              </motion.a>   
              <div className="w-[1px] h-[18px] bg-text-lighter"></div>
              <motion.a 
                whileHover={{ scale: 1.1, color: '#fcb017', letterSpacing: '8px' }}
                transition={{ duration: 0.3 }}
                href="/contact"
                className="text-xs font-normal leading-xs tracking-[6px] uppercase text-text-lighter"
                style={{
                  fontSize: '14px',
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: '400',
                  lineHeight: '18px',
                  letterSpacing: '6px',
                  color: '#9a9a9a'
                }}>
                Contact Us
              </motion.a>
            </nav>
            <motion.p 
              whileHover={{ scale: 1.05, color: '#fcb017' }}
              transition={{ duration: 0.3 }}
              className="text-sm font-normal leading-md tracking-[2px]"
              style={{
                fontSize: '16px',
                fontFamily: 'Manrope',
                fontWeight: '400',
                lineHeight: '22px',
                letterSpacing: '2px',
                color: '#9a9a9a'
              }}>
              © 2024 tiffinbox
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;