import React from 'react'
import Template from './../components/template';
import is from './../assets/images/is.png'
import rs from './../assets/images/rs.png'
import mp from './../assets/images/mp.png'
import op from './../assets/images/op.png'
import qa from './../assets/images/qa.png'
function Portfolio() {
  return (
    <section className='port_component container' id='home'>
      {/* com for component */}
      <h1 className='com_title'>Portfolio</h1>
      <div className='templates'>
        <Template background={is} templateName={'Islamic'} link={'https://sparkling-scone-e14e48.netlify.app/'} />
        <Template background={rs} templateName={'Resto'} link={'https://ubiquitous-genie-5f3b91.netlify.app/'} />
        <Template background={mp} templateName={'Mp3-player-from-api'} link={'https://github.com/mohamedreda3/mp3-player-staggered-animation-and-voice-search-in-react.js'} />
        <Template background={qa} templateName={'Full-quiz-app-and-accounts'} link={'https://github.com/mohamedreda3/Full-Stack-Quiz-App'} />
        <Template background={op} templateName={'Other-Projects'} link={'https://github.com/mohamedreda3/'} />
      </div>
    </section>
  )
}

export default Portfolio