import React from 'react';
import sptext from '../../public/sp text.png';
import logobg from '../../public/logo-bg.jpeg';
import vision from '../../public/vision.png';
import people from '../../public/people.png';
import growth from '../../public/growth.png';
import partnership from '../../public/partnership.png';
import creativity from '../../public/creativity.png';
import { useTranslationContext } from '../translationContext';
import Aboutsp from '../Components/aboutsp';
import Choose from '../Components/choose';
import Marquee from '../Components/marquee';
import Card from '../Components/Card';
import Header from '../Components/Header';

function About() {
    const { t, i18n } = useTranslationContext();

    return (
        <>
            <Header title={t('about')} text={t('headService')} />

            <section data-aos-once="true" data-aos="fade-down" data-aos-delay="50" className="py-5" style={{ backgroundImage: `url(${sptext})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', minHeight: '100vh' }}>
                <Aboutsp />
                <Choose />
            </section>

            <section className="py-5 position-relative">
                <img src={vision} className="w-100" style={{height:'50vh'}} alt="Vision" />
                <div className="position-absolute top-50 start-50 translate-middle text-dark text-center w-100">
                    <h1>{t('ourvis')}</h1>
                    <p>{t('vis')}</p>
                </div>
            </section>

            <section className="pt-5" style={{ backgroundImage: `url(${logobg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center', minHeight: '80vh' }}>
                <div className="container text-center">
                    <h2 data-aos-once="true" data-aos="fade-down" data-aos-delay="0">{t('ourval')}</h2>
                    <p data-aos-once="true" data-aos="fade-down" data-aos-delay="0">{t('val')}</p>

                    <div className="row my-5" data-aos-once="true" data-aos="fade-up" data-aos-delay="1000">
                        <div className="col-xl-3 col-md-6 mb-4">
                            <Card title={t('People')} text={t('cardText')} img={people} />
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <Card title={t('Growth')} text={t('cardText')} img={growth} />
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <Card title={t('Partnership')} text={t('cardText')} img={partnership} />
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <Card title={t('Creativity')} text={t('cardText')} img={creativity} />
                        </div>
                    </div>
                </div>
            </section>
            <Marquee />
        </>
    );
}

export default About;