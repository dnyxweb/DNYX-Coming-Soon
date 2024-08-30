"use client";

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
      const targetDate = new Date('2024-9-5T23:59:59Z'); // Set your target date here
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
    <Image src="/images/dnyx.png" alt="DNYX Logo" className="logo" height={120} width={200}/>
      <div className="text-center py-12 bg-white bg-opacity-80 rounded-lg p-6">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">We&apos;re Launching Soon!</h1>
        <p className="text-left mt-2 text-base sm:text-lg md:text-xl">
          Our website is currently under construction. We can&apos;t wait to show you what we&apos;ve been working on.
        </p>
        {/* Countdown Timer */}
        <div className="timer-container flex justify-center mt-8 space-x-4">
          <div className="timer-box bg-gray-200 p-4 rounded-lg">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <div className="label text-sm">Days</div>
          </div>
          <div className="timer-box bg-gray-200 p-4 rounded-lg">
            <span className="text-2xl font-bold">{timeLeft.hours}</span>
            <div className="label text-sm">Hours</div>
          </div>
          <div className="timer-box bg-gray-200 p-4 rounded-lg">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span>
            <div className="label text-sm">Minutes</div>
          </div>
          <div className="timer-box bg-gray-200 p-4 rounded-lg">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span>
            <div className="label text-sm">Seconds</div>
          </div>
        </div>
      </div>
      {/* Social Media Icons */}
      <div className="social-media absolute bottom-4 flex justify-center w-full space-x-4">
        <a href="https://twitter.com/dnyxofficial" target="_blank" rel="noopener noreferrer" aria-label="DNYX on Twitter" className="text-black">
          <FaTwitter size={24} />
        </a>
        <a href="https://facebook.com/dnyx.in" target="_blank" rel="noopener noreferrer" aria-label="DNYX on Facebook" className="text-black">
          <FaFacebookF size={24} />
        </a>
        <a href="https://linkedin.com/company/dnyx" target="_blank" rel="noopener noreferrer" aria-label="DNYX on LinkedIn" className="text-black">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://instagram.com/dnyx.in" target="_blank" rel="noopener noreferrer" aria-label="DNYX on Instagram" className="text-black">
          <FaInstagram size={24} />
        </a>
        <a href="https://github.com/dnyxofficial" target="_blank" rel="noopener noreferrer" aria-label="DNYX on GitHub" className="text-black">
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
