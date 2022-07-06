import React from 'react'
import LinkName from './link';
import TextsmsIcon from '@material-ui/icons/Textsms';
function Service(Props) {
    return (
        <div className='service'>
            <div className='service-icon'>
                <div className='service-img'>
                    <img src={Props.image} />
                </div>
                <h1>{Props.title}</h1>
            </div>
            <div className='service__description'>
                {Props.description}
                <LinkName link={'Contact'} route={'/contact'} icon={<TextsmsIcon />} />
            </div>
        </div>
    )
}

export default Service