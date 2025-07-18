import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Allstudents from "./pages/Allstudents";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Payfess from "./pages/payfess";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Allstudents />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/pay" element={<Payfess />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

