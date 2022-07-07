import React, { useRef } from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  return (
    <section className='contact_component container' id='home'>
      {/* com for component */}
      <h1 className='com_title'>Contact</h1>
      <div className='contact'>
        <div className='contact__links'>
          <h1>Contact</h1>
          <div className='social'>
            <a href="https://github.com/mohamedreda3/" target="_blank"> <GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/mohamed-reda-0450571b2/" target="_blank"> <LinkedInIcon /></a>
            <a href="mailto:mmoh33650@gmail.com"> <MailIcon /></a>
          </div>
        </div>
        <div className='contact__forms'>
          <form ref={form}>
            <input type={'text'} placeholder='Your-Name' name={'from_name'} required />
            <input type={'email'} placeholder='Your-Email' name={'from_email'} required />
            <textarea placeholder='Your-Message' name='message'></textarea>
            <button type="submit" onClick={(e) => {
              e.preventDefault();
              let formData = new FormData(form.current);
              if (formData.get('from_name') != '' && formData.get('from_email') != '' && formData.get('message') != '') {
                emailjs.sendForm('service_l50fkhm', 'template_sjns88d', form.current, 'cp5NWKgyk7fyHhUO_')
                  .then((result) => {
                    alert('Email Sent Thanks...Contact Us Again.');
                  }, (error) => {
                    alert(error.text);
                  });
              } else {
                alert('You Should Enter all Fields...!')
              }
            }}>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact