import LogoSvg from '/src/assets/FullLogo.svg';

import './footer.styles.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__copyright'>
        <img
          src={LogoSvg}
          alt='Logo'
          style={{ width: '80px', height: '80px' }}
          className='footer__logo'
        />

        <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#444' }}>
          2025&copy;
        </span>
      </div>
    </div>
  );
}

export default Footer;
