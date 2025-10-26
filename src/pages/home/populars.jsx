import React from 'react';
import { motion } from 'framer-motion';
const PopularDishes = () => {
  const dishes = [
    {
      id: 1,
      name: "Chicken Chettinad",
      price: "£9.99",
      image: "/images/img_18.png"
    },
    {
      id: 2,
      name: "Chicken Chettinad",
      price: "£9.99",
      image: "/images/img_18.png"
    },
    {
      id: 3,
      name: "Chicken Chettinad",
      price: "£9.99",
      image: "/images/img_18.png"
    }
  ];
  return (
    <section className="w-full py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 mb-16 md:mb-20 lg:mb-24 animate-fade-in-up">
          <p 
            className="text-xs font-normal leading-xs tracking-[6px] text-center uppercase text-accent-primary transition-all duration-300 hover:text-accent-secondary hover:scale-110"
            style={{
              fontSize: '14px',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '400',
              lineHeight: '18px',
              letterSpacing: '6px',
              color: '#fcb017'
            }}>
            Featured Menu
          </p> 
          <h2 
            className="text-[23px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-light leading-[35px] sm:leading-[45px] md:leading-[57px] lg:leading-[69px] tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] text-center uppercase text-text-lighter transition-all duration-500 hover:text-accent-primary hover:scale-105"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '300',
              color: '#9a9a9a'
            }}>
            Discover our most popular dishes
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-[112px] mb-12">
          {dishes?.map((dish, index) => (
            <div 
              key={dish?.id}
              className={`w-full ${
                index === 1 
                  ? 'md:w-[40%] relative transform md:scale-105' 
                  : 'md:w-[30%]'
              } bg-secondary-overlay rounded-[216px] p-6 shadow-[0px_4px_54px_#888888ff] flex flex-col items-center gap-8 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-accent-primary/20 hover:-translate-y-4 group animate-fade-in-up cursor-pointer`}
              style={{animationDelay: `${index * 0.2}s`}}>
              {index === 1 && (
                <>
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-[216px] z-0"></div>
                  <img 
                    src="/images/img_15.png" 
                    alt="Background decoration" 
                    className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] object-cover opacity-20 z-0 transition-opacity duration-500 group-hover:opacity-30"/></>
              )}
              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={dish?.image} 
                    alt={dish?.name}
                    className="w-full max-w-[280px] h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"/>
                </div>   
                <div className="flex flex-col items-center gap-2 pb-4 transition-transform duration-300 group-hover:scale-105">
                  <h3 
                    className="text-md font-light leading-lg tracking-[4px] text-center uppercase text-text-lighter transition-all duration-300 group-hover:text-accent-primary"
                    style={{
                      fontSize: '18px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: '300',
                      lineHeight: '23px',
                      letterSpacing: '4px',
                      color: '#9a9a9a'
                    }}>
                    {dish?.name}
                  </h3>
                  <p 
                    className="text-md font-light leading-lg tracking-[4px] text-center uppercase text-text-lighter transition-all duration-300 group-hover:text-accent-secondary group-hover:font-medium"
                    style={{
                      fontSize: '18px',
                      fontFamily: 'Plus Jakarta Sans',
                      fontWeight: '300',
                      lineHeight: '23px',
                      letterSpacing: '4px',
                      color: '#9a9a9a'
                    }}>
                    {dish?.price}
                  </p>
                </div>
              </div>
                            <div className="absolute inset-0 rounded-[216px] bg-gradient-to-t from-accent-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-5"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
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
               <span className="transition-all duration-200 group-hover:tracking-wider">Explore Full Menu</span>
               <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 ease-out group-hover:translate-x-2 group-hover:scale-110 animate-pulse" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
               </svg>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
export default PopularDishes;