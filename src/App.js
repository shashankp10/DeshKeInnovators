import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Slider from './Components/Slider';
import MainBody from './Components/MainBody';
import MainBody2 from './Components/MainBody2';
import Login from './Components/Login';
import AdminLogin from './Components/AdminLogin';
import Faq from './Components/faq';
import Project from './Components/Project';
import SubmitForm from './Components/SubmitForm';
import Mentor from './Components/Mentor';

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/Loginpage" element={<Login />} />
        <Route path="/Admin" element={<AdminLogin />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Project" element={<SubmitForm/>} />
        <Route path="/Mentor" element={<Mentor/>} />
        <Route
          path="/"
          element={
            <>
              <MainBody2 />
              <Slider />
              <MainBody />
              <Project/>
              <Faq/>
              <Footer/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;