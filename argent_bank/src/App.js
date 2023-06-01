
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home/Home';
import Sign_in from './pages/SIgnin/Sign_in';
import User from './pages/User/user'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import logo from'./assets/img/argentBankLogo.png'

function App() {
  return (
    <BrowserRouter>
    <Header logo={logo} logolink='/'/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Sign_in />} />
      <Route path="/user" element={<User />} />
      </Routes>
      <Footer footertxt='Copyright 2020 Argent Bank'/>
      </BrowserRouter>
  );
}

export default App;
