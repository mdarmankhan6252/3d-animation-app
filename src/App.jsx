import { useEffect } from 'react';
import gradient from './assets/gradient.png'
import Header from './components/Header'
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {


  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  }, [])

  return (
    <main>
      {/* gradient image */}
      <img src={gradient} alt="" className='absolute top-0 right-0 opacity-60 -z-10' />

      {/* blur effect */}
      <div className='h-0 w-160 absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-30 -z-10'>

      </div>

      <Header />
      <Hero />

    </main>
  )
}

export default App
