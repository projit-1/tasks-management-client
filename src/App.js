import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import ToDo from './Pages/Shared/Home/ToDo';
import Completed from './Pages/Shared/Home/Completed';
import Banner from './Pages/Shared/Banner';
import Calender from './Pages/Shared/Home/Calender';

function App() {
  return (
    <div >
      <Navbar />
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<ToDo />}></Route>
        <Route path='/completed' element={<Completed />}></Route>
        <Route path='/calender' element={<Calender />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
