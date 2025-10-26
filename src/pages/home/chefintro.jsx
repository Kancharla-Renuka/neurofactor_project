import React from 'react';
import { motion } from 'framer-motion';
const ChefIntroduction = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            chef
          </motion.p>
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="text-[23px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-light leading-[29px] sm:text-[38px] md:leading-[46px] lg:leading-[58px] tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] text-center uppercase text-text-lighter"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '300',
              color: '#9a9a9a'
            }}>
            Our brand chef
          </motion.h2>
        </motion.div>
        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[50%] flex justify-center lg:justify-end relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative">
                <img 
                  src="/images/img_6.png" 
                  alt="Chef Jomon" 
                  className="w-full max-w-[400px] lg:max-w-[638px] h-auto object-cover rounded-lg"/>
                  <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="absolute bottom-0 right-0 hidden lg:block">
                  <p 
                    className="text-[49px] sm:text-[65px] md:text-[82px] lg:text-[98px] font-normal leading-[45px] sm:leading-[60px] md:leading-[75px] lg:leading-[90px] text-text-light-gray"
                    style={{
                      fontSize: '98px',
                      fontFamily: 'Vladimir Script',
                      fontWeight: '400',
                      lineHeight: '90px',
                      color: '#d3d3d3'
                    }}>
                    Chef <br/>Jomon.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
        <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full lg:w-[42%] flex flex-col gap-8 lg:gap-10 px-4 lg:px-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4">
                <motion.h3 
                  whileHover={{ letterSpacing: '4px', color: '#fcb017' }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-medium leading-6xl tracking-[2px] uppercase text-text-lighter"
                  style={{
                    fontSize: '24px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '500',
                    lineHeight: '31px',
                    letterSpacing: '2px',
                    color: '#9a9a9a'
                  }}>
                  Chef Jomon
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-md font-normal leading-lg text-center lg:text-left text-text-lighter"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: '400',
                    lineHeight: '23px',
                    color: '#9a9a9a'
                  }}>
                  senior chef at tiffin box
                </motion.p>
              </motion.div>
        <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm font-light leading-4xl tracking-[2px] text-text-gray"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Plus Jakarta Sans',
                  fontWeight: '300',
                  lineHeight: '28px',
                  letterSpacing: '2px',
                  color: '#c9c9c9'
                }}>
                Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep. Our dishes are prepared fresh and delivered fast, ensuring 
                <br/><br/>
                Craving your favorite South Indian dishes? Enjoy the rich, authentic flavors of The Tiffin Box from the comfort of your home. Order online for a quick and easy delivery straight to your doorstep.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChefIntroduction;