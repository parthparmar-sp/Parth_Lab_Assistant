import React from 'react';
import { FaLaptop, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';

function Header() {
  return (
    <header className='h-16 shadow-lg bg-gradient-to-r from-gray-900 to-teal-800 text-white'>
      <div className='h-full container mx-auto flex items-center justify-between px-6'>
        <div className='flex items-center'>
          <FaLaptop className='h-12 w-12 text-white' />
          <div className='ml-4'>
            <h1 className='text-2xl font-bold'>Lab Assistant</h1>
            <p className='text-sm text-gray-300'>What can I help with today?</p>
          </div>
        </div>
        <ul className='flex space-x-8 text-lg'>
          <li className='cursor-pointer hover:underline transition duration-200'>
            <a href="/auth" className='hover:text-yellow-400'>Login</a>
          </li>
          <li className='cursor-pointer hover:underline transition duration-200'>
            <a href="/lab-schedule" className='hover:text-yellow-400'>Lab Schedule</a>
          </li>
          <li className='cursor-pointer hover:underline transition duration-200'>
            <a href="/complain" className='hover:text-yellow-400'>Complain</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className='bg-gradient-to-r from-teal-800 to-gray-900 text-white py-20'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-4'>Hello Buddy, I am your personal computer lab assistant</h2>
        <p className='text-xl mb-8'>
          Manage your lab tasks effortlessly. Log in, check the lab schedule, or file a complaint.
        </p>
        <a
          href="/auth"
          className='px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-full transition-all duration-300'
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

function FeatureCards() {
  const features = [
    {
      title: 'Login',
      description: 'Access your account and manage your lab-related activities.',
      link: '/auth',
    },
    {
      title: 'Lab Schedule',
      description: 'Stay updated with the current lab schedule and timings.',
      link: '/lab-schedule',
    },
    {
      title: 'File a Complaint',
      description: 'Report any issues or problems directly to the lab assistant.',
      link: '/complain',
    },
  ];

  return (
    <section className='py-16'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-300'
          >
            <h3 className='text-2xl font-bold mb-4'>{feature.title}</h3>
            <p className='text-gray-700 mb-6'>{feature.description}</p>
            <a
              href={feature.link}
              className='px-6 py-2 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all duration-300'
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className='bg-gradient-to-r from-gray-900 to-teal-800 text-white py-8 mt-auto'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <h3 className='text-xl font-bold'>Lab Assistant</h3>
          <p className='text-gray-300'>Your companion for managing lab activities</p>
        </div>
        <ul className='flex space-x-8 text-lg'>
          <li className='cursor-pointer hover:underline transition duration-200'>
            <a href="/about" className='hover:text-yellow-400'>About Us</a>
          </li>
          <li className='cursor-pointer hover:underline transition duration-200'>
            <a href="/contact" className='hover:text-yellow-400'>Contact</a>
          </li>
          <li className='cursor-pointer hover:underline transition duration-200'>
            <a href="/privacy" className='hover:text-yellow-400'>Privacy Policy</a>
          </li>
        </ul>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href="https://facebook.com" className='text-white hover:text-blue-500'>
            <FaFacebook className='h-6 w-6' />
          </a>
          <a href="https://twitter.com" className='text-white hover:text-blue-400'>
            <FaTwitter className='h-6 w-6' />
          </a>
          <a href="https://instagram.com" className='text-white hover:text-pink-400'>
            <FaInstagram className='h-6 w-6' />
          </a>
        </div>
      </div>
      <div className='text-center mt-6'>
        <p className='text-gray-400 text-sm'>&copy; 2024 Lab Assistant. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeatureCards />
      <Footer />
    </div>
  );
}

export default MainPage;
