import React, { useState, useEffect } from 'react'
import me from '../assets/images/me.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

let strings = ['Web developer', 'Web designer', 'Front-end developer', 'Back-end developer', 'Good at pure js', 'Good at deal with api', 'Make restful api', 'Design database', 'Develop database', 'Good at manage database', 'Good at convert PSD to HTML'];
let nextString = 0;
let nextChar = 0;

function Home() {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    function type() {
      // console.log(strings.length);
      if (nextChar < strings[nextString].length) {
        setTyped(typed + strings[nextString][nextChar]);
        nextChar++;
      } else {
        if (nextString < strings.length - 1) {
          nextString++;
          nextChar = 0;
          setTyped('');
        } else {
          nextString = 0;
          nextChar = 0;
          setTyped('');
        }
      }
    }
    setTimeout(type, 380);
  }, [typed]);

  return (
    <section className='home_component container' id='home'>
      <div className='hm_com'>
        <div className='socials'>
          <a href="https://github.com/mohamedreda3/" target="_blank"> <GitHubIcon /></a>
          <a href="https://www.linkedin.com/in/mohamed-reda-0450571b2/" target="_blank"> <LinkedInIcon /></a>
          <a href="mailto:mmoh33650@gmail.com"> <MailIcon /></a>
        </div>
        <div className='left_com'>
          <h3> Hello, my name is, <span>Mohamed Reda</span> </h3>
          <h2> I'm a <span>{typed}</span> <span className='taagob'>!</span>  </h2>
          <p style={{ width: '240px', padding: '5px 10px' }}>I am a software developer with 1.5 years of experience in web design and web development.</p>
          <button onClick={() => window.location.href = 'mailto:mmoh33650@gmail.com'}>Hire me</button>
        </div>
        <div className='logo'>
          <img src={me} />
        </div>
      </div>
    </section>
  )
}

export default Home