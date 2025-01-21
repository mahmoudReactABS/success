import React from 'react';
import meeting from '../../public/meeting.png';
import { useTranslationContext } from '../translationContext';

function Choose() {
    const { t, i18n } = useTranslationContext(),
        about_sp = i18n.language === 'ar' ? 'text-end' : 'text-start',
        img_rot = i18n.language === 'ar' ? 'end-50' : 'start-50';

    return (
        <section data-aos-delay="3000" className={`${about_sp} row py-4 w-100`} style={{ position: 'relative', overflowX: 'hidden' }}>
            {/* Text Section */}
            <article data-aos="fade-right" data-aos-duration="1000" className="col-xl-6 col-md-12 px-5 d-flex flex-column align-items-end">
                <h1>{t('WhyChooseUs')}</h1>
                <div className="border border-bottom-3 border-success w-25"></div>
                <p className="my-4 w-75">{t('par')}</p>
            </article>

            {/* Image Section */}
            <article data-aos="fade-left" data-aos-delay="1000" className="col-xl-6 col-md-12 row d-flex flex-row position-relative justify-content-start">
                <div className={`w-100 h-75 rounded rounded-5 position-absolute bottom-0 ${img_rot} z-0`} style={{ backgroundColor: 'var(--primary)' }}>
                </div>
                <img className="rounded rounded-5 z-3 ms-4 mb-3" style={{ width: '75%', height: '300px', margin: '0' }} src={meeting} alt="Success Partners" />
            </article>
        </section>
    );
}

export default Choose;