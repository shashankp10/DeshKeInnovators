import './App.css';
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import Slider from './Components/Slider'
import MainBody from './Components/MainBody';
import MainBody2 from './Components/MainBody2';
import Project from './Components/Project';
import Faq from './Components/faq'

function App() {
  return (
    <>
      <Navbar/>
      <MainBody2/>
      <Slider/>
      <MainBody/>
      <Project/>
      <Faq/>
      <Footer/>
    </>
  );
}

export default App;
