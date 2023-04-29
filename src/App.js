import Nav from './components/nav/Nav'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import Courses from './components/courses/Courses'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Register from './pages/register/Register';
import Payment from './pages/payment/Payment';
import { useState } from 'react';

function App() {
  const location = useLocation()
  const [name, setName] = useState('')
  return (
    <>
    <ToastContainer 
    position="top-right"
    autoClose={3000}
    closeOnClick
    draggable
    pauseOnHover
    theme="dark"
    />
      {
        location.pathname === '/' ? <Nav /> : null
      }
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/register' element={<Register name={name} setName={setName} />} />
      <Route path='/payment' element={<Payment name={name} />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
