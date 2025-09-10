// WaitlistForm.jsx
import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import './waitlistForm.styles.css';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    roles: [],
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'الاسم مطلوب';
    else if (formData.name.trim().length < 3)
      newErrors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل';

    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = 'البريد الإلكتروني غير صالح';

    if (!formData.city) newErrors.city = 'الرجاء اختيار المدينة';

    if (formData.roles.length === 0)
      newErrors.roles = 'الرجاء اختيار دور واحد على الأقل';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRoleChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      roles: checked
        ? [...prev.roles, value]
        : prev.roles.filter((r) => r !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSubmitted(false);
    setAlreadySubmitted(false);

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      const email = formData.email.trim().toLowerCase();

      // 1️⃣ Check if email already exists
      const { data: existing, error: checkError } = await supabase
        .from('waitlist')
        .select('id')
        .eq('email', email)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        console.error(checkError);
        setFormError('⚠️ حدث خطأ أثناء التحقق. حاول مرة أخرى.');
        setLoading(false);
        return;
      }

      if (existing) {
        // ℹ️ Already registered
        setAlreadySubmitted(true);
        setLoading(false);
        return;
      }

      // 2️⃣ Insert new user
      const payload = {
        name: formData.name.trim(),
        email,
        city: formData.city,
        roles: formData.roles,
        user_agent: navigator.userAgent,
        source: 'waitlist_hero',
      };

      const { error } = await supabase.from('waitlist').insert(payload);

      if (error) {
        console.error(error);
        setFormError('❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى.');
        return;
      }

      // 3️⃣ Reset form on success
      setFormData({ name: '', email: '', city: '', roles: [] });
      setErrors({});
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setFormError('⚠️ تعذر الاتصال بالخادم. حاول لاحقاً.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='waitlist-container' id='waitlist'>
      <div className='waitlist-card'>
        <h2 className='waitlist-title'>اشترك في قائمة الانتظار</h2>
        <p className='waitlist-subtitle'>
          كن من الأوائل واحصل على أفضلية في الظهور
        </p>

        <form className='waitlist-form' onSubmit={handleSubmit} noValidate>
          {/* Full name */}
          <div className='form-group'>
            <label>الاسم الكامل *</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              maxLength={50}
              placeholder='أدخل اسمك الكامل'
            />
            {/* {errors.name && <span className='error'>{errors.name}</span>} */}
            <span className='error'>{errors.name}</span>
          </div>

          {/* Email */}
          <div className='form-group'>
            <label>البريد الإلكتروني *</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='example@email.com'
              maxLength={100}
            />
            {/* {errors.email && <span className='error'>{errors.email}</span>} */}
            <span className='error'>{errors.email}</span>
          </div>

          {/* City */}
          <div className='form-group'>
            <label>المدينة *</label>
            <select name='city' value={formData.city} onChange={handleChange}>
              <option value='' disabled hidden>
                اختر مدينتك
              </option>
              <option value='أدرار'>أدرار</option>
              <option value='الشلف'>الشلف</option>
              <option value='الأغواط'>الأغواط</option>
              <option value='أم البواقي'>أم البواقي</option>
              <option value='باتنة'>باتنة</option>
              <option value='بجاية'>بجاية</option>
              <option value='بسكرة'>بسكرة</option>
              <option value='بشار'>بشار</option>
              <option value='البليدة'>البليدة</option>
              <option value='البويرة'>البويرة</option>
              <option value='تمنراست'>تمنراست</option>
              <option value='تبسة'>تبسة</option>
              <option value='تلمسان'>تلمسان</option>
              <option value='تيارت'>تيارت</option>
              <option value='تيزي وزو'>تيزي وزو</option>
              <option value='الجزائر'>الجزائر</option>
              <option value='الجلفة'>الجلفة</option>
              <option value='جيجل'>جيجل</option>
              <option value='سطيف'>سطيف</option>
              <option value='سعيدة'>سعيدة</option>
              <option value='سكيكدة'>سكيكدة</option>
              <option value='سيدي بلعباس'>سيدي بلعباس</option>
              <option value='عنابة'>عنابة</option>
              <option value='قالمة'>قالمة</option>
              <option value='قسنطينة'>قسنطينة</option>
              <option value='المدية'>المدية</option>
              <option value='مستغانم'>مستغانم</option>
              <option value='المسيلة'>المسيلة</option>
              <option value='معسكر'>معسكر</option>
              <option value='ورقلة'>ورقلة</option>
              <option value='وهران'>وهران</option>
              <option value='البيض'>البيض</option>
              <option value='إليزي'>إليزي</option>
              <option value='برج بوعريريج'>برج بوعريريج</option>
              <option value='بومرداس'>بومرداس</option>
              <option value='الطارف'>الطارف</option>
              <option value='تندوف'>تندوف</option>
              <option value='تيسمسيلت'>تيسمسيلت</option>
              <option value='الوادي'>الوادي</option>
              <option value='خنشلة'>خنشلة</option>
              <option value='سوق أهراس'>سوق أهراس</option>
              <option value='تيبازة'>تيبازة</option>
              <option value='ميلة'>ميلة</option>
              <option value='عين الدفلى'>عين الدفلى</option>
              <option value='النعامة'>النعامة</option>
              <option value='عين تموشنت'>عين تموشنت</option>
              <option value='غرداية'>غرداية</option>
              <option value='غليزان'>غليزان</option>
              <option value='تيميمون'>تيميمون</option>
              <option value='برج باجي مختار'>برج باجي مختار</option>
              <option value='أولاد جلال'>أولاد جلال</option>
              <option value='بني عباس'>بني عباس</option>
              <option value='عين صالح'>عين صالح</option>
              <option value='عين قزام'>عين قزام</option>
              <option value='تقرت'>تقرت</option>
              <option value='جانت'>جانت</option>
              <option value='المغير'>المغير</option>
              <option value='المنيعة'>المنيعة</option>
            </select>
            {/* {errors.city && <span className='error'>{errors.city}</span>} */}
            <span className='error'>{errors.city}</span>
          </div>

          {/* Roles */}
          <div className='form-group'>
            <label>دورك في المنصة *</label>
            <div className='checkbox-group'>
              <label>
                <input
                  type='checkbox'
                  value='client'
                  checked={formData.roles.includes('client')}
                  onChange={handleRoleChange}
                />
                أحتاج خدمة
              </label>
              <label>
                <input
                  type='checkbox'
                  value='provider'
                  checked={formData.roles.includes('provider')}
                  onChange={handleRoleChange}
                />
                أقدم خدمة
              </label>
            </div>
            {/* {errors.roles && <span className='error'>{errors.roles}</span>} */}
            <span className='error'>{errors.roles}</span>
          </div>

          {formError ? (
            <p className='error' style={{ marginTop: '0.5rem' }}>
              {formError}
            </p>
          ) : (
            <button type='submit' className='submit-btn' disabled={loading}>
              {loading ? 'جاري الإرسال...' : '🚀 انضم لقائمة الانتظار'}
            </button>
          )}
        </form>

        {submitted && (
          <p className='success-message'>
            ✅ شكراً لانضمامك! لقد تم تسجيلك بنجاح.
          </p>
        )}
        {alreadySubmitted && (
          <p className='info-message'>
            ℹ️ لقد قمت بالتسجيل بالفعل مسبقاً، شكراً لاهتمامك 🙌
          </p>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;
