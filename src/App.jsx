import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destination from "./pages/Destination.jsx";
import TourGuide from "./pages/TourGuide.jsx";
import FAQ from "./pages/FAQ.jsx";
import SignUp from "./pages/SignUp.jsx";
import Blogs from "./pages/Blogs";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/home" element={<Home />} />
          <Route path="/guide" element={<TourGuide />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
