"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css'
import imgHero from '@/../public/photos/profile_sazid.jpg'
const Hero = () => {
    const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const textToType = 'I am Python Developer .';
  const typingSpeed = 150; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1 < textToType.length ? prevIndex + 1 : 0));
      setText(textToType.slice(0, index));
    }, typingSpeed);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [index, textToType]);
    return (
        <div className='flex justify-between pt-28 
        '>
            <div className='w-1/2 h-[300px] flex flex-col gap-y-7 pt-5'> 
                <h1 className={styles.typewriterText}>Hi, {text} {text !== textToType && <span className={styles.cursor}></span>} </h1>
                <p className='text-justify'>As a Python developer, I specialize in crafting reliable software solutions tailored to meet diverse needs. Leveraging Python's versatility, I create applications that streamline processes and drive innovation. With a keen eye for detail and a passion for coding, I consistently deliver high-quality solutions that exceed expectations.</p>
                <div className='flex gap-x-2'>
                <input className='rounded p-4 ' placeholder='Enter your mail...' type="text" />
                <button className='bg-blue-500 px-5 py-4 rounded-lg text-white font-bold'>Subscribe</button>
                </div>
            </div>
            <div className='w-1/2 h-[300px] pl-40'> {/* Set width to 50% */}
               <div className='border-4 w-[280px] rounded-full shadow-xl shadow-blue-800'>
               <Image src={imgHero} className='w-[450px] h-[300px] rounded-full border-4 border-blue-800 animate-bounce' alt='sazid'></Image>
               </div>
            </div>
        </div>
    );
};

export default Hero;
