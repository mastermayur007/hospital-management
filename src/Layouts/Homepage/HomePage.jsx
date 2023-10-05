import React from 'react'
import './HomePage.css'
import Hero from '../../Hero';
import Programs from '../../Programs/Programs';
import Reasons from '../../Reasons/Reasons';
import Plans from '../../Plans/Plans';
import Testimonials from '../../../assets/Testimonials/Testimonials';
import Join from '../../Join/Join';
import Footer from '../../Footer/Footer';
export default function HomePage() {
  return (
    <div className="App">
         <Hero/>
         <Programs/>
         <Reasons/>
         <Plans/>
         <Testimonials/>
         <Join/>
         <Footer/>
    </div>
  )
}
