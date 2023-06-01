
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Home from './pages/Home';
import Sign_in from'./pages/Sign_in';
import User from './pages/user'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Sign_in />} />
      <Route path="/user" element={<User />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
