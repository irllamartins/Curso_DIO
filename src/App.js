import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";
import { Register } from "./pages/Register";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter  >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
