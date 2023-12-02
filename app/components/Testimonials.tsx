import React from 'react'

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
const Testimonials: React.FC<TestimonialsProps> = ({ testimonial }) => (
  <div className="p-6 w-full justify-between flex-col gap-6 flex flex-shrink-0 justify-items-center md:p-8 max-w-[344px] md:rounded-[32px] rounded-[24px] h-[450px] border border-black">
    <div className="italic text-[20px] leading-[32px] tracking-[0.4px] text-[#3d4c5c] md:text-[24px] md:leading-[40px]">
      {`"${testimonial.quote}"`}
    </div>
    <div className="flex flex-col gap-4 items-center">
      <div className="relative h-[60px] w-[60px] rounded-full md:h-[80px] md:w-[80px]">
        <img
          className="w-full h-full rounded-full object-cover object-center"
          src={testimonial.image}
          alt=""
        />
      </div>
      <p className="font-medium leading-4 tracking-[0.32px] md:text-[20px] md:leading-[20px] md:tracking-[0.4px] text-[18px]">
        {testimonial.name}
      </p>
    </div>
  </div>
)

export default Testimonials
