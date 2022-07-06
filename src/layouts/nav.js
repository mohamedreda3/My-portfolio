import React, { useContext, useState } from 'react'
import LinkName from './../components/link';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { theme } from '../App';
import { Outlet } from 'react-router-dom'

function Nav() {
    const getTheme = useContext(theme);

    return (
        <nav>
            <div className='logo'>
                Porto
            </div>
            <div className='links'>
                <LinkName link={'Home'} route={'/'} icon={<HomeIcon />} />
                <LinkName link={'About'} route={'/about'} icon={<AccountBoxIcon />} />
                <LinkName link={'Services'} route={'/services'} icon={<FormatListBulletedIcon />} />
                <LinkName link={'Portflio'} route={'/portfolio'} icon={<BusinessCenterIcon />} />
                <LinkName link={'Contact'} route={'/contact'} icon={<TextsmsIcon />} />
            </div>
            <Outlet />
        </nav>
    )
}

export default Nav