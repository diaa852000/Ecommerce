import React from 'react'
import WomanImg from '../../assets/woman_hero.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full lg:p-0">
        <div className='flex flex-col justify-center md:pl-6 xl:pl-0'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
              <p>
                new trend
              </p>
            </div>
            <h1 className='text-[60px] sm:text-[70px] leading-[1.1] font-thin mb-4 uppercase'>autumn sale stylish <br/>
              <span className='font-semibold'>womens</span>
            </h1>
            <Link to={'/'} className='capitalize self-start font-semibold border-b-2 border-primary'>discover more</Link>
        </div>

          <div className='hidden lg:block'>
            <img src={WomanImg} alt="womanImg" />
          </div>
      </div>
    </section>
  )
}

export default Hero