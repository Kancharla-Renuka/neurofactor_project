import React from 'react';
import { motion } from 'framer-motion';
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      review: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We",
      customerName: "Anna Mathew",
      timeAgo: "one day ago",
      avatar: "/images/img_2.png"
    },
    {
      id: 2,
      rating: 5,
      review: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming",
      customerName: "Gerrin Tom",
      timeAgo: "one day ago",
      avatar: "/images/img_9.png"
    },
    {
      id: 3,
      rating: 5,
      review: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our",
      customerName: "Mery Elza",
      timeAgo: "one day ago",
      avatar: "/images/img_8.png"
    },
    {
      id: 4,
      rating: 5,
      review: "Bavette delivers an unforgettable steak experience! The food, service, and ambiance are second to none. We will definitely be coming back We booked private dining for our",
      customerName: "Mery Elza",
      timeAgo: "one day ago",
      avatar: "/images/img_8.png"
    }
  ];
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 mt-14">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            testimonial
          </motion.p> 
          <motion.h2 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="text-[23px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-light leading-[35px] sm:leading-[45px] md:leading-[57px] lg:leading-[69px] tracking-[10px] sm:tracking-[15px] lg:tracking-[20px] text-center uppercase text-text-lighter"
            style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: '300',
              color: '#9a9a9a'
            }}>
            What Our <br/>Customers Says
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[114px] px-4 lg:px-[144px]">
          {testimonials?.map((testimonial, index) => (
            <motion.div 
              key={testimonial?.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="flex flex-col gap-8 lg:gap-10 cursor-pointer">
              <div className="flex flex-col gap-8">
                {index === 0 || index === 3 ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-1">
                    {[...Array(5)]?.map((_, starIndex) => (
                      <motion.img 
                        key={starIndex}
                        initial={{ opacity: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + starIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        src="/images/img_frame_yellow_800.svg" 
                        alt="Star rating" 
                        className="w-8 h-8"/>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-1">
                    {[...Array(5)]?.map((_, starIndex) => (
                      <motion.img 
                        key={starIndex}
                        initial={{ opacity: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + starIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        src="/images/img_frame_yellow_800.svg" 
                        alt="Star rating" 
                        className="w-8 h-8"/>
                    ))}
                  </motion.div>
                )}
                                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
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
                  {testimonial?.review}
                </motion.p>
              </div>
                            <div className="flex flex-col gap-6">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="w-full h-[1px] bg-secondary-light origin-left"></motion.div>
                                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4">
                  <motion.img 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    src={testimonial?.avatar} 
                    alt={testimonial?.customerName}
                    className="w-[38px] h-[38px] rounded-full object-cover"/>
                  <div className="flex flex-col">
                    <motion.h4 
                      whileHover={{ letterSpacing: '1px', color: '#fcb017' }}
                      transition={{ duration: 0.3 }}
                      className="text-md font-medium leading-lg text-text-lighter"
                      style={{
                        fontSize: '18px',
                        fontFamily: 'Plus Jakarta Sans',
                        fontWeight: '500',
                        lineHeight: '23px',
                        color: index === 3 ? '#fbead2' : '#9a9a9a'
                      }}>
                      {testimonial?.customerName}
                    </motion.h4>
                    <p 
                      className="text-xs font-normal leading-xs text-text-neutral"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Plus Jakarta Sans',
                        fontWeight: '400',
                        lineHeight: '18px',
                        color: index === 3 ? '#9a9a9a' : '#9c9995'
                      }}>
                      {testimonial?.timeAgo}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;