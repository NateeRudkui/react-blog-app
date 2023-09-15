import "./App.css";
import { Blogs } from "./components/Blogs";
import { About } from "./components/about";
import { Home } from "./components/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Notfound } from "./components/Notfound";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/home" element={<Navigate to={"/"} />} />
          <Route path="/blog/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
