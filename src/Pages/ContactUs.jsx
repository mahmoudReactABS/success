import React from 'react'
import Header from '../Components/Header'
import { useTranslationContext } from '../translationContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import MessageForm from '../Components/messageForm';
import logo_bg from '/logo-bg.jpeg';

function ContactUs() {
    const { t, i18n } = useTranslationContext();

    return (
        <>
            <Header title={t('contactUs')} text={t('cntctTxt')} />

            <section className='container my-3 px-5'
                style={{ backgroundImage: `url(${logo_bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <div className="row container py-4">
                    <article className='col-xl-6 col-md-12'>
                        <h5 className='my-4'><strong><FontAwesomeIcon className='mx-4' icon={faPhone} />202 25265638 -  202 25265637</strong></h5>
                        <h5 className='my-4'><strong><FontAwesomeIcon className='mx-4' icon={faLocationDot} />{t('address')}</strong></h5>
                        <h5 className='my-4'><strong><FontAwesomeIcon className='mx-4' icon={faMailBulk} />info@sp.com.eg</strong></h5>
                        <div className='mt-5 text-center w-50'>
                            <h5 className='my-4'><strong>{t('socmed')}</strong></h5>
                            <div className="d-flex justify-content-center gap-4">
                                <FontAwesomeIcon className='fs-4' icon={faFacebook}></FontAwesomeIcon>
                                <FontAwesomeIcon className='fs-4' icon={faLinkedin}></FontAwesomeIcon>
                                <FontAwesomeIcon className='fs-4' icon={faInstagram}></FontAwesomeIcon>
                                <FontAwesomeIcon className='fs-4' icon={faYoutube}></FontAwesomeIcon>
                            </div>
                        </div>
                    </article>
                    <article className='col-xl-6 col-md-12'>
                        <MessageForm align={'ups'} />
                    </article>
                </div>

                <iframe width="100%" height="300" style={{ border: 0 }} allowFullScreen='' title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.609896181966!2d31.251775324941967!3d29.96189762247803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847b30725a015%3A0x279cfa82e868b549!2sSuccess%20Partners!5e0!3m2!1sar!2seg!4v1736413566366!5m2!1sar!2seg">
                </iframe>
            </section>
        </>
    )
}

export default ContactUs