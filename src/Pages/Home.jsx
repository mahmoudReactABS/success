import React, { useEffect } from 'react';
import Hero from '../Components/Hero';
import { faMagnifyingGlass, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import Option from '../Components/Option';
import Service from '../Components/Service';
import vctor from '../../public/sackDollar.png';
import AuditService from '../../public/Audit.png';
import AdvisoryService from '../../public/Advisory.png';
import TaxService from '../../public/Tax.png';
import right from '../../public/rightrev.jpeg';
import logo_bg from '../../public/logo-bg.jpeg';
import { useTranslationContext } from '../translationContext';
import Marquee from '../Components/marquee';
import Aboutsp from '../Components/aboutsp';
import servicesData from '../data/servicesTitles.json';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const reasons = [
  {
    "id": "1",
    "dir": "l",
    "title_en": "Outstanding Industry Experience",
    "title_ar": "خبرة صناعية متميزة",
    "icon": "M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zm-2.434 8.442a2 2 0 0 1-1.43 2.478l-.462.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.422q.388.307.835.518l.325-.344a2 2 0 0 1 2.91.002l.337.358q.44-.203.822-.498l-.156-.556a2 2 0 0 1 1.43-2.479l.46-.117a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.52l.126-.421a4.3 4.3 0 0 0-.835-.519l-.325.344a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.822.497zM14.5 15.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2",
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
    "icon": "M12.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m5 .5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-13 2a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 9.25C6 8.56 6.56 8 7.25 8h5.5c.69 0 1.25.56 1.25 1.25V14a4 4 0 0 1-8 0zm-1 0c0-.463.14-.892.379-1.25H3.25C2.56 8 2 8.56 2 9.25V13a3 3 0 0 0 3.404 2.973A5 5 0 0 1 5 14zM15 14c0 .7-.144 1.368-.404 1.973Q14.794 16 15 16a3 3 0 0 0 3-3V9.25C18 8.56 17.44 8 16.75 8h-2.129c.24.358.379.787.379 1.25z",
    "details": {
      "en": "Our enthusiasm to work with YOUR ESTEEMED COMPANY is derived from our commitment to the power and our team’s understanding of issues that YOUR ESTEEMED COMPANY will face in the future.",
      "ar": "ينبع حماسنا للعمل معكم من خلال التزامنا بمدي خبرة وفهم وقوة فريق العمل للقضايا التي ستواجهها شركتكم في المستقبل."
    }
  },
  {
    "id": "3",
    "dir": "r",
    "title_en": "Open and effective communication",
    "title_ar": "التواصل المفتوح والفعال",
    "icon": "M10 4.5a6.5 6.5 0 0 0-4.601 11.091a.75.75 0 1 1-1.062 1.06a8 8 0 1 1 13.632-6.355a3 3 0 0 0-1.756-1.21A6.5 6.5 0 0 0 10 4.5m4.637 4.626A5.002 5.002 0 0 0 5 11c0 1.377.558 2.626 1.458 3.53a.75.75 0 0 0 1.063-1.06a3.5 3.5 0 1 1 5.811-3.544a3 3 0 0 1 1.305-.8M8 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9.5 1a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5",
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
    "icon": "M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h7a1.5 1.5 0 0 0 1.5-1.5V15a.5.5 0 0 0-.5-.5c-.413 0-.677-.102-.856-.236q-.273-.204-.424-.623c-.214-.588-.22-1.367-.22-2.141a.5.5 0 0 0-.147-.354l-.286-.287l-1.213-1.213c-.467-.467-.604-.78-.63-.955c-.02-.14.022-.234.122-.33c.214-.205.367-.344.54-.386c.103-.026.338-.044.76.378l3 3a.5.5 0 0 0 .708-.707L13 9.793V6.707l2.56 2.56a1.5 1.5 0 0 1 .44 1.061V17.5a.5.5 0 0 0 1 0v-7.172a2.5 2.5 0 0 0-.732-1.767L13 5.293V3.5A1.5 1.5 0 0 0 11.5 2zM12 5.5v3.293l-1.146-1.147c-.578-.578-1.154-.777-1.705-.643a1.5 1.5 0 0 0-.313.115A3 3 0 0 0 5 10a3 3 0 0 0 5.007 2.23c.017.578.075 1.21.273 1.753c.148.407.384.796.764 1.08l.006.006A1.5 1.5 0 0 0 10 16.5v.5H6v-.5A1.5 1.5 0 0 0 4.5 15H4V5h.5A1.5 1.5 0 0 0 6 3.5V3h4v.5A1.5 1.5 0 0 0 11.5 5h.5zm0 11v.009a.5.5 0 0 1-.5.491H11v-.5a.5.5 0 0 1 .5-.5h.5zM6 10a2 2 0 0 1 1.874-1.996c-.124.23-.187.51-.139.833c.071.482.378.983.911 1.516l.907.907A2 2 0 0 1 6 10M5 3v.5a.5.5 0 0 1-.5.5H4v-.5a.5.5 0 0 1 .5-.5zM4 16h.5a.5.5 0 0 1 .5.5v.5h-.5a.5.5 0 0 1-.5-.5zm8-12h-.5a.5.5 0 0 1-.5-.5V3h.5a.5.5 0 0 1 .5.5z",
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
    "icon": "m8.46 1.897l.99.39a1.5 1.5 0 0 0 1.099 0l.99-.39a2.42 2.42 0 0 1 3.102 1.285l.424.975a1.5 1.5 0 0 0 .777.777l.975.424a2.42 2.42 0 0 1 1.285 3.103l-.39.99a1.5 1.5 0 0 0 0 1.098l.39.99a2.42 2.42 0 0 1-1.285 3.102l-.975.424a1.5 1.5 0 0 0-.777.777l-.424.975a2.42 2.42 0 0 1-3.103 1.285l-.99-.39a1.5 1.5 0 0 0-1.098 0l-.99.39a2.42 2.42 0 0 1-3.102-1.285l-.424-.975a1.5 1.5 0 0 0-.777-.777l-.975-.424a2.42 2.42 0 0 1-1.285-3.103l.39-.99a1.5 1.5 0 0 0 0-1.098l-.39-.99a2.42 2.42 0 0 1 1.285-3.102l.975-.424a1.5 1.5 0 0 0 .777-.777l.424-.975a2.42 2.42 0 0 1 3.103-1.285m4.166 5.77l-3.648 4.104l-1.625-1.625a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .727-.021l4-4.5a.5.5 0 0 0-.747-.665",
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
    "icon": "M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18q.617 0 1.21-.057A5.48 5.48 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5zm6.626 2.92a2 2 0 0 0 1.43-2.478l-.155-.557q.382-.293.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.344q.448.212.835.518l-.126.423a2 2 0 0 0 1.456 2.519l.349.082a4.7 4.7 0 0 1 .01 1.017l-.46.117a2 2 0 0 0-1.431 2.479l.156.556q-.383.294-.822.498l-.338-.358a2 2 0 0 0-2.909-.002l-.325.344a4.3 4.3 0 0 1-.835-.518l.127-.422a2 2 0 0 0-1.456-2.52l-.35-.082a4.7 4.7 0 0 1-.01-1.016zm4.865.58a1 1 0 1 0-2 0a1 1 0 0 0 2 0",
    "details": {
      "en": "The primary value we add comes from our partnership approach to provide a full scope, full relationship professional services. ",
      "ar": "القيمة الأساسية التي نضيفها تأتي من نهج الشراكة الخاص بنا لتوفير نطاق كامل من الخدمات المهنية ذات العلاقة الكاملة."
    }
  }
];

function Home() {
  const { t, i18n } = useTranslationContext();
  const currentLang = i18n.language;

  return (
    <div className='overflow-hidden'>
      <Hero />

      {/* Reasons Section */}
      <section data-aos="fade-down" data-aos-once="true" className="w-100 text-center my-3 d-flex flex-column align-items-center">
        <h1 className='fw-bold'>{t('WhyChooseUs')}</h1>
        <div className="border border-bottom-3 border-success" style={{ marginRight: '220px', width: '5%' }}></div>
        <p className="">{t('choose')}</p>
      </section>

      <section className="py-5 w-100" style={{ backgroundColor: 'var(--primary)', position: 'relative' }}>
        <div className="container">
          <div className="position-absolute top-0 start-0 h-50 z-0"
            style={{ width: '85%', backgroundImage: `url(${right})`, backgroundColor: 'var(--primary)', backgroundSize: 'cover', backgroundPosition: 'center', height: '75%' }} />
          <div className="row container mx-auto px-5 w-100 z-3 position-relative">
            {reasons.map((reason) => (
              <Option
                key={reason.id}
                direction={reason.dir}
                icon={reason.icon}
                title={currentLang === 'en' ? reason.title_en : reason.title_ar}
                details={reason.details[currentLang]}
                data-aos-once="true" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="py-5">
        <Aboutsp />
      </div>

      {/* Services Section */}
      <section data-aos="fade-down" data-aos-once="true" className="d-flex flex-column text-center align-items-center pb-5"
        style={{ backgroundImage: `url(${logo_bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', }}>
        <h1 className='fw-bold'>{t('Our_Service')}</h1>
        <div className="border border-bottom-3 mb-2 border-success" style={{ marginRight: '150px', width: '5%' }}></div>
        <p>{t('guide')}</p>
        <article className="my-5 container px-5">
          <section data-aos="fade-down" data-aos-once="true" data-aos-delay="500" className='row'>
            {servicesData.services.map((service) => (
              <Service
                key={service.id}
                height={'900px'}
                img={service.id === 1 ? TaxService : service.id === 2 ? AuditService : AdvisoryService}
                title={service.title[currentLang]}
                list={service.items.map((item) => item[currentLang])}
                icon={service.id === 1 ? vctor : service.id === 2 ? faMagnifyingGlass : faMessage}
                data-aos-once="true" 
              />
            ))}
          </section>
        </article>
      </section>

      <Marquee />
    </div>
  );
}

export default Home;
