import React from 'react'
import Navigation from '../components/Navigation'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import Button from '../components/Button'
import Advertisement from '../section/Advertisement'
import FAQ from '../section/FAQ'
import Reviews from '../section/Reviews'
import Products from '../section/Products'

const Hero = () => {
  return (
    <>
      <div className="relative w-screen h-[125vh] px-16 pb-8 bg-[url(/src/assets/e.jpg)] bg-cover bg-center overflow-hidden flex flex-col justify-between">
        <Navigation />

        <div className="flex flex-col gap-3 text-white">
          <p className="tracking-wide mb-2">- Experienced Developer</p>
          <h2 className='text-7xl'>Level Up Your</h2>
          <h2 className='text-7xl'>Performance</h2>
          <p className="text-lg mb-6 w-1/2">Improve your performance with personalized training plans guided by an experienced coach committed to your success.
          </p>

          <Button heading='Start now'/>
        </div>
        
        <div className='flex flex-col px-4 py-1 border-l-2 border-white/40'>
          <p className='text-3xl'>★ ★ ★ ★ ★</p>
          <p className="text-white">15+ Positive Client Reviews</p>
        </div>
      </div>
      <Reviews />
      <Products />
      <FAQ />
      <Advertisement />
    </>
  )
}

export default Hero