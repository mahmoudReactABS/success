import React from 'react'
import Herp from '../../public/hero.png';
import { useTranslationContext } from '../translationContext';

import { useNavigate } from 'react-router';

const Hero = () => {
    const { t, i18n } = useTranslationContext(),
        navigate = useNavigate(),
        direction = i18n.language === 'ar' && 'text-white';

    return (
        <header data-aos="fade-down" data-aos-delay="0" className='py-3' style={{ paddingLeft: 0 }}>
            <div className='px-5 py-5 h-100'
                style={{ backgroundImage: `url(${Herp})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center', backgroundPositionY: 'center',height:'100vh' }}>
                <div className='mask w-100 container px-5'>
                    <div className='w-100 container' data-aos="fade-right" data-aos-delay="300">
                        <h1 className={`${direction} mb-3 fw-bolder`}>{t('public')} <br /> <span className='text-primary'>{t('cons')}</span></h1>
                        <p className={`${direction} mb-3 fs-5 fw-bolder`}>{t('par')}</p>
                        <button className='btn btn-md' onClick={() => navigate('/contacts')} href='#!' role='button'>
                            {t('contactUs')}
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Hero
