import { useState } from 'react';
import './ClientWaitlistForm.styles.css';
export default function ClientWaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    service: '',
    frustration: '',
    payExtra: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client Form Submitted:', formData);
    alert('Thanks for joining the waitlist!');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='الاسم الكامل'
        value={formData.name}
        onChange={handleChange}
        required
        className='input'
      />

      <input
        type='email'
        name='email'
        placeholder='البريد الإلكتروني'
        value={formData.email}
        onChange={handleChange}
        required
        className='input'
      />

      {/* <input
        type='text'
        name='city'
        placeholder='City'
        value={formData.city}
        onChange={handleChange}
        required
        className='input'
      /> */}

      <select className='input'>
        <option value=''>اختر ولايتك</option>
        <option value='Adrar'>Adrar</option>
        <option value='Chlef'>Chlef</option>
        <option value='Laghouat'>Laghouat</option>
        <option value='Oum El Bouaghi'>Oum El Bouaghi</option>
        <option value='Batna'>Batna</option>
        <option value='Béjaïa'>Béjaïa</option>
        <option value='Biskra'>Biskra</option>
        <option value='Béchar'>Béchar</option>
        <option value='Blida'>Blida</option>
        <option value='Bouira'>Bouira</option>
        <option value='Tamanrasset'>Tamanrasset</option>
        <option value='Tébessa'>Tébessa</option>
        <option value='Tlemcen'>Tlemcen</option>
        <option value='Tiaret'>Tiaret</option>
        <option value='Tizi Ouzou'>Tizi Ouzou</option>
        <option value='Algiers'>Algiers</option>
        <option value='Djelfa'>Djelfa</option>
        <option value='Jijel'>Jijel</option>
        <option value='Sétif'>Sétif</option>
        <option value='Saïda'>Saïda</option>
        <option value='Skikda'>Skikda</option>
        <option value='Sidi Bel Abbès'>Sidi Bel Abbès</option>
        <option value='Annaba'>Annaba</option>
        <option value='Guelma'>Guelma</option>
        <option value='Constantine'>Constantine</option>
        <option value='Médéa'>Médéa</option>
        <option value='Mostaganem'>Mostaganem</option>
        <option value='MSila'>M’Sila</option>
        <option value='Mascara'>Mascara</option>
        <option value='Ouargla'>Ouargla</option>
        <option value='Oran'>Oran</option>
        <option value='El Bayadh'>El Bayadh</option>
        <option value='Illizi'>Illizi</option>
        <option value='Bordj Bou Arréridj'>Bordj Bou Arréridj</option>
        <option value='Boumerdès'>Boumerdès</option>
        <option value='El Tarf'>El Tarf</option>
        <option value='Tindouf'>Tindouf</option>
        <option value='Tissemsilt'>Tissemsilt</option>
        <option value='El Oued'>El Oued</option>
        <option value='Khenchela'>Khenchela</option>
        <option value='Souk Ahras'>Souk Ahras</option>
        <option value='Tipaza'>Tipaza</option>
        <option value='Mila'>Mila</option>
        <option value='Aïn Defla'>Aïn Defla</option>
        <option value='Naâma'>Naâma</option>
        <option value='Aïn Témouchent'>Aïn Témouchent</option>
        <option value='Ghardaïa'>Ghardaïa</option>
        <option value='Relizane'>Relizane</option>
      </select>
      {/*  */}
      <select
        name='service'
        value={formData.service}
        onChange={handleChange}
        required
        className='input'
      >
        <option value=''>ما هي الخدمة التي تحتاجها؟</option>
        <option value='Barber'>Barber</option>
        <option value='Plumber'>Plumber</option>
        <option value='Electrician'>Electrician</option>
        <option value='Mechanic'>Mechanic</option>
        <option value='Tutor'>Tutor</option>
        <option value='Photographer'>Photographer</option>
        <option value='Carpenter'>Carpenter</option>
        <option value='Painter'>Painter</option>
        <option value='House Cleaner'>House Cleaner</option>
        <option value='Babysitter'>Babysitter</option>
        <option value='Catering'>Catering</option>
        <option value='Gardener'>Gardener</option>
        <option value='Mover'>Mover</option>
        <option value='IT Support'>IT Support</option>
        <option value='Hair Stylist'>Hair Stylist</option>
        <option value='Makeup Artist'>Makeup Artist</option>
        <option value='Massage Therapist'>Massage Therapist</option>
        <option value='Nurse'>Nurse</option>
        <option value='Elderly Care'>Elderly Care</option>
        <option value='Event Planner'>Event Planner</option>
        <option value='Driving Instructor'>Driving Instructor</option>
        <option value='Handyman'>Handyman</option>
        <option value='Laundry / Dry Cleaning'>Laundry / Dry Cleaning</option>
        <option value='Private Driver'>Private Driver</option>
        <option value='Language Teacher'>Language Teacher</option>
        <option value='Fitness Trainer'>Fitness Trainer</option>
        <option value='Veterinary / Pet Care'>Veterinary / Pet Care</option>
        <option value='Tailor'>Tailor</option>
        <option value='Delivery Services'>Delivery Services</option>
        <option value='Tech Setup (TV, WiFi, etc.)'>
          Tech Setup (TV, WiFi, etc.)
        </option>
        <option value='Legal Advice (Paralegal)'>
          Legal Advice (Paralegal)
        </option>
        <option value='Home Renovation'>Home Renovation</option>
      </select>

      <textarea
        name='frustration'
        placeholder='ما هو أكبر تحدٍ تواجهه عند البحث عن خدمات؟'
        value={formData.frustration}
        onChange={handleChange}
        rows={5}
        maxLength={500}
      />

      <label>هل تدفع قليلاً أكثر مقابل خدمة مضمونة من مزود موثوق؟</label>
      <select
        className='input'
        name='payExtra'
        value={formData.payExtra}
        onChange={handleChange}
      >
        <option value=''>إختر</option>
        <option>نعم</option>
        <option>لا</option>
        <option>ربما</option>
      </select>

      <button className='btn btn--primary' type='submit'>
        احجز مكانك الآن
      </button>
    </form>
  );
}
