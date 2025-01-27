import logo from './logo.svg';
import './App.css';
import HeaderP from './components/header';
import Footerp from './components/footer';
import Content from './components/content';
import AboutMe from './components/aboutme';
import Skills from './components/skills';
import Projects from './components/projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp() {
  return (
   <button>i1m a button</button>
  );
}

export default function App(){
  return(
    <div>
    <HeaderP/>
    <Content/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footerp/>
    </div>
  );
}
