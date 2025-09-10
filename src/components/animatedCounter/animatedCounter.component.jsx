// AnimatedCounter.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import './animatedCounter.styles.css';

function AnimatedCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const fetchCount = async () => {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });

      if (error) {
        console.error('Error fetching count:', error);
      } else {
        setCount(count);
      }
    };

    fetchCount();

    // Optional: keep it live updated every 30s
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='animated-counter'>
      <div className='animated-ping'></div>

      <div>
        <span className='counter-number'>{count !== null ? count : '...'}</span>
        <span className='counter-text'> انضموا بالفعل! </span>
      </div>
    </div>
  );
}

export default AnimatedCounter;
