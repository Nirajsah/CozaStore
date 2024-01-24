import React from 'react'
import Image from 'next/image'
// Define the shape of a testimonial
interface Testimonial {
  name: string
  quote: string
  image?: string
}

// Define the props for the Testimonials component
interface TestimonialsProps {
  testimonial: Testimonial
}

// The Testimonials component
const Testimonials: React.FC<TestimonialsProps> = ({ testimonial }) => {
  const { quote, name, image } = testimonial
  return (
    <div className="flex max-w-[90%] flex-shrink-0 snap-center px-[calc(16px/2)] md:px-[calc(40px/2)] h-[380px] md:h-[470px]">
      <div className="flex w-full max-w-[344px] justify-between flex-shrink-0 flex-col justify-items-center rounded-[24px] bg-[#f6e5db3f] drop-shadow-md h-full p-6 md:gap-6 md:rounded-[32px] md:p-8">
        <div className="italic text-[15px] sm:text-[20px] leading-[22px] tracking-[0.4px] text-[#000000] md:text-[20px] sm:leading-[30px]">
          {`"${quote}"`}
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="relative h-[60px] w-[60px] rounded-full md:h-[80px] md:w-[80px]">
            <Image
              className="w-full h-full rounded-full object-cover object-center"
              src={image as string}
              width={60}
              height={60}
              alt=""
            />
          </div>
          <p className="font-medium leading-4 tracking-[0.32px] md:text-[20px] md:leading-[20px] md:tracking-[0.4px] text-[15px]">
            {name}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
