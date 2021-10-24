import React from 'react';
import FirstHero from './components/firstHero';
import SecondHero from './components/secondHero';
import Testimonials from './components/testimonials';
import Base from '../base';
import Services from './components/services';
import { Steps } from '../steps/step';


export default function Home() {
 
  return (
    <Base>
      <div className="Home">
        <FirstHero />
        <SecondHero />
        <Steps/>
        <Services/>
        <Testimonials />
      </div>
    </Base>
  );
}
