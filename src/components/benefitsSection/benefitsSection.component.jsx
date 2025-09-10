import './benefitsSection.styles.css';
import { FaCheckSquare } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';

import { GrTrophy } from 'react-icons/gr';

const BenefitsSection = () => {
  return (
    <section className='benefits-section'>
      <h2 className='benefits-title'>
        مزايا الانضمام للأوائل <GrTrophy />
      </h2>
      <p className='benefits-subtitle'>
        كن من 1000 الأوائل واحصل على تجربة مميزة ومزايا إضافية
      </p>

      <div className='benefits-cards'>
        {/* For Clients */}
        <div className='benefit-card'>
          {/* <FaUsers className='benefit-icon' />
          <h3 className='benefit-heading'>للزبائن الأوائل</h3> */}
          <ul className='benefit-list'>
            <li>
              <FaCheckSquare /> شارة "عضو مؤسس" مدى الحياة.
            </li>
            <li>
              <FaCheckSquare /> دعم مخصص وتدريب مجاني.
            </li>
            <li>
              <FaCheckSquare /> إشعارات حول الخدمات الجديدة.
            </li>
            <li>
              <FaCheckSquare /> أول من يستفيد من المنصة.
            </li>
            <li>
              <FaCheckSquare /> فرصة ذهبية لبناء قاعدة زبائن قوية.
            </li>
          </ul>
          <p className='benefit-cta'>
            لا تفوت الفرصة - المقاعد محدودة! <AiFillFire />
          </p>
        </div>

        {/* For Providers */}
        {/* <div className='benefit-card'>
          <FaHandshake className='benefit-icon' />
          <h3 className='benefit-heading'>لمقدمي الخدمات الأوائل</h3>
          <ul className='benefit-list'>
            <li>
              <FaCheckSquare /> الظهور ضمن نتائج البحث الأولى
            </li>
            <li>
              <FaCheckSquare /> فرصة للحصول على أول العملاء بسرعة
            </li>
            <li>
              <FaCheckSquare /> الحصول على تقييمات مبكرة لبناء الثقة
            </li>
            <li>
              <FaCheckSquare /> دعم أساسي للإعداد الأولي للحساب
            </li>
          </ul>
        </div> */}
      </div>

      {/* Limited Offer */}
      {/* <div className='limited-offer'>
        <h3 className='offer-title'>
          العرض لفترة محدودة <span className='offer-icon'>⏰</span>
        </h3>
        <p className='offer-subtitle'>
          تبقى <span className='highlight'>574 مقعد</span> فقط للاستفادة من
          المزايا المبكرة
        </p>
        <div className='progress-bar'>
          <div className='progress-fill' style={{ width: '42.6%' }}></div>
        </div>
        <p className='progress-text'>42.6% من المقاعد محجوزة</p>
      </div> */}
    </section>
  );
};

export default BenefitsSection;
