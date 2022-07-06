import React from 'react'
import Color from '../components/color';
import SettingsIcon from '@material-ui/icons/Settings';

function Changethemecontainer(props) {
    return (
        <div className='themes'>
            <div className={props.openThemesContainer ? 'themescolors active' : 'themescolors'}>
                <Color color={'#f27474'} func={(e) => { props.setThemeColor(e.target.id); }} />
                <Color color={'#70b570'} func={(e) => { props.setThemeColor(e.target.id); }} />
                <Color color={'#d518da'} func={(e) => { props.setThemeColor(e.target.id); }} />
                <Color color={'#1da1f2'} func={(e) => { props.setThemeColor(e.target.id); }} />
            </div>
            <span className='showthemes c__themes' onClick={() => props.setOpenThemesContainer(!props.openThemesContainer)}><SettingsIcon /></span>
        </div>
    )
}

export default Changethemecontainer