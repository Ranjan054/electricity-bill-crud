import { Routes, Route } from "react-router-dom"
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import HomePage from './component/HomePage/HomePage'
import './App.css';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="bill/:id" element={<About />} /> */}
        {/* <Route path="addBill" element={<Contact />} /> */}
        {/* <Route path="/:id/edit" element={<Contact />} /> */}
      </Routes>
    <Footer />

    </>
  );
}

export default App;
