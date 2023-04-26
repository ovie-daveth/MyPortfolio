import Nav from './components/nav/Nav'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import Courses from './components/courses/Courses'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
function App() {
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
      <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
