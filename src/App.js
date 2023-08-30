import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Forms from '../src/pages/Forms';
import Services from '../src/pages/Services';
import AboutUs from '../src/pages/AboutUs';
import ContactUs from '../src/pages/ContactUs';
import Login from '../src/pages/Login';
import SignUp from '../src/pages/SignUp';
import WhySenchola from '../src/pages/WhySenchola';
import Footer from './Components/Footer';


function App() {
  return (
<div>
  
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="aboutus" element={<AboutUs/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/whysenchola" element={<WhySenchola/>}/>
  <Route path="/forms" element={<Forms/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<SignUp/>}/>
 </Routes>

 <Footer />

 </div>
      );
}

export default App;
