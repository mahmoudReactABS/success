import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslationContext } from '../translationContext';
import MessageForm from './../Components/messageForm';

import logo_bg from '../../public/logo-bg.jpeg';

import s1 from '../../public/s1.png';
import s2 from '../../public/s2.png';
import s3 from '../../public/s3.png';
import s4 from '../../public/s4.png';
import s5 from '../../public/s5.png';
import s6 from '../../public/s6.png';
import s7 from '../../public/s7.png';
import s9 from '../../public/s9.png';
import s10 from '../../public/s10.png';
import s11 from '../../public/s11.png';
import Error from '../Components/Error';

const data = {
 taxes: [
  {
   id: 1,
   img: s1,
   type: {
    en: "Corporate Income Tax",
    ar: "ضريبة الدخل على الشركات"
   },
   description: {
    en: "Corporate tax is imposed on the annual taxable net profit. The taxable net profit is determined based on the net profit of audited financial reports after making certain adjustments as per the income tax law. Taxpayers are required to file annual corporate income tax returns that should be signed by a local external tax advisor. Tax returns under Egyptian tax law are a self-assessment. Accordingly, any understatement of tax liabilities in the tax return may result in the imposition of penalties.",
    ar: "تُفرض ضريبة الدخل على الشركات على صافي الربح الخاضع للضريبة سنويًا. يتم تحديد صافي الربح الخاضع للضريبة بناءً على صافي الربح في التقارير المالية المدققة بعد إجراء بعض التعديلات وفقًا لقانون الضرائب. يُطلب من دافعي الضرائب تقديم إقرارات ضريبة الدخل السنوية التي يجب أن يتم توقيعها من قبل مستشار ضريبي خارجي محلي. تعتبر الإقرارات الضريبية في القانون الضريبي المصري ذاتية التقييم. وفقًا لذلك، قد يؤدي أي تقليل من الالتزامات الضريبية في الإقرار الضريبي إلى فرض عقوبات."
   }
  },
  {
   id: 2,
   img: s2,
   type: {
    en: "Salary Tax",
    ar: "ضريبة المرتبات"
   },
   description: {
    en: "Under Egyptian Tax Law, it is the employer's responsibility to withhold the salary tax due on each employee and remit the tax to the Tax Authority on a monthly basis within fifteen days following the month of payment. According to Article No. (31) of Law No. 206 of 2020, business owners, including companies and projects established under the free zone system, are required to submit a quarterly online form in January, April, July, and October of each year.",
    ar: "وفقًا للقانون الضريبي المصري، يقع على عاتق صاحب العمل مسؤولية خصم ضريبة المرتبات المستحقة على كل موظف وإرسال الضريبة إلى مصلحة الضرائب على أساس شهري في غضون خمسة عشر يومًا بعد شهر الدفع. وفقًا للمادة رقم (31) من القانون رقم 206 لسنة 2020، يُطلب من أصحاب الأعمال، بما في ذلك الشركات والمشاريع المنشأة في إطار نظام المنطقة الحرة، تقديم نموذج إلكتروني ربع سنوي في يناير وأبريل ويوليو وأكتوبر من كل عام."
   }
  },
  {
   id: 3,
   img: s5,
   type: {
    en: "Withholding Tax on Domestic Transactions",
    ar: "ضريبة الخصم على المعاملات المحلية"
   },
   description: {
    en: "The withholding tax applies to payments in excess of EGP 300. The rates as at 2018 are 3% on services; 1% on supplies and contracting activities; and 5% on commissions and brokerage fees. Entities are required to file a quarterly withholding tax form within one month following the end of each quarter and remit the tax along with the tax form.",
    ar: "تنطبق ضريبة الخصم على المدفوعات التي تزيد عن 300 جنيه مصري. اعتبارًا من عام 2018، تبلغ نسبة الضريبة 3 بالمائة على الخدمات؛ و1 بالمائة على الإمدادات وأنشطة المقاولات؛ و5 بالمائة على العمولات ورسوم السمسرة. يُطلب من الكيانات تقديم نموذج ضريبة الخصم ربع السنوي في غضون شهر واحد بعد نهاية كل ربع سنة وسداد الضريبة مع النموذج الضريبي."
   }
  },
  {
   id: 4,
   img: s6,
   type: {
    en: "Withholding Tax on Cross-Border Transactions",
    ar: "ضريبة الخصم على المعاملات عبر الحدود"
   },
   description: {
    en: "As at 2009, a withholding tax of 20% is imposed on payments made to overseas parties by resident sole proprietorships, partnerships, and companies for royalties, interest, and service fees. Tax treaty provisions may apply, and the treaty country resident recipient may apply for a tax refund for the difference between the local rate and the treaty rate.",
    ar: "اعتبارًا من عام 2009، يتم فرض ضريبة خصم بنسبة 20 بالمائة على المدفوعات التي يتم دفعها لأطراف خارجية من قبل الشركات الفردية والشركات والمشاريع المقيمة مقابل حقوق الملكية والفائدة ورسوم الخدمات. قد تنطبق أحكام المعاهدات الضريبية، وقد يتقدم المستفيد المقيم في دولة المعاهدة بطلب استرداد الضريبة للفرق بين السعر المحلي وسعر المعاهدة."
   }
  },
  {
   id: 5,
   img: s4,
   type: {
    en: "Stamp Tax",
    ar: "ضريبة الدمغة"
   },
   description: {
    en: "Stamp tax law classifies the stamp taxes into physical and proportional taxes. Physical stamp taxes are imposed on a variety of documents such as contracts. Proportional stamp taxes are imposed on the values of certain transactions, e.g., advertisements at a tax rate of 20%.",
    ar: "يقسم قانون ضريبة الدمغة الضرائب إلى ضرائب مادية ونسبية. يتم فرض الضرائب المادية على مجموعة متنوعة من المستندات مثل العقود. يتم فرض الضرائب النسبية على قيم معاملات معينة، على سبيل المثال، الإعلانات بمعدل ضريبة 20 بالمائة."
   }
  },
  {
   id: 6,
   img: s7,
   type: {
    en: "VAT TAX",
    ar: "ضريبة القيمة المضافة"
   },
   description: {
    en: "The government of Egypt released the VAT Law on 7 September 2016, enacted as of the following day. VAT is levied on all commodities and services, including local or imported commodities and services listed in the table attached to the tax law in all its circulated stages.",
    ar: "أصدرت الحكومة المصرية قانون ضريبة القيمة المضافة في 7 سبتمبر 2016، وتم تفعيله اعتبارًا من اليوم التالي. يتم فرض ضريبة القيمة المضافة على جميع السلع والخدمات، بما في ذلك السلع والخدمات المحلية أو المستوردة المدرجة في الجدول المرفق بقانون الضرائب في جميع مراحله المتداولة."
   }
  },
  {
   id: 7,
   img: s3,
   type: {
    en: "Property Tax",
    ar: "ضريبة العقارات"
   },
   description: {
    en: "Property tax is imposed on all buildings in Egypt. The tax is borne by the owner, either a person or a corporate body. As at 2008, the tax rate is 10% on the annual rental value of the taxable buildings after the deduction of 32% (30% for residential units) allowed for maintenance. The tax is due from 1 July 2013 and needs to be collected in two equal instalments.",
    ar: "تُفرض ضريبة العقارات على جميع المباني في مصر. يتحمل المالك الضريبة، سواء كان شخصًا أو هيئة اعتبارية. اعتبارًا من عام 2008، تبلغ نسبة الضريبة 10 بالمائة على قيمة الإيجار السنوي للمباني الخاضعة للضريبة بعد خصم 32 بالمائة (30 بالمائة للوحدات السكنية) المسموح بها للصيانة. تستحق الضريبة اعتبارًا من 1 يوليو 2013 ويجب تحصيلها على دفعتين متساويتين."
   }
  },
  {
   id: 8,
   img: s10,
   type: {
    en: "Transfer Pricing",
    ar: "تسعير التحويل"
   },
   description: {
    en: "As at 2009, a withholding tax of 20% is imposed on payments made to overseas parties by resident sole proprietorships, partnerships, and companies for royalties, interest, and service fees. However, the tax treaty provisions may apply.",
    ar: "وفقًا للمادة 12 من قانون الضرائب المعدل، القانون رقم 102 لسنة 2020، تم تحديد بعض المتطلبات المتعلقة بالامتثال لتسعير التحويل (مثل الوثائق الرئيسية، والوثائق المحلية، وقرارات الشركات متعددة الجنسيات)."
   }
  },
  {
   id: 9,
   img: s9,
   type: {
    en: "Social Insurance",
    ar: "التأمينات الاجتماعية"
   },
   description: {
    en: "According to the social insurance law, there are two kinds of social insurance, as follows: 1. 1.STANDARD SOCIAL INSURANCE Insurance Legal entities working in Egypt should register for social insurance with the competent social insurance office. Social insurance on the employee salary is imposed on both the employee and the employer. As at 2020 the employer’s share of social insurance is 11percent of the total salary, in contrast, the employee’s share of social insurance is 18.75% of the total salary. The employer is obliged to remit these monthly contributions to the competent social insurance office before the 15th of the following month to avoid the delay interest of approximately 1% per month. 1. 2.CONTRACTING SOCIAL INSURANCE Contractors working in Egypt should notify the social insurance authority with its contracts and pay the related social insurance contributions due on these contracts. The contributions due will be determined according to the total value of the contract and the nature of work; there are rates specified for most types of work.",
    ar: "وفقًا لقانون التأمينات الاجتماعية ، يوجد نوعان من التأمينات الاجتماعية ، و هما على النحو التالي:: 1.تأمين اجتماعي نمطي: ل للتأمين يجب على الجهات القانونية العاملة في مصر التسجيل للحصول على التأمينات الاجتماعية لدى مكتب التأمينات الاجتماعية المختص. يُفرض التأمين الاجتماعي على راتب الموظف على كل من الموظف وصاحب العمل. اعتبارًا من عام 2020 ، بلغت حصة صاحب العمل في التأمين الاجتماعي 11 في المائة من إجمالي الراتب ، في المقابل ، تبلغ حصة الموظف في التأمين الاجتماعي 18.75 في المائة من إجمالي الراتب. يلتزم صاحب العمل بتحويل هذه الاشتراكات الشهرية إلى مكتب التأمين الاجتماعي المختص قبل الخامس عشر من الشهر التالي لتجنب فائدة التأخير التي تبلغ حوالي 1 في المائة شهريًا. 2. تأمينات المقاولات يجب على المقاولين العاملين في مصر إخطار هيئة التأمين الاجتماعي بعقودها ودفع اشتراكات التأمين الاجتماعي ذات الصلة المستحقة على هذه العقود. سيتم تحديد المساهمات المستحقة وفقًا للقيمة الإجمالية للعقد وطبيعة العمل ؛ هناك معدلات محددة لمعظم أنواع العمل.."
   }
  }
 ],
 advisoryServices: [
  {
   id: 1,
   img: s11,
   type: {
    en: "Odoo ERP System",
    ar: "برنامج تخطيط الموارد أودوي"
   },
   description: {
    en: "Odoo is a suite of business apps that cover all your company needs: CRM, e-commerce, accounting, inventory, point of sale, project management, etc. Odoo’s unique value proposition is to be at the same time very easy to use and fully integrated.",
    ar: "هو عبارة عن مجموعة من تطبيقات الأعمال التي تغطي جميع احتياجات شركتك مثل إدارة العلاقات مع العملاء، والتجارة الإلكترونية، والمحاسبة، والمخزون، ونقاط البيع، وإدارة المشاريع، وما إلى ذلك. تتمثل قيمة أودوي الفريدة في كونها سهلة الاستخدام للغاية ومتكاملة تمامًا."
   }
  }
 ]
};

function SingleService() {
 const location = useLocation();
 const currentPath = location.pathname;
 const { i18n } = useTranslationContext();
 const title = currentPath.split('/service/')[1];
 const [service, setService] = useState(null);

 let decodedTitle;
 try {
  decodedTitle = decodeURIComponent(title);
 } catch (error) {
  console.error('Error decoding title:', error);
  return (
   <Error />
  );
 }

 useEffect(() => {
  const foundService = data.taxes.find(service => service.type[i18n.language] === decodedTitle) || data.advisoryServices.find(service => service.type[i18n.language] === decodedTitle);

  if (foundService) {
   setService(foundService);
  } else {
   console.error('Service not found:', decodedTitle);
  }
 }, [decodedTitle, i18n.language]);

 if (!service) {
  return (
   <Error />
  );
 }

 return (
  <section className='p-0 m-0'>
   <img src={service.img} className="w-100" style={{ height: "600px" }} alt={service.type[i18n.language]} />
   <article className="text-center container py-4" 
   style={{ backgroundImage: `url(${logo_bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
    <h1 className="mb-4" style={{ color: 'var(--primary)' }}>{service.type[i18n.language]}</h1>
    <p className="text-start fs-5">{service.description[i18n.language]}</p>
    <MessageForm />
   </article>
  </section>
 );
}

export default SingleService;