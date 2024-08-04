import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
    <Route path = "/" element = {<Home/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = "/signin" element = {<Signin/>}/>
    </Routes>
    </>
  );
}

export default App;
