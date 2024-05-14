'use client'
import Image from 'next/image'
import React from 'react'
import BannerImage from '../assets/Designer.png'
import { motion } from 'framer-motion'

export default function Banner() {
  const [translateY, setTranslateY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      setTranslateY(window.scrollY)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const translate = -translateY * 0.5
  return (
    <div>
      <div className="flex justify-center w-full h-full mt-[-120px] md:mt-0 p-4">
        <div
          style={
            {
              '--translate-y': `${translate}px`, // Custom property for translation along Y-axis
              transform: 'translateY(var(--translate-y))', // Applying the translation using the custom property
            } as React.CSSProperties
          }
          className="w-full max-w-[700px] p-6 max-h-[700px] flex justify-center items-center rounded-[2rem] h-[480px] mx-auto object-contain object-center drop-shadow-2xl transition-all duration-200 ease-out"
        >
          <Image
            loading="lazy"
            src={BannerImage}
            width={700}
            height={700}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export function BannerText({ TEXT }: { TEXT: string }) {
  return (
    <div className="text-[45px] leading-[60px] transition-all duration-300 ease-out md:text-[65px] md:leading-[80px] lg:text-[85px] lg:leading-[120px] flex font-bold w-full items-center md:font-[550px] flex-wrap justify-center font-ppneue">
      {TEXT.split(' ').map((character: string, index: number) => (
        <motion.span
          className={`mx-2 ${
            character === 'Ease'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FFB777] to-[#F16C6A]'
              : ''
          } ${
            character === 'Products'
              ? 'bg-gradient-to-l from-[#844FF3] to-[#C1A5FF] bg-clip-text text-transparent'
              : ''
          }`}
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 10,
            delay: index * 0.2,
          }}
        >
          {character}
        </motion.span>
      ))}
    </div>
  )
}
