import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'
import Navbar from './components/navbar';
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe';
import MySkills from './components/skills';
import EducationAndExperience from './components/educationAndexperience';
import Certifications from './components/certifications';
import Getintouch from './components/getintouch';
import Copyright from './components/copyright';

function App() {
  return (
    <div className='personal-portfolio'>
      <div className='intro-page'>
        <Navbar/>
        <HomePage/>
      </div>
      <div className='other-sections p-0 pt-5'>
        <AboutMe/>
        <MySkills/>
        <EducationAndExperience/>
        <Certifications/>
        <Getintouch/>
        <Copyright/>
      </div>
    </div>
  );
}

export default App;
