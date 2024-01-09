import React from 'react'
import Image from 'next/image'
import BoseLogo from '@/app/assets/boselogo.svg'
import Adidas from '@/app/assets/adidas.svg'
import UnderArmour from '../assets/underarmour.svg'

const OurPartners = () => {
  const widht = 90
  const height = 90
  return (
    <div className="flex flex-col m-3 items-center mt-20">
      <div className="font-ppneue mx-auto max-w-[937px] text-center text-[40px] font-semibold leading-[48px] tracking-[0.8px] text-black text-darkscale-500 md:mt-[50px] md:text-[72px] md:leading-[100px] md:tracking-[-0.25px]">
        Our Partners
      </div>
      <div className="w-full flex-wrap max-w-[1280px] h-full justify-between flex bg-[#fafafa] p-7 sm:p-12 drop-shadow-md rounded-[42px] flex-col gap-14 mt-10 items-center">
        <div className="opacity-80 flex justify-around flex-wrap gap-14">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={widht}
              height={height}
              viewBox="0 0 50 50"
            >
              <path d="M 17.533203 8 C 7.8628684 8 0 15.845429 0 25.5 C 0 35.154571 7.8628684 43 17.533203 43 C 20.210166 43 22.730426 42.355862 25.001953 41.285156 C 27.272902 42.356832 29.791837 43 32.466797 43 C 42.137132 43 50 35.154571 50 25.5 C 50 15.845429 42.137132 8 32.466797 8 C 29.791172 8 27.268283 8.6396741 24.996094 9.7128906 C 22.725091 8.6414619 20.206632 8 17.533203 8 z M 17.533203 10 C 20.060603 10 22.441964 10.599903 24.548828 11.666016 L 24.998047 11.892578 L 25.484375 11.650391 L 25.486328 11.648438 C 27.58458 10.59276 29.952482 10 32.466797 10 C 41.058462 10 48 16.928571 48 25.5 C 48 34.071429 41.058462 41 32.466797 41 C 29.939397 41 27.559118 40.399192 25.453125 39.333984 L 25.001953 39.107422 L 24.550781 39.333984 C 22.443374 40.398493 20.062473 41 17.533203 41 C 8.9415381 41 2 34.071429 2 25.5 C 2 16.928571 8.9415381 10 17.533203 10 z M 17.533203 12 C 15.726734 12 14.000195 12.354187 12.421875 12.998047 C 7.4850352 15.011673 4.0097656 19.858626 4.0097656 25.5 C 4.0097656 32.945522 10.077887 39 17.535156 39 C 18.871009 39 20.164871 38.805268 21.386719 38.443359 L 23.052734 37.951172 L 21.789062 36.757812 C 19.37483 34.478553 17.756491 31.418058 17.197266 28 L 22 28 L 22 30 L 19.607422 30 L 20.316406 31.441406 C 21.271547 33.384103 22.679951 35.063384 24.404297 36.341797 L 25 36.783203 L 25.595703 36.341797 C 27.319196 35.061858 28.726502 33.384098 29.681641 31.441406 L 30.390625 30 L 28.052734 30 L 28.052734 28 L 32.802734 28 C 32.243533 31.418146 30.624508 34.479481 28.210938 36.759766 L 26.947266 37.953125 L 28.613281 38.445312 C 29.834644 38.805999 31.130023 39 32.466797 39 C 39.924066 39 45.992188 32.945522 45.992188 25.5 C 45.992188 18.054478 39.924066 12 32.466797 12 C 31.130023 12 29.834976 12.194777 28.613281 12.556641 L 26.949219 13.048828 L 28.210938 14.242188 C 29.040881 15.026075 29.78514 15.898906 30.425781 16.847656 L 30.425781 16.849609 C 31.274118 18.105484 31.87725 19.520001 32.330078 21 L 30.177734 21.003906 C 29.275951 18.487646 27.744176 16.266371 25.642578 14.693359 C 25.632248 14.685759 25.604071 14.663941 25.619141 14.675781 L 25.017578 14.203125 L 24.404297 14.658203 C 22.281039 16.233966 20.730928 18.468683 19.822266 21.003906 L 17.669922 21 C 18.122232 19.519687 18.726898 18.105826 19.576172 16.849609 L 19.576172 16.847656 C 20.216813 15.898906 20.959119 15.026075 21.789062 14.242188 L 23.052734 13.048828 L 21.386719 12.556641 C 20.164248 12.194914 18.869977 12 17.533203 12 z M 17.533203 14 C 18.107527 14 18.632902 14.15759 19.183594 14.238281 C 18.760238 14.735097 18.284453 15.185775 17.917969 15.728516 C 16.696221 17.535684 15.804595 19.584101 15.328125 21.787109 L 15.066406 22.998047 L 21.1875 23.005859 L 21.396484 22.283203 C 22.024771 20.126521 23.34572 18.305648 25.005859 16.873047 C 26.663269 18.304848 27.975664 20.128697 28.603516 22.283203 L 28.814453 23.005859 L 34.935547 22.998047 L 34.673828 21.787109 C 34.196369 19.58549 33.302707 17.535667 32.082031 15.728516 C 31.715547 15.185775 31.239762 14.735097 30.816406 14.238281 C 31.366941 14.157596 31.892473 14 32.466797 14 C 38.845527 14 43.992188 19.137522 43.992188 25.5 C 43.992188 31.862478 38.845527 37 32.466797 37 C 31.909114 37 31.398985 36.845606 30.863281 36.769531 C 33.132219 34.097993 34.661789 30.778857 34.994141 27.089844 L 35.09375 26 L 26.052734 26 L 26.052734 32 L 26.949219 32 C 26.388802 32.806209 25.744241 33.532774 25 34.171875 C 24.255756 33.533316 23.609559 32.806756 23.048828 32 L 24 32 L 24 26 L 14.90625 26 L 15.003906 27.089844 C 15.336271 30.779003 16.864926 34.098451 19.134766 36.769531 C 18.599973 36.845499 18.091584 37 17.535156 37 C 11.156426 37 6.0097656 31.862478 6.0097656 25.5 C 6.0097656 20.679374 8.9726212 16.563984 13.175781 14.849609 C 14.519461 14.301469 15.987672 14 17.533203 14 z"></path>
            </svg>
          </div>

          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={widht}
              height={height}
              viewBox="0 0 50 50"
            >
              <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
          </div>

          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={widht}
              height={height}
              viewBox="0 0 50 50"
            >
              <path d="M 25.3125 3 C 19.210938 3 12.492188 5.3125 11.09375 12.8125 C 10.894531 13.613281 11.5 13.992188 12 14.09375 L 18.1875 14.6875 C 18.789063 14.6875 19.207031 14.101563 19.40625 13.5 C 19.90625 10.898438 22.101563 9.59375 24.5 9.59375 C 25.800781 9.59375 27.292969 10.113281 28.09375 11.3125 C 28.992188 12.613281 28.8125 14.40625 28.8125 15.90625 L 28.8125 16.8125 C 25.113281 17.210938 20.3125 17.5 16.8125 19 C 12.8125 20.699219 10 24.207031 10 29.40625 C 10 36.007813 14.199219 39.3125 19.5 39.3125 C 24 39.3125 26.5 38.195313 30 34.59375 C 31.199219 36.292969 31.585938 37.105469 33.6875 38.90625 C 34.1875 39.207031 34.789063 39.085938 35.1875 38.6875 L 35.1875 38.8125 C 36.488281 37.710938 38.792969 35.601563 40.09375 34.5 C 40.59375 34.199219 40.492188 33.5 40.09375 33 C 38.894531 31.398438 37.6875 30.09375 37.6875 27.09375 L 37.6875 17.1875 C 37.6875 12.988281 38.007813 9.085938 34.90625 6.1875 C 32.40625 3.789063 28.414063 3 25.3125 3 Z M 27 22 L 28.6875 22 L 28.6875 23.40625 C 28.6875 25.804688 28.792969 27.894531 27.59375 30.09375 C 26.59375 31.894531 24.988281 33 23.1875 33 C 20.789063 33 19.3125 31.207031 19.3125 28.40625 C 19.3125 23.707031 23 22.300781 27 22 Z M 44.59375 36.59375 C 42.992188 36.59375 41.085938 37 39.6875 38 C 39.289063 38.300781 39.3125 38.6875 39.8125 38.6875 C 41.414063 38.488281 44.988281 38.007813 45.6875 38.90625 C 46.289063 39.707031 45.007813 43.085938 44.40625 44.6875 C 44.207031 45.1875 44.601563 45.300781 45 45 C 47.699219 42.699219 48.40625 38.007813 47.90625 37.40625 C 47.605469 36.90625 46.195313 36.59375 44.59375 36.59375 Z M 2.1875 37.5 C 1.886719 37.5 1.695313 38.011719 2.09375 38.3125 C 8.09375 43.710938 16.007813 47 24.90625 47 C 31.207031 47 38.492188 45.011719 43.59375 41.3125 C 44.394531 40.710938 43.707031 39.695313 42.90625 40.09375 C 37.207031 42.492188 31.101563 43.6875 25.5 43.6875 C 17.199219 43.6875 9.1875 41.386719 2.6875 37.6875 C 2.488281 37.488281 2.289063 37.5 2.1875 37.5 Z"></path>
            </svg>
          </div>
          <Image width={widht} height={height} src={BoseLogo} alt="" />
          <Image width={widht} height={height} src={Adidas} alt="" />
          <Image width={widht} height={height} src={UnderArmour} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OurPartners
