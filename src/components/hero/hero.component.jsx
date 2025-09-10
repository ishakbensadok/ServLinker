import './hero.styles.css';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const services = [
  'Plombier',
  'Électricien',
  'Professeur',
  'Femme de ménage',
  'Photographe',
  'Mécanicien',
  'Coiffeur',
  'Jardinier',
  'Peintre',
];

function FloatingBubbles() {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // random starting positions
    setPositions(
      services.map(() => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
        delay: `${Math.random() * 5}s`,
      }))
    );
  }, []);

  return (
    <div className='bubble-container'>
      {services.map((service, i) => (
        <span
          key={i}
          className='bubble'
          style={{
            top: positions[i]?.top,
            left: positions[i]?.left,
            animationDelay: positions[i]?.delay,
            backgroundColor: i % 2 === 0 ? '#1f4263' : '#25a77d', // teal/blue
          }}
        >
          {service}
        </span>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className='hero-section'>
      {/* <FloatingBubbles /> */}

      <div className='hero'>
        <h1 className='hero__title'>
          <span className='title-highlight'>ثورة</span> في عالم الخدمات <br />
          في الجزائر
        </h1>
        <h2 className='hero__subtitle'>
          أول منصة جزائرية تربط مقدمي الخدمات بالزبائن بطريقة احترافية وآمنة.
          <div className='hero__subtitle-highlight'>
            ودّع الفوضى... أهلاً بالمستقبل! ✨
          </div>
        </h2>
        <Link
          to='waitlist'
          smooth={true}
          duration={600}
          offset={-50} // adjust if you have a fixed navbar
          className='hero__button'
        >
          انضم الآن
        </Link>
      </div>
    </section>
  );
}

export default Hero;
