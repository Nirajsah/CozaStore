import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Testimonials from './Testimonials'
import Banner from '@/app/assets/Designer.png'
import Image from 'next/image'

interface ProductTypes {
  categoryId: string
  name: string
  image: string
  stars: number
  productId: string
  price_string: string
  price_symbol: string
  price: number
  quantity?: number
}
interface Testimonial {
  name: string
  quote: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Niraj Sah',
    quote:
      'Hello ghahgoia ghaoigha guhaighiao hoiehgae gh eaohga g haegihaghaghoiehgae ahgeag.',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cC-2qUAIWmvXAvxhUlnnLAHaH5%26pid%3DApi&f=1&ipt=7e8c27fe13f79eb24f5a67afd50596d09ada602d81cb271aa7726aaa7524bea1&ipo=images',
  },
  {
    name: 'Niraj Sah',
    quote:
      'Hello ghahgoia ghaoigha guhaighiao hoiehgae gh eaohga g haegihaghaghoiehgae ahgeag.',
    image:
      'https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg',
  },
]

export default function Body() {
  const TEXT: string = 'Shop Your Favorite Products with Ease'

  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
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
    <div className="flex flex-col justify-center">
      <div className="md:w-full w-full md:mt-[30px] h-[400px]">
        <div className="flex justify-center items-center text-wrap w-full h-full">
          <div className="text-[45px] leading-[60px] transition-all duration-300 ease-out md:text-[65px] lg:text-[85px] lg:leading-[120px] flex font-bold w-full items-center md:font-[550px] flex-wrap justify-center font-ppneue">
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
        </div>
      </div>
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
          <Image src={Banner} width={700} height={700} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-9 justify-center p-3">
        <div className="text-[42px]">Testimonials</div>
        <div className="flex gap-7">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <Testimonials key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}
