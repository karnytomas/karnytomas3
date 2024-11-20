import React from 'react';
import BillingInfo from '../components/Contact/BillingInfo';
import Map from '../components/Contact/Map';
import ContactForm from '../components/Contact/ContactForm';

function Contact() {
  return (
    <>
      <ContactForm/>
      <BillingInfo/>
      <Map />
    </>
  );
}

export default Contact;