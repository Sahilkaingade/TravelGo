import React from 'react';
import contactbg from '../../assets/contact-bg.jpg';
import ContactInfo from '../../components/ContactInfo/contactinfo';
import ContactSection from '../../components/ContactSection/contactsection';

export default function Contact() {
  return (
    <div>
      <div style={{backgroundImage: `url(${contactbg})`}} className="h-[50vh] bg-cover bg-center flex items-center justify-center">
        <h1 className='text-[52px] font-bold text-white'>Contact Us</h1><br />
      </div>
      <ContactInfo/>
      <ContactSection />
    </div>
  )
}
