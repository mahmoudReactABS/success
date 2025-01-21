import React from 'react'
import { useTranslationContext } from '../translationContext';
import Header from '../Components/Header';
import bgl from '../../public/logo-bg.jpeg'
import MessageForm from '../Components/messageForm';
import './Clients.css'

import s1 from '../../public/sponsors/1.png';
import s2 from '../../public/sponsors/2.png';
import s3 from '../../public/sponsors/3.png';
import s4 from '../../public/sponsors/4.png';
import s5 from '../../public/sponsors/5.png';
import s6 from '../../public/sponsors/6.png';
import s7 from '../../public/sponsors/7.png';
import s8 from '../../public/sponsors/8.png';
import s9 from '../../public/sponsors/9.png';
import s10 from '../../public/sponsors/10.png';
import s11 from '../../public/sponsors/11.png';
import s12 from '../../public/sponsors/12.png';
import s13 from '../../public/sponsors/13.png';
import s14 from '../../public/sponsors/14.png';
import s15 from '../../public/sponsors/15.png';
import s16 from '../../public/sponsors/16.png';
import s17 from '../../public/sponsors/17.png';
import s18 from '../../public/sponsors/18.png';
import s19 from '../../public/sponsors/19.png';
import s20 from '../../public/sponsors/20.png';
import s21 from '../../public/sponsors/21.png';
import s22 from '../../public/sponsors/22.png';
import s23 from '../../public/sponsors/23.png';
import s24 from '../../public/sponsors/24.png';
import s25 from '../../public/sponsors/25.png';
import s26 from '../../public/sponsors/26.png';
import s27 from '../../public/sponsors/27.png';
import s28 from '../../public/sponsors/28.png';
import s29 from '../../public/sponsors/29.png';
import s30 from '../../public/sponsors/30.png';
import s31 from '../../public/sponsors/31.png';
import s32 from '../../public/sponsors/32.png';
import s33 from '../../public/sponsors/33.png';
import s34 from '../../public/sponsors/34.png';
import s35 from '../../public/sponsors/35.png';
import s36 from '../../public/sponsors/36.png';
import s37 from '../../public/sponsors/37.png';
import s38 from '../../public/sponsors/38.png';
import s39 from '../../public/sponsors/39.png';
import s40 from '../../public/sponsors/40.png';

function Clients() {
    const { t, i18n } = useTranslationContext(),
        sponsors = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40];

    return (
        <>
            <Header title={t('ourCli')} text={t('clientText')} />

            <section data-aos-delay="500" className='row py-4 container w-75 mx-auto'
                style={{ backgroundImage: `url(${bgl})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', width: '100vw', minHeight: '300px' }}>
                {sponsors.map((sponsor, index) => (
                    <div data-aos="fade-down" data-aos-delay="200" key={index} className="col-3 p-3">
                        <img src={sponsor} alt={`Sponsor ${index + 1}`} className="img-fluid w-100 sponsor-img" />
                    </div>
                ))}
            </section>

            <div className="container py-4">
                <MessageForm />
            </div>
        </>
    );
}

export default Clients;
