import React from 'react';
import Button from '../../components/ui_components/button';
const AboutSection = () => {
  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-0">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 animate-fade-in-left group overflow-hidden">
            <div className="h-80 sm:h-96 md:h-[450px] lg:h-full lg:min-h-[500px] xl:min-h-[550px]">
              <img 
                src="/images/img_21.png" 
                alt="Restaurant interior" 
                className="w-full h-full object-cover rounded-lg lg:rounded-none lg:rounded-l-lg transition-transform duration-700 group-hover:scale-110"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-accent-primary p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16 flex flex-col justify-center rounded-lg lg:rounded-none lg:rounded-r-lg animate-fade-in-right transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] hover:brightness-110">
            <p className="text-xs sm:text-sm font-normal leading-relaxed tracking-widest text-center lg:text-left uppercase text-primary-background mb-4 sm:mb-5 transition-all duration-300 hover:scale-110 hover:tracking-[6px] animate-fade-in-up"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '400',
                letterSpacing: '4px',
                color: '#000000',
                animationDelay: '0.2s'
              }}>
              About Us
            </p>
      <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-light leading-tight sm:leading-tight md:leading-tight lg:leading-tight tracking-wide sm:tracking-wider lg:tracking-widest uppercase text-primary-background mb-6 sm:mb-7 lg:mb-8 text-center lg:text-left transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{
                fontFamily: 'Plus Jakarta Sans',
                fontWeight: '300',
                color: '#000000',
                animationDelay: '0.4s'
              }}>
              Experience Authentic South Indian Flavors at The Tiffin Box
            </h2>
    <div className="flex justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button
                className="flex items-center gap-3 w-auto group relative overflow-hidden
                           bg-transparent border border-black
                           px-6 sm:px-7 py-3 sm:py-4 rounded-none
                           text-sm sm:text-base font-medium
                           transition-all duration-300 ease-in-out
                           hover:bg-black hover:shadow-xl hover:-translate-y-1"
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  color: '#000000'
                }}
                onClick={() => {}}>
                <span className="relative z-10 flex items-center gap-3 group-hover:gap-4 transition-all duration-300">
                  <span className="group-hover:text-accent-primary transition-colors duration-300">Know More</span>
                  <svg 
                    className="w-4 h-4 transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110" 
                    fill="#000000" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;