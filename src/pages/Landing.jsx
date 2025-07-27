import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Smartphone",
      subtitle: "",
      description: "Discover the newest mobile technology with cutting-edge features and premium design",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=600&fit=crop&crop=center",
      buttonText: "Shop Phones"
    },
    {
      id: 2,
      title: "Premium",
      subtitle: "Laptop",
      description: "Powerful computing for work and play with the latest processors and graphics",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=600&fit=crop&crop=center",
      buttonText: "Shop Laptops"
    },
    {
      id: 3,
      title: "Smartwatch",
      subtitle: "",
      description: "Stay connected and track your fitness with our advanced wearable technology",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop&crop=center",
      buttonText: "Shop Watches"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero Section with Slider */}
      <div className="relative h-[calc(100vh-64px)] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background with Premium Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-zinc-300 to-zinc-400">
              {/* Animated Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-20 left-20 w-72 h-72 bg-zinc-400/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-zinc-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Side - Text Content */}
                  <div className="space-y-8">
                    {/* Company Name */}
                    <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-zinc-300 shadow-lg">
                      <span className="text-sm font-semibold text-zinc-800">TechStore</span>
                      <div className="ml-2 w-2 h-2 bg-zinc-600 rounded-full animate-pulse"></div>
                    </div>

                    {/* Creative Title with Image Integration */}
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h1 className="text-6xl lg:text-8xl font-bold text-zinc-900 leading-none">
                          {slide.title}
                        </h1>
                        {slide.subtitle && (
                          <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-zinc-700 to-zinc-900 bg-clip-text text-transparent leading-none">
                            {slide.subtitle}
                          </h1>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-1 bg-gradient-to-r from-zinc-600 to-zinc-800 rounded-full"></div>
                        <span className="text-zinc-700 font-medium">Premium Quality</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xl text-zinc-700 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="group relative bg-gradient-to-r from-zinc-800 to-zinc-700 hover:from-zinc-900 hover:to-zinc-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden">
                        <span className="relative z-10">{slide.buttonText}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button className="border-2 border-zinc-400 hover:border-zinc-500 text-zinc-700 hover:text-zinc-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/50">
                        Learn More
                      </button>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-8 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-zinc-900">10K+</div>
                        <div className="text-sm text-zinc-600">Happy Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-zinc-900">500+</div>
                        <div className="text-sm text-zinc-600">Products</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-zinc-900">24/7</div>
                        <div className="text-sm text-zinc-600">Support</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Large Product Image */}
                  <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                      {/* Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-400/30 to-zinc-600/20 rounded-full blur-3xl scale-150"></div>
                      
                      {/* Main Product Image */}
                      <div className="relative z-10">
                        <img
                          src={slide.image}
                          alt={slide.title + " " + slide.subtitle}
                          className="w-80 h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Floating Price Tag */}
                        <div className="absolute -top-6 -right-6 bg-gradient-to-r from-zinc-800 to-zinc-700 text-white rounded-2xl p-4 shadow-xl border border-zinc-300">
                          <div className="text-center">
                            <div className="text-lg font-bold">₹49,999</div>
                            <div className="text-xs opacity-90">Starting from</div>
                          </div>
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-zinc-300">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-zinc-700 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-zinc-800">New Arrival</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-zinc-700 scale-125 shadow-lg shadow-zinc-700/50' 
                  : 'bg-zinc-400/50 hover:bg-zinc-500/75 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-700 hover:bg-white hover:text-zinc-900 transition-all duration-300 border border-zinc-300 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-700 hover:bg-white hover:text-zinc-900 transition-all duration-300 border border-zinc-300 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Landing; 