
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home/Home';
import Sign_in from './pages/SIgnin/Sign_in';
import User from './pages/User/user'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import logo from'./assets/img/argentBankLogo.png'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});
function App() {
 
  return (
    <Provider store={store}>
  <BrowserRouter>
    <Header logo={logo} logolink='/'/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Sign_in />} />
      <Route path="/profile" element={<User />} />
    </Routes>
    <Footer footertxt='Copyright 2020 Argent Bank'/>
  </BrowserRouter>
</Provider>
  );
}

export default App;
