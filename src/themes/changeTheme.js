import React, { createContext, useState, useEffect, useContext } from 'react'
import Lighttheme from './lighttheme';
import Changethemecontainer from './changethemecontainer';
// import { theme } from '../App';



function ChangeTheme(props) {
    const [Brightness, setBrightness] = useState(false);
    const [openThemesContainer, setOpenThemesContainer] = useState(false);
    const [themeColor, setThemeColor] = useState('#1da1f2');
    // const change = useContext(theme);
    // change.changeTheme(themeColor);
    // change.changeBackground(Brightness ? 'black' : 'white');
    // change.changePaColor(Brightness ? 'white' : 'black');
    // change.changeNavBackground(!Brightness ? 'white' : '#222222');
    // change.changeShadow(!Brightness ? 'white' : '#393939');
    useEffect(() => {
        props.setThemeColor(themeColor);
        props.setBackground(Brightness ? '#151313' : 'white');
        props.setPaColor(Brightness ? 'white' : '#151313');
        props.setNavBackground(!Brightness ? 'white' : '#222222');
        props.setShadow(!Brightness ? 'white' : '#393939');
    }, [themeColor , Brightness]);

    return (
        <div className='changetheme'>
            <div className='themes_changer'>
                <Changethemecontainer setThemeColor={setThemeColor} setOpenThemesContainer={setOpenThemesContainer} openThemesContainer={openThemesContainer} />
                <Lighttheme Brightness={Brightness} setBrightness={setBrightness} />
            </div>
        </div>
    )
}

export default ChangeTheme