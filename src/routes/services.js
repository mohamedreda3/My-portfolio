import React, {useEffect}from 'react'
import Service from '../components/service'
import wd from './../assets/images/wd.png'
import dw from './../assets/images/dw.png'
import rw from './../assets/images/rw.png'
import ph from './../assets/images/ph.png'
import ap from './../assets/images/ap.png'
import be from './../assets/images/be.png'
function Services() {
  return (
    <section className='serv_component container' id='home'>
      <h1 className='com_title'>Services</h1>
      <div className='services'>
        <Service description={'Build Static websites from scratch with HTML and CSS'} title={'Web design'} image={wd} />
        <Service description={'Build Responsive websites with HTML and CSS'} title={'Responsive Web design'} image={rw} />
        <Service description={'Convert photoshop or figma ...etc to HTML, CSS and JS'} title={'PSD to HTML'} image={ph} />
        <Service description={'Build dynamic websites with HTML, CSS, and JavaScript'} title={'Make dynamic pages'} image={dw} />
        <Service description={'Make rest api with php amd mysql'} title={'Make an api'} image={ap} />
        <Service description={'Make websites with php and mysql'} title={'Back-end development'} image={be} />
      </div>
    </section>
  )
}

export default Services