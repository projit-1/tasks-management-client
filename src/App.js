import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import ToDo from './Pages/Shared/Home/ToDo';
import Completed from './Pages/Shared/Home/Completed';
import Banner from './Pages/Shared/Banner';

function App() {
  return (
    <div >
      <Navbar />
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<ToDo />}></Route>
        <Route path='/completed' element={<Completed />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
