
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home/Home';
import Sign_in from './pages/SIgnin/Sign_in';
import User from './pages/User/user';
import NotFound from './pages/NotFound/NotFound';
import Headercontainer from './containers/headercontainer';
import Footer from './components/footer/footer';

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
    <Headercontainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Sign_in />} />
      <Route path="/profile" element={<User />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer footertxt='Copyright 2020 Argent Bank'/>
  </BrowserRouter>
</Provider>
  );
}

export default App;
