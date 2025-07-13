import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Popular dishes data
  const popularDishes = [
    { name: 'Gini Dosa', price: 180.00 },
    { name: 'Honey Glacier Dosa', price: 180.00 },
    { name: 'Veg Kolhapuri', price: 160.00 },
    { name: 'Paneer Butter Masala', price: 150.00 },
    { name: 'Veg Biryani', price: 110.00 },
    { name: 'Veg Honey Glacier', price: 180.00 }
  ];

  return (
    <div className="bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
            Veggies Inn Annapoorneswari
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl font-subheading">
            Authentic Vegetarian Cuisine from Thrissur, Kerala
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="bg-highlight hover:bg-yellow-600 text-dark font-bold py-3 px-6 rounded-lg text-lg transition duration-300 font-body">
              View Full Menu
            </Link>
            <Link to="/contact" className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 font-body">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 font-subheading">
              Our Culinary Tradition
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-body">
              Established in the heart of Thrissur, Annapoorneswari brings you decades of authentic vegetarian cooking traditions. Our recipes are crafted with locally sourced ingredients, preserving the rich flavors of Kerala's culinary heritage.
            </p>
            <Link to="/about" className="inline-block text-primary hover:text-accent font-semibold text-lg font-body">
              Discover Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12 font-subheading">
            Customer Favorites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDishes.map((dish, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                <div className="p-6">
                  <h3 className="text-xl font-bold font-body text-dark mb-2">{dish.name}</h3>
                  <p className="text-accent font-heading font-semibold">₹{dish.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="bg-primary hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg text-lg inline-block transition duration-300 font-body">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-dark mb-4 font-subheading">
                  Visit Us Today
                </h2>
                <p className="text-gray-700 mb-4 font-body">
                  Experience authentic Kerala vegetarian cuisine in the cultural capital of Thrissur
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className='font-body'>⏰ Open Daily: 6:00 AM - 10:30 PM</p>
                  <p className='font-body'>📞 +91 89219 16296</p>
                  <p className='font-body'>📍 Muthuvara, Thrissur, Kerala</p>
                </div>
              </div>
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="bg-highlight hover:bg-yellow-600 text-dark font-bold py-3 px-8 rounded-lg text-lg inline-block transition duration-300 font-body">
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
