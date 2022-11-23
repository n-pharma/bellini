import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rfak9xr', 'template_b5kbsxb', form.current, 'jaNRFFW66QLda1hjO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className='contactMail'>
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Your name.."/>
      <input type="email" name="user_email" placeholder="Email"/>
      <textarea name="message" placeholder="Message"/>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;


