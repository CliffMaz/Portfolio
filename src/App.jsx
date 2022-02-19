import './App.css';
import { useContext } from 'react';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import Footer from './components/footer/Footer';
import Skill from './components/skill/Skill';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import Scroll from './components/scroll/Scroll';
import { ThemeContext } from './context';
function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{backgroundColor:darkMode ? "#171c28": "white", 
                                  color:darkMode && "white",
                                }}>
      <Toggle/>
      <Intro className="section"/>
      <About className="section"/>
      <Skill className="section"/>
      <ProjectList className="section"/>
      <Contact className='section'/>
      <Scroll />
      <Footer className="section"/>
    </div>
  );
}

export default App;
