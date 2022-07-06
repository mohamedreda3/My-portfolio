import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

function Contact() {
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
          <form>
            <input type={'text'} placeholder='Your-Name' required />
            <input type={'email'} placeholder='Your-Email' required />
            <textarea placeholder='Your-Message' />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact