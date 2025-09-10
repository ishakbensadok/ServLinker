import LogoSvg from '/src/assets/FullLogo.svg';
import { FaCheckSquare } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import './whyServLinker.styles.css';

export default function WhyServLinker() {
  return (
    <section className='why-servlinker'>
      <h2 className='section-title'>لماذا ServLinker ؟</h2>

      {/* ********************************************************************* */}

      <div className='problems-container'>
        <div className='tag tag--1'>المشاكل الحالية للزبائن </div>
        <ul className='problems problems--1'>
          <li className='problem problem--1'>
            <FaTimes style={{ color: '#d32f2f' }} />
            صعوبة العثور على مزود خدمة موثوق.
          </li>
          <li className='problem problem--2'>
            <FaTimes style={{ color: '#d32f2f' }} />
            البحث المتعب في الجروبات والصفحات.
          </li>
          <li className='problem problem--3'>
            <FaTimes style={{ color: '#d32f2f' }} />
            لا يوجد تقييمات أو مراجعات واضحة.
          </li>
          <li className='problem problem--4'>
            <FaTimes style={{ color: '#d32f2f' }} />
            تضيع الكثير من الوقت في البحث والاتصال.
          </li>
        </ul>
      </div>
      <div className='solutions-container'>
        <ul className='solutions'>
          <img src={LogoSvg} alt='Logo' className='why-servlinker__logo' />

          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} /> مزودون خدمة موثوقون.
          </li>
          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} /> مزودون موثوقون مع
            تقييمات حقيقية.
          </li>
          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} /> تجربة سريعة وآمنة
            للعثور على الخدمة.
          </li>
          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} /> توفير الوقت والجهد.
          </li>
        </ul>
      </div>
      <div className='problems-container'>
        <div className='tag'>المشاكل الحالية لمقدمي الخدمات </div>
        <ul className='problems problems--1 problems--1-1'>
          <li className='problem problem--1'>
            <FaTimes style={{ color: '#d32f2f' }} />
            صعوبة إيجاد زبائن جدد.
          </li>
          <li className='problem problem--2'>
            <FaTimes style={{ color: '#d32f2f' }} />
            الاعتماد فقط على مواقع التواصل الاجتماعي أو إعلانات مكلفة.
          </li>
          <li className='problem problem--3'>
            <FaTimes style={{ color: '#d32f2f' }} />
            لا توجد طريقة لإثبات المصداقية أو التميز.
          </li>
          <li className='problem problem--4'>
            <FaTimes style={{ color: '#d32f2f' }} />
            زبائن غير جديين أو غير ملتزمين.
          </li>
        </ul>
      </div>
      <div className='solutions-container'>
        <ul className='solutions'>
          <img src={LogoSvg} alt='Logo' className='why-servlinker__logo' />

          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} />
            زبائن يبحثون عن خدماتك.
          </li>
          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} />
            تعزز الثقة.
          </li>
          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} />
            فرص عمل أكثر بدون إعلانات مدفوعة.
          </li>
          <li className='solution'>
            <FaCheckSquare style={{ color: '#25a77d' }} />
            بناء سمعة قوية على المنصة.
          </li>
        </ul>
      </div>

      {/* ********************************************************************* */}
    </section>
  );
}
