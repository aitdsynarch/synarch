
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JoinForm from "./Pages/JoinForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinForm />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
