import React, { useEffect } from 'react';
import Routes from './Route/Router';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-back',
    });

    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;

