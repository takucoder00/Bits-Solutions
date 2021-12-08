import React from 'react';
import ContactForm from '../components/contact/contactform';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="Bitssolutions | Contact Us"
    desc="Have any quries, questions or suggestions? Say hello to our team, We reply within a few minutes.">
       <ContactForm/>
    </Layout>
  );
}
