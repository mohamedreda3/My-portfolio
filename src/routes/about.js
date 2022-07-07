import React from 'react'
import Exprience from '../components/exprience'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Link } from 'react-router-dom';
import MyPDF from '../assets/files/MyResume.pdf';
function About() {
  return (
    <section className='about_component container' id='home'>
      {/* com for component */}
      <h1 className='com_title'>About</h1>
      <div className='about_head'>
        <h3> My name is, <span>Mohamed Reda</span>,and I'm a <span>web developer</span>. </h3>
        <p style={{ width: '100%', padding: '5px 10px' }}>I am a software developer with 1.5 years of experience in web design and web development.
          <p>And I'm good at (Web developement, Web design, Front-end developement, Back-end developement), Good at pure js, Good at (deal with api, Make restful api, Design database, Develop database), Good at managing database and Good at convert PSD to HTML.</p>
        </p>
        {/* <h3><p>I'm <span>21 </span> years old.</p></h3> */}
        <div className='about_banner'>
          <div className='banner_tp'>
            <h1 className='com_title'>Information</h1>
            <div className='information'>
              <p> Name: <span>Mohamed Reda</span> </p>
              <p> Age: <span>21</span> </p>
              <p> Phone: <span>+201212745939</span> </p>
              <p> Degree: <span>CS</span> </p>
              <p> Email: <span>mmoh33650@gmail.com</span> </p>
              <p> Birthday: <span>18-11-2000</span> </p>
              <p> City: <span>Cairo</span> </p>
            </div>
            <h1 className='com_title'>Experience</h1>
            <div className='information experience'>
              <Exprience title={'HTML'} width={'95%'} />
              <Exprience title={'CSS'} width={'80%'} />
              <Exprience title={'JS'} width={'88%'} />
              <Exprience title={'Web design'} width={'88%'} />
              <Exprience title={'PHP'} width={'65%'} />
              <Exprience title={'MYSQL'} width={'97%'} />
            </div>
          </div>
          <div className='btns'>
            <a href={MyPDF} download target="_blank">Download CV</a>
            <button onClick={(e) => window.location.href = 'mailto:mmoh33650@gmail.com'}>Hire me</button>
          </div>
          <div className='bottom'>
            {/* ---------------------- */}
            <div className='banner_bm_lf'>
              <h2>Education &nbsp; (Courses)</h2>
              <div className='banner_tp banner_bm'>
                <span className='h_line'></span>
                <div className='education'>
                  <p><CalendarTodayIcon /><span>Jan. 2021.</span></p>
                  <h3 className='openNav'>Courses/Certificates</h3>
                  <h4>El-zero web school.</h4>
                  <h5>I learnt web developement from Elzero</h5>
                </div>
                {/*  */}
                <div className='education'>
                  <p><CalendarTodayIcon /><span>Oct. 2021.</span></p>
                  <h3 className='openNav'>Courses/Certificates</h3>
                  <h4>Dev Ed.</h4>
                  <h5>I learnt how to use that I learnt from Elzero in real porject.</h5>
                </div>
                {/*  */}
                <div className='education'>
                  <p><CalendarTodayIcon /><span>Oct. 2021.</span></p>
                  <h3 className='openNav'>Courses/Certificates</h3>
                  <h4>Online tutorials.</h4>
                  <h5>I learnt how to use that I learnt from Elzero in real porject.</h5>
                </div>
                {/*  */}
                <div className='education'>
                  <p><CalendarTodayIcon /><span>June 2022.</span></p>
                  <h3 className='openNav'>Courses/Certificates</h3>
                  <h4>Codeevolation.</h4>
                  <h5>I learnt React.js from Vishwas.</h5>
                </div>
                {/*  */}
              </div>
            </div>

            {/* --------------------- */}
            <div className='banner_bm_lf'>
              <h2>Education &nbsp; (Academic)</h2>
              <div className='banner_tp banner_bm'>
                <span className='h_line'></span>
                <div className='education'>
                  <p><CalendarTodayIcon /><span>Sep. 2018 - June 2023</span></p>
                  <h3 className='openNav'>Academic</h3>
                  <h4>Bachelor’s computer science in Faculty of computer science and information, Tanta university, Tanta.</h4>
                  <span>Until now I have had a 2.4 GPA.</span>
                </div>
                {/*  */}
                <div className='education'>
                  <p><CalendarTodayIcon /><span>Sep. 2016- June 2018.</span></p>
                  <h3 className='openNav'>Academic</h3>
                  <h4>Public, Shirshabah Secondary School.</h4>
                  <span>I got 93.41%.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About