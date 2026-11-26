
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JoinForm from "./Pages/JoinForm";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinForm />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
