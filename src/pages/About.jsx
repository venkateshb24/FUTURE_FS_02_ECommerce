import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Priya Sharma',
      role: 'CEO & Founder',
      bio: 'Passionate about bringing the latest tech to everyone.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Technology',
      bio: 'Expert in cutting-edge technology and innovation.'
    },
    {
      name: 'Anjali Patel',
      role: 'Customer Experience',
      bio: 'Dedicated to providing exceptional customer service.'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '24/7', label: 'Support' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-zinc-100">
      {/* Hero Section */}
      <div id="about-section" className="bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
              About TechStore
            </h1>
            <p className="text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
              We're passionate about bringing you the latest technology and premium products 
              that enhance your digital lifestyle.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">Our Mission</h2>
              <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                At TechStore, we believe everyone deserves access to cutting-edge technology. 
                Our mission is to provide premium tech products with exceptional service, 
                making innovation accessible to all.
              </p>
              <p className="text-lg text-zinc-700 leading-relaxed">
                Founded in 2019, we've grown from a small startup to a trusted destination 
                for tech enthusiasts and professionals alike.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-2xl p-8 shadow-2xl">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Premium Quality Products
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Expert Customer Support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Fast & Secure Shipping
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      30-Day Return Policy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Our Numbers</h2>
            <p className="text-lg text-zinc-600">Trusted by thousands of customers worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-zinc-900 mb-2">{stat.number}</div>
                <div className="text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-zinc-600">The passionate people behind TechStore</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{member.name}</h3>
                <p className="text-zinc-600 mb-4">{member.role}</p>
                <p className="text-zinc-700 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact-section" className="py-20 bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-zinc-600">We'd love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-zinc-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Email</h3>
              <p className="text-zinc-600">hello@techstore.in</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-zinc-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Phone</h3>
              <p className="text-zinc-600">+91 98765 43210</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-zinc-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Address</h3>
              <p className="text-zinc-600">Tech Park, Electronic City, Bangalore, Karnataka 560100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
