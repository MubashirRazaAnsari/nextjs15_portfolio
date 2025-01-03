import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerated';
import HeroButton from './ui/HeroButton';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  return (
    
    <div id = "home" className="pb-20">
      <div>
        
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill='white'
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
    
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='flex flex-col justify-center items-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text text-blue-100 max-w-80'>Dynamic Web Magic with Next.js</h2>
          <TextGenerateEffect
          className='text-center text-white text-[40px] md:text-5xl lg:text-6xl inline-flex tracking-wider'
          words='Transforming Concepts into Seamless Experience' />
        </div>
        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
          Hey, I&apos;m Mubashir, Front-end developer based in Pakistan.
        </p>
        <Link href='#projects' >
        <HeroButton 
          title='Show my projects'
          icon={<FaLocationArrow />} 
          position={'right'} 
          otherClasses={''}        />
          </Link>
      </div>
    </div>
  );
};

export default Hero;
