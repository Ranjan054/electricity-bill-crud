import { Routes, Route } from "react-router-dom"
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import HomePage from './component/HomePage/HomePage'
import BillDetail from "./component/BillDetail/BillDetail";

import './App.css';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="bill/:id" element={<BillDetail />} />
      </Routes>
    <Footer />

    </>
  );
}

export default App;
