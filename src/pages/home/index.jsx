import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './herosection';
import AboutSection from './about';
import PopularDishes from './populars';
import FreshFlavors from './freshflavors';
import MealPlanning from './meal';
import Specialties from './specialties';
import ChefIntroduction from './chefintro';
import Testimonials from './testimonials';
import LocationFinder from './finder';
import CommunityEngagement from './community';
import Footer from '../../components/static/Footer';
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tiffin Box Restaurant | Authentic South Indian Cuisine & Fresh Delivery</title>
        <meta 
          name="description" 
          content="Experience authentic South Indian cuisine at Tiffin Box Restaurant. Fresh flavors, meal planning, specialty dishes, and delivery service with traditional recipes from our master chef." 
        />
        <meta property="og:title" content="Tiffin Box Restaurant | Authentic South Indian Cuisine & Fresh Delivery" />
        <meta property="og:description" content="Experience authentic South Indian cuisine at Tiffin Box Restaurant. Fresh flavors, meal planning, specialty dishes, and delivery service with traditional recipes from our master chef." />
      </Helmet>

      <main className="w-full bg-primary-light min-h-screen">
        <HeroSection />
        <AboutSection />
        <PopularDishes />
        <FreshFlavors />
        <MealPlanning />
        <Specialties />
        <ChefIntroduction />
        <Testimonials />
        <LocationFinder />
        <CommunityEngagement />
        <Footer />
      </main>
    </>
  );
};

export default Home;