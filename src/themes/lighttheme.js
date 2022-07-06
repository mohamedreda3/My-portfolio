import React from 'react'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
function Lighttheme(props) {
    return (
        <div className='light' onClick={() => props.setBrightness(!props.Brightness)}>
            <span className='showthemes'>{!props.Brightness ? <Brightness3Icon /> : <WbSunnyIcon />}</span>
        </div>
    )
}

export default Lighttheme