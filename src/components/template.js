import React from 'react'
import TelegramIcon from '@material-ui/icons/Telegram';
function Template(props) {
  return (
    <div className='template' style={{'background-image': `url(${props.background})`}}>
        <div className='temp_info'>
            <h3>{props.templateName}</h3>
            <a href={`${props.link}`} target='_blanck'><TelegramIcon/> &nbsp; View website</a>
        </div>
    </div>
  )
}

export default Template