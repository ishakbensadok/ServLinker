import './servicesPreview.styles.css';

import React, { useState } from 'react';
import {
  FaWrench,
  FaBolt,
  FaBroom,
  FaCut,
  FaBaby,
  FaUtensils,
  FaCar,
  FaHome,
  FaBriefcase,
  FaHeart,
  FaUsers,
  FaBook,
  FaCamera,
  FaHammer,
  FaPaintRoller,
  FaUserNurse,
  FaUserTie,
  FaChalkboardTeacher,
  FaDog,
  FaTruck,
  FaTv,
  FaBalanceScale,
  FaDumbbell,
} from 'react-icons/fa';

const ServicesPreview = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    { name: 'سباكة', icon: <FaWrench /> },
    { name: 'كهرباء', icon: <FaBolt /> },
    { name: 'تنظيف', icon: <FaBroom /> },
    { name: 'دروس خصوصية', icon: <FaBook /> },
    { name: 'إصلاح سيارات', icon: <FaCar /> },
    { name: 'سائق خاص', icon: <FaCar /> },
    { name: 'مدرس لغة', icon: <FaChalkboardTeacher /> },
    { name: 'تجميل وتصفيف شعر', icon: <FaCut /> },
    { name: 'رعاية أطفال', icon: <FaBaby /> },
    { name: 'طبخ', icon: <FaUtensils /> },
    { name: 'إصلاح منازل', icon: <FaHome /> },
    { name: 'أعمال تجارية', icon: <FaBriefcase /> },
    { name: 'الرعاية الصحية', icon: <FaHeart /> },
    { name: 'فعاليات وحفلات', icon: <FaUsers /> },
    { name: 'تصوير فوتوغرافي', icon: <FaCamera /> },
    { name: 'نجارة', icon: <FaHammer /> },
    { name: 'دهان', icon: <FaPaintRoller /> },
    { name: 'تمريض', icon: <FaUserNurse /> },
    { name: 'رعاية المسنين', icon: <FaUserTie /> },
    { name: 'رعاية الحيوانات', icon: <FaDog /> },
    { name: 'خياطة', icon: <FaCut /> },
    { name: 'خدمات التوصيل', icon: <FaTruck /> },
    { name: 'تركيب أجهزة (تلفاز، واي فاي...)', icon: <FaTv /> },
    { name: 'استشارات قانونية', icon: <FaBalanceScale /> },
    { name: 'تدريب لياقة', icon: <FaDumbbell /> },
  ];

  const visibleServices = showAll ? services : services.slice(0, 10);

  return (
    <section className='services-preview'>
      <h2 className='services-title'> لمحة عن خدماتنا المحتملة</h2>
      <div className='services-grid'>
        {visibleServices.map((service, index) => (
          <div key={index} className='service-card'>
            <div className='service-icon'>{service.icon}</div>
            <h3 className='service-name'>{service.name}</h3>
          </div>
        ))}
      </div>
      <button onClick={() => setShowAll(!showAll)} className='services-btn'>
        {showAll ? 'إخفاء' : 'إِظهار المزيد'}
      </button>
    </section>
  );
};

export default ServicesPreview;
