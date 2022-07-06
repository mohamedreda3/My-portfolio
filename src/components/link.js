import React from 'react'
import { Link, useHref, useLocation } from 'react-router-dom';
function LinkName(props) {
    const param = useLocation();    
    return (
        <Link id={param.pathname == props.route ? 'active' : ''} to={props.route}>{props.icon} {props.link}</Link>
    )
}

export default LinkName