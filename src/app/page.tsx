"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HomePage = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2024-08-15T23:59:59Z'); // Set your target date here
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="background-image flex items-center justify-center min-h-screen px-4 py-6 relative">
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="DNYX is coming soon. Stay tuned!" />
      </Head>
      {/* Logo */}
      <img src="https://ik.imagekit.io/js1b7wgem/download%20(1)%20(1).png?updatedAt=1722833407473" alt="DNYX Logo" className="logo" />
      <div className="text-center py-12 bg-white bg-opacity-80 rounded-lg p-6">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">We’re Launching Soon!</h1>
        <p className="text-left mt-2 text-base sm:text-lg md:text-xl">
        Our website is currently under construction. We can't wait to show you what we’ve been working on.</p>
        {/* Countdown Timer */}
        <div className="timer-container mt-8">
          <div className="timer-box">
            <span>{timeLeft.days}</span>
            <div className="label">Days</div>
          </div>
          <div className="timer-box">
            <span>{timeLeft.hours}</span>
            <div className="label">Hours</div>
          </div>
          <div className="timer-box">
            <span>{timeLeft.minutes}</span>
            <div className="label">Minutes</div>
          </div>
          <div className="timer-box">
            <span>{timeLeft.seconds}</span>
            <div className="label">Seconds</div>
          </div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="social-media">
        <a href="https://twitter.com/dnyxofficial" target="_blank" rel="noopener noreferrer" aria-label="DNYX on Twitter">
          <FaTwitter size={24} />
        </a>
        <a href="https://facebook.com/dnyx.in" target="_blank" rel="noopener noreferrer" aria-label="DNYX on Facebook">
          <FaFacebookF size={24} />
        </a>
        <a href="https://linkedin.com/company/dnyx" target="_blank" rel="noopener noreferrer" aria-label="DNYX on LinkedIn">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://instagram.com/dnyx.in" target="_blank" rel="noopener noreferrer" aria-label="DNYX on Instagram">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/dnyxofficial" target="_blank" rel="noopener noreferrer" aria-label="DNYX on GitHub">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
