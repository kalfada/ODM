import Header from './components/Header';
import Footer from './components/Footer'
import style from './style/App.module.css'
import Body from './components/Body.js'
import UpdateEmp from './components/UpdateEmp';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/edit/:id" element={<UpdateEmp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
