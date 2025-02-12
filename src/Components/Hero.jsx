import React from 'react';
import Herp from '/hero.png';
import { useTranslationContext } from '../translationContext';
import { useNavigate } from 'react-router';

const Hero = () => {
  const { t, i18n } = useTranslationContext();
  const navigate = useNavigate();

  return (
    <header data-aos-once="true" data-aos="fade-down" data-aos-delay="0" className='w-100' style={{ paddingLeft: 0 }}>
      <div className='px-3 px-md-5 py-5 d-flex align-items-center justify-content-center'
        style={{ backgroundImage: `url(${Herp})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh', }}>
        <div className='mask w-100 container px-3 px-md-5'>
          <div className='d-flex flex-column justify-content-center align-items-center align-items-md-start text-center text-md-start'
            style={{ marginTop: '80px' }} data-aos-once="true" data-aos="fade-right" data-aos-delay="300">
            <h1 className='mb-3 fw-bolder display-4'>
              {t('public')} <br />
              <span className='text-primary'>{t('cons')}</span>
            </h1>
            <p className='mb-3 w-50 w-50 fs-5' style={{ textAlign: 'justify' }}>
              {t('par')}
            </p>
            <div className="w-100">
              <button className='btn py-2 px-5 text-center btn-lg' onClick={() => navigate('/contacts')} role='button'>
                {t('contactUs')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;