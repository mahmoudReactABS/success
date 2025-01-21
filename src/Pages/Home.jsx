import React from 'react';
import Hero from '../Components/Hero';
import { faSackDollar, faMagnifyingGlass, faIndustry, faPeopleGroup, faSignal, faCircleCheck, faMoneyBillWave, faGear } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

import Option from '../Components/Option';
import Service from '../Components/Service';

import AuditService from '../../public/Audit.png';
import AdvisoryService from '../../public/Advisory.png';
import TaxService from '../../public/Tax.png';
import right from '../../public/rightrev.jpeg';
import logo_bg from '../../public/logo-bg.jpeg';

import { useTranslationContext } from '../translationContext';

import Marquee from '../Components/marquee';
import Aboutsp from '../Components/aboutsp';

import servicesData from '../data/servicesTitles.json';

const reasons = [
  {
    "id": "1",
    "dir": "l",
    "title_en": "Outstanding Industry Experience",
    "title_ar": "خبرة صناعية متميزة",
    "icon": faIndustry,
    "details": {
      "en": "Our enthusiasm to work with YOUR ESTEEMED COMPANY is derived from our commitment to the power and our team’s understanding of issues that YOUR ESTEEMED COMPANY will face in the future.",
      "ar": "لدينا التركيبة المناسبة من المهارات والخبرة والمعرفة ونهج جديد لضمان تقديم حلول مبتكرة وفعّالة في سياق الخدمات المهنية."
    }
  },
  {
    "id": "2",
    "dir": "c",
    "title_en": "Strength and depth of the team",
    "title_ar": "قوة وعمق الفريق",
    "icon": faPeopleGroup,
    "details": {
      "en": "Our enthusiasm to work with YOUR ESTEEMED COMPANY is derived from our commitment to the power and our team’s understanding of issues that YOUR ESTEEMED COMPANY will face in the future. More widely, our power is run as a national business and this critical mass allows us to respond proactively to sector issues.",
      "ar": "ينبع حماسنا للعمل معكم من خلال التزامنا بمدي خبرة وفهم وقوة فريق العمل للقضايا التي ستواجهها شركتكم في المستقبل. على نطاق أوسع ، حيث نقدم خدماتنا للعديد من الشركات في مختلف المجالات وتتيح لنا هذه الميزة الاستجابة بشكل استباقي لقضايا القطاع."
    }
  },
  {
    "id": "3",
    "dir": "r",
    "title_en": "Open and effective communication",
    "title_ar": "التواصل المفتوح والفعال",
    "icon": faSignal,
    "details": {
      "en": "We will maintain an open and honest relationship, challenging where appropriate, and always being available to ensure your issues are dealt with on a timely basis. We will communicate regularly and openly with you and your senior management team.",
      "ar": "سنحافظ على علاقة منفتحة وصادقة ، حيث نواجه تحديًا عند الاقتضاء ، ونظل متاحًا دائمًا للتأكد من معالجة مشكلاتك في الوقت المناسب. سنتواصل بانتظام وبصراحة معكم ومع فريق الإدارة العليا."
    }
  },
  {
    "id": "4",
    "dir": "l",
    "title_en": "Competitive Fee",
    "title_ar": "أسعار تنافسية",
    "icon": faMoneyBillWave,
    "details": {
      "en": "We believe that our proposed fee balances outstanding value for money with outstanding quality and service. It represents a competitive price for the rigor quality of opinion and services that you will receive.",
      "ar": "نحن نؤمن بأن الرسوم المقترحة تعمل على موازنة القيمة المتميزة مقابل المال مع الجودة والخدمة المتميزة.حيث تمثل سعرًا تنافسيًا لجودة الرأي والخدمات الدقيقة التي ستتلقاها."
    }
  },
  {
    "id": "5",
    "dir": "c",
    "title_en": "The highest quality audit option",
    "title_ar": "خيار التدقيق بأعلى جودة",
    "icon": faCircleCheck,
    "details": {
      "en": "We have the right combination of skills, experience, knowledge and freshness of approach to ensure delivering innovative and effective solutions within the professional services context.",
      "ar": "جودة الرأي مهمة لنا بقدر أهميتها لكم. ثقافتنا القائمة على عدم وجود أي فشل تدقيق ستضمن الجودة."
    }
  },
  {
    "id": "6",
    "dir": "r",
    "title_en": "Added value built into the professional services",
    "title_ar": "القيمة المضافة في الخدمات المهنية",
    "icon": faGear,
    "details": {
      "en": "The primary value we add comes from our partnership approach to provide a full scope, full relationship professional services. As part of your interaction with our team you will get real insight, both formal and informal as part of our service offering process.",
      "ar": "القيمة الأساسية التي نضيفها تأتي من نهج الشراكة الخاص بنا لتوفير نطاق كامل من الخدمات المهنية ذات العلاقة الكاملة. كجزء من تفاعلك مع فريقنا ، ستحصل على رؤية حقيقية ، رسمية وغير رسمية كجزء من عملية تقديم خدماتنا."
    }
  }
];

function Home() {
  const { t, i18n } = useTranslationContext();
  const currentLang = i18n.language;

  return (
    <>
      <Hero />

      {/* Reasons Section */}
      <section data-aos="fade-down" className="w-100 text-center my-3 d-flex flex-column align-items-center">
        <h1 className='fw-bold'>{t('WhyChooseUs')}</h1>
        <div className="border border-bottom-3 border-success w-25 my-2"></div>
        <p className="w-25">{t('choose')}</p>
      </section>

      <section className="py-5 w-100" style={{ backgroundColor: 'var(--primary)', position: 'relative' }}>
        <div className="container">
          <div className="position-absolute top-0 start-0 h-50 z-0"
            style={{ width: '85%', backgroundImage: `url(${right})`, backgroundColor: 'var(--primary)', backgroundSize: 'cover', backgroundPosition: 'center', height: '75%' }} />
          <div className="row container px-5 w-100 z-3 position-relative">
            {reasons.map((reason) => (
              <Option
                key={reason.id}
                direction={reason.dir}
                icon={reason.icon}
                title={currentLang === 'en' ? reason.title_en : reason.title_ar}
                details={reason.details[currentLang]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <Aboutsp />

      {/* Services Section */}
      <section data-aos="fade-down" className="d-flex flex-column align-items-center py-5"
        style={{ backgroundImage: `url(${logo_bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', }}>
        <h1 className='fw-bold'>{t('Our_Service')}</h1>
        <div className="border border-bottom-3 border-success w-25 my-2"></div>
        <p  >{t('guide')}</p>
        <article className="my-5 container px-5">
          <section data-aos="fade-down" data-aos-delay="500" className='row'>
            {servicesData.services.map((service) => <Service key={service.id} height={'850px'} img={service.id === 1 ? TaxService : service.id === 2 ? AuditService : AdvisoryService}
              title={service.title[currentLang]} list={service.items.map((item) => item[currentLang])}
              icon={service.id === 1 ? faSackDollar : service.id === 2 ? faMagnifyingGlass : faMessage} />)}
          </section>
        </article>
      </section>

      <Marquee />
    </>
  );
}

export default Home;
