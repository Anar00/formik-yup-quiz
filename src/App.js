import Navbar from "./components/Navbar";
import "./App.css"; 
import Add from './components/Add';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
