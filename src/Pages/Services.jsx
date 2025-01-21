import React from 'react'
import Header from '../Components/Header'
import { useTranslationContext } from '../translationContext';
import Service from '../Components/Service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

import Data from '../data/services.json'

import vctor from '../../public/sackDollar.png';
import s1 from '../../public/s1.png'
import s2 from '../../public/s2.png'
import s3 from '../../public/s3.png'
import s4 from '../../public/s4.png'
import s5 from '../../public/s5.png'
import s6 from '../../public/s6.png'
import s7 from '../../public/s7.png'
import s9 from '../../public/s9.png'
import s10 from '../../public/s10.png'
import s11 from '../../public/s11.png'

export default function Services() {
    const { t, i18n } = useTranslationContext();
    const currentLanguage = i18n.language;
    
    return (
        <>
            <Header title={t('Our_Service')} text={t('headService')} />

            <div className="container my-5 px-5">
                <h1 style={{ color: 'var(--primary)' }} className='fw-bolder'>{t('taxServices')}</h1>
                <section className='row py-3'>
                    {Data.taxes.map((tax, index) => {
                        const images = [s1, s2, s5, s6, s4, s7, s3, s10, s9];
                        return (
                            <Service height={'600px'} key={tax.id} img={images[index]} title={tax.type[currentLanguage]} list={[]}
                                text={`${tax.description[currentLanguage].substring(0, 100)}...`} icon={vctor} />
                        );
                    })}
                </section>
            </div>

            <div className="container my-5 px-5">
                <h1 style={{ color: 'var(--primary)' }} className='fw-bolder'>{t('advisoryServices')}</h1>
                <section className='row py-3'>
                    {Data.advisoryServices.map((tax, index) => {
                        const images = [s11];
                        return (
                            <Service height={'600px'} key={tax.id} img={images[index]} title={tax.type[currentLanguage]} list={[]}
                                text={`${tax.description[currentLanguage].substring(0, 100)}...`} icon={faMessage} />
                        );
                    })}
                </section>
            </div>

            {/* <div className="container my-5">
                <h1 style={{color:'var(--primary)'}} className=''>Audit Service</h1>
                <section className='row py-3'>
                    <Service height={'600px'} img={s1} title={t('corIncTax')} list={[]} text={t('corIncTxt')} icon={faMagnifyingGlass} />
                    <Service height={'600px'} img={s2} title={t('salTax')} list={[]} text={t('salTaxTxt')} icon={faMagnifyingGlass} />
                    <Service height={'600px'} img={s3} title={t('corIncTax')} list={[]} text={t('corIncTxt2')} icon={faMagnifyingGlass} />
                    <Service height={'600px'} img={s4} title={t('stTax')} list={[]} text={t('stTaxTxt')} icon={faMagnifyingGlass} />
                    <Service height={'600px'} img={s5} title={t('taxTrans')} list={[]} text={t('taxTransTxt')} icon={faMagnifyingGlass} />
                </section>
            </div> */}
        </>
    )
}