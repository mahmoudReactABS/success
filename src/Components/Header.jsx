import React from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom';
import { useTranslationContext } from '../translationContext';

import aboutus from '/aboutus.png'

function Header(props) {
    const navigate = useNavigate(),
        location = useLocation(),
        { t, i18n } = useTranslationContext(),
        pathSegments = location.pathname.split('/'),
        pageName = pathSegments[pathSegments.length - 1],
        condition = pageName === "contacts" && "d-none";

    return (
        <header className="py-5 w-100 d-flex flex-column align-items-center"
            style={{ backgroundImage: `url(${aboutus})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '300px' }}>
            <div data-aos-once="true" data-aos='fade-right' data-aos-duration="1000" className="container w-75">
                <h1 className="fs-1 mb-4">{props.title}</h1>
                
                <p style={{ textAlign: 'justify' }} className=' my-3 ps-3'>{props.text}</p>

                <button onClick={() => navigate('/contacts')} className={`btn py-2 px-5 text-center btn-lg ${condition}`}>{t('contactUs')}</button>
            </div>
        </header>
    )
}

export default Header