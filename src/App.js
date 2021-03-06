import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import ToDo from './Pages/Shared/Home/ToDo';
import Completed from './Pages/Shared/Home/Completed';
import Banner from './Pages/Shared/Banner';
import Calender from './Pages/Shared/Home/Calender';
import NotFound from './Pages/Shared/NotFound';
import PlaceTask from './Pages/Shared/Home/PlaceTask';
import AboutOus from './Pages/Shared/AboutOus';
import Contact from './Pages/Shared/Contact';
import Job from './Pages/Shared/Job';
import Privacy from './Pages/Shared/Privacy';


function App() {
  return (
    <div >
      <Navbar />
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<ToDo />}></Route>
        <Route path='/completed' element={<Completed />}></Route>
        <Route path='/calender' element={<Calender />}></Route>
        <Route path='/placetask' element={<PlaceTask />}></Route>
        <Route path='/aboutus' element={<AboutOus />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/privacy' element={<Privacy />}></Route>
        <Route path='/job' element={<Job />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
