import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Admin from "./pages/Admin";
import CarrerForm from "./components/CareerForm"

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/CareerForm" element={<CarrerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
