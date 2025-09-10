import React from 'react';
import './launchSteps.styles.css';
import { FaCheck } from 'react-icons/fa';

const LaunchSteps = () => {
  const steps = [
    { id: 1, label: 'جمع قائمة الانتظار', status: 'active' },
    { id: 2, label: 'بناء المنصة', status: 'pending' },
    { id: 3, label: 'الإطلاق التجريبي', status: 'pending' },
  ];

  return (
    <section className='launch-section'>
      <div className='launch-steps'>
        <h2 className='launch-title'>أين وصلنا في رحلة الإطلاق؟</h2>
        <p className='launch-subtitle'>
          تابع تقدمنا نحو إطلاق أفضل منصة خدمات في الجزائر
        </p>

        <p className='steps-count'>1 من 3</p>

        {/* Progress bar */}
        <div className='progress-header'>
          <span>مرحلة الإطلاق</span>
          <div className='progress-bar'>
            <div className='progress-fill'></div>
          </div>
        </div>

        {/* Steps */}
        <div className='steps-container'>
          {steps.map((step) => (
            <div key={step.id} className={`step-card ${step.status}`}>
              <div className='step-circle'>
                {step.status === 'done' ? <FaCheck /> : step.id}
              </div>
              <span>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaunchSteps;
