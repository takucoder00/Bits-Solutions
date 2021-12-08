import React from 'react';
import FirstHero from '../components/home/firstHero';
import SecondHero from '../components/home/secondHero';
import Testimonials from '../components/home/testimonials';
import Services from '../components/home/services';
import { Steps } from '../components/home/step';
import Layout from '../components/Layout';




export default function Home() {
 
  return (
    <Layout>
      <div className="Home">
        <FirstHero />
        <SecondHero />
        <Steps/>
        <Services/>
        <Testimonials />
      </div>
    </Layout>
  );
}