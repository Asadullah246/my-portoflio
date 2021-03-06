
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import ProjectDetail from './Pages/ProjectDetail';



function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects/:id' element={<ProjectDetail></ProjectDetail>}></Route>
         
      </Routes>

     
    </div>
  );
}

export default App;
