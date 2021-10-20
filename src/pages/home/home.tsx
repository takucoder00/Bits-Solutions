import React from 'react';
import FirstHero from './components/firstHero';
import SecondHero from './components/secondHero';
import Benefits from './components/benefits';
import Inspiration from './components/inspiration';
import Testimonials from './components/testimonials';
import BlogSection from './components/blogSection';
import Base from '../base';
import Services from './components/services';
import { Steps } from '../steps/step';


export default function Home() {
 
  return (
    <Base>
      <div className="Home">
        <FirstHero />
        {/* <Benefits /> */}
        <SecondHero />
        <Steps/>
        <Services/>
        {/* <Inspiration /> */}
        <Testimonials />
        {/* <BlogSection /> */}
      </div>
    </Base>
  );
}
