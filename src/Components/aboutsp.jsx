import React from 'react'
import manager from '/about.png';
import { useTranslationContext } from '../translationContext';

function Aboutsp() {
    const { t, i18n } = useTranslationContext(),
        about_sp = i18n.language === 'ar' ? 'text-end' : 'text-start',
        img_rot = i18n.language === 'ar' ? 'end-0' : 'start-0';
    return (
        <section className={`${about_sp} row py-4 w-100`}>
            <div data-aos="fade-right" data-aos-delay="1000" className="col-xl-6 col-md-12 row d-flex flex-row position-relative justify-content-end">
                <div className={`w-75 h-75 rounded rounded-5 position-absolute bottom-0 ${img_rot} z-0`} style={{ backgroundColor: 'var(--primary)' }}></div>
                <img className="rounded rounded-5 z-3 me-4 mb-3" style={{ width: '75%', height: '300px', margin: '0' }} src={manager} alt="Success Partners" />
            </div>

            <div data-aos="fade-left" className="col-xl-6 col-md-12">
                <h1 className='fw-bold'>{t('aboutSP')}</h1>
                <div className="border border-bottom-3 border-success w-25"></div>
                <p className="w-75 my-4">
                    {t('par')}
                </p>
            </div>
        </section>
    )
}

export default Aboutsp