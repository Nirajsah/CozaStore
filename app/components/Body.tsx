import React from 'react'
import Testimonials from './Testimonials'
import OurPartners from './OurPartners'
import Footer from './Footer'
import Luffy from '../assets/luffy.png'
import Thomas from '../assets/shelby.jpeg'
import Thanos from '../assets/thanos.jpeg'
import Patrik from '../assets/chadbateman.jpeg'
import Uchiha from '../assets/madara.png'
import Guts from '../assets/guts.jpeg'
import Abhishek from '../assets/Abhishek.jpeg'
import Gojo from '../assets/gojo.png'
import Abhisar from '../assets/Abhisar.jpeg'
import Zoro from '../assets/zoro.png'
import Tanjiro from '../assets/tanjiro.png'
import Banner, { BannerText } from './Banner'

interface Testimonial {
  name: string
  quote: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Monkey D. Luffy',
    quote:
      'Amazing shopping experience! The variety of products and the user-friendly website made finding what I needed a breeze. Cant wait to shop again!',
    image: Luffy.src,
  },
  {
    name: 'Madara Uchiha',
    quote:
      'Impressed with the quick delivery and quality products. Your ecommerce platform is top-notch! Looking forward to exploring more items.',
    image: Uchiha.src,
  },
  {
    name: 'Abhisar Anand',
    quote:
      'Navigating your website was a delight, and the checkout process was seamless. The attention to detail in packaging and delivery was much appreciated.',
    image: Abhisar.src,
  },
  {
    name: 'Abhishek Saini',
    quote:
      'The online shopping experience exceeded my expectations. From product selection to checkout, everything was smooth. Will definitely recommend!',
    image: Abhishek.src,
  },
  {
    name: 'Guts',
    quote:
      'Found exactly what I was looking for! The websites search functionality is excellent, and the product descriptions were very helpful.',
    image: Guts.src,
  },
  {
    name: 'Gojo Satoru',
    quote:
      'Received my order on time, and the product quality is fantastic. Your ecommerce platform made my shopping experience enjoyable and stress-free.',
    image: Gojo.src,
  },
  {
    name: 'Patrick Bateman',
    quote:
      'Love the convenience of shopping on your site. The product reviews were helpful, and the entire process was efficient. Will be a repeat customer!',
    image: Patrik.src,
  },
  {
    name: 'Thanos',
    quote:
      'Your ecommerce platform offers a great selection, and the deals are fantastic. The order tracking feature kept me informed at every step.',
    image: Thanos.src,
  },
  {
    name: 'Thomas Shelby',
    quote:
      'Shopping with you was a pleasure. The intuitive design of your website and the clear product images made decision-making easy. Highly recommend!',
    image: Thomas.src,
  },
  {
    name: 'Roronoa Zoro',
    quote:
      'The online shopping experience was smooth, and the product arrived as expected. Your customer service team was also very responsive. Thank you!',
    image: Zoro.src,
  },
  {
    name: 'Tanjiro Kamado',
    quote:
      'Easy to browse, easy to buy. Your ecommerce platform makes online shopping a joy. The discounts and promotions are an added bonus!',
    image: Tanjiro.src,
  },
]

const Body: React.FC = () => {
  const TEXT: string = 'Shop Your Favorite Products with Ease'

  return (
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="md:mt-[30px] h-[400px]">
        <div className="flex justify-center items-center text-wrap h-full">
          <BannerText TEXT={TEXT} />
        </div>
      </div>
      <Banner />
      <OurPartners />
      <div className="flex mt-12 p-3 flex-col items-center w-full space-y-5 justify-center">
        <div className="font-ppneue mb-8 mx-auto max-w-[937px] text-center text-[40px] font-medium leading-[48px] tracking-[0.8px] text-black text-darkscale-500 md:mt-[60px] md:text-[92px] md:leading-[100px] md:tracking-[-0.25px]">
          Testimonials
        </div>
        <div className="grid bg-[#f4f1ed] drop-shadow-sm gap-[24px] rounded-[24px] px-4 py-[64px] md:gap-[48px] md:rounded-[48px] md:py-[120px] lg:px-16">
          <div className="relative hide-scrollbar mx-4 h-[490px] flex transform-gpu snap-x snap-mandatory overflow-x-scroll scroll-smooth lg:px-[calc(16px/2)] md:px-[calc(40px/2)] lg:-mx-16">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <Testimonials key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-[44px] p-3 mb-14">
        <Footer />
      </div>
    </div>
  )
}
export default Body
