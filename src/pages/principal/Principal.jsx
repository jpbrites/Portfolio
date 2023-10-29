import React, { useState, useEffect } from 'react'
import './principal.css'
import man from '../../assets/yo2.png'
import { Navbar } from '../../components'





function Principal() {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const typingSpeed = 55; // Velocidade da digitação em milissegundos

  const phrase = "Hi, I'm João Paulo Brites Leopoldo";
  const cursor = "|";

  useEffect(() => {
    if (!isTypingComplete) {
      const type = () => {
        setText((prevText) => phrase.slice(0, prevText.length + 1));

        if (text === phrase) {
          setIsTypingComplete(true);
        }
      };

      const timer = setTimeout(type, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isTypingComplete]);

  const handleNavLinkClick = (target) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 600; // Ponto em que você deseja aplicar o estilo

    if (scrollY >= scrollThreshold) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  // Adicionar um ouvinte de rolagem quando o componente montar
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Limpar o ouvinte de rolagem quando o componente desmontar
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
    <div className='container'>
      <Navbar/>
      <div className='flex-row'>
        <div className='header-content'>
          <div className="content">
          <h1>
                {text.split('J')[0]}
                <br />
                <span className="highlight-text">{text.split('m')[1]}</span>
                {isTypingComplete ? null : <span className="typing-cursor">{cursor}</span>}
              </h1>
          </div>
          <div className='animation'>
            <p className='line-about'>I'm a dedicated computer engineering student specializing in full stack development.<br/> With a keen eye for detail and a passion for coding, I strive to deliver exceptional digital solutions.</p>
            <div className='buttons-home'>
              <button onClick={() => handleNavLinkClick('about')} className='button-about'>About me</button>
              <button onClick={() => handleNavLinkClick('contact')} className='button-contact' >Let's talk</button>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-top-1690236305">
            <img loading='lazy' src={man} alt="My Photo" />
        </div>
      </div>
      <div style={{zIndex: hasScrolled ? '997' : '996', fill: hasScrolled ? 'white' : 'rgb(255, 255, 255, 0.3)'}} class="custom-shape-divider-bottom-1690471646">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  
    
    </>
  )
}

export default Principal