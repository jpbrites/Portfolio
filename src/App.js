
import './App.css';
import { About, Contact, Footer, Projects, Skills } from './pages';
import Principal from './pages/principal/Principal';
import man from './assets/yo4.png'


function App() {
  return (
    <>
    <div id='home'>
      <Principal/>
      
    </div>

    <div id='about'>
      <About/>
    </div>

    <div id='skills'>
      <Skills/>
    </div>

    <div id='projects'>
      <Projects/>
    </div>

    <div id='contact'>
      <Contact/>
    </div>

    <div id='footer'>
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
