import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import Tv from "../../pages/Tv";
import BookMarks from "../../pages/BookMarks";
import ShowVideoDetails from "../ShowVideoDetails";
import ShowTVDetails from "../ShowTVDetails";
import NotFoundPage from "../NotFoundPage";
import Signup from "../../pages/signup";
import Login from "../../pages/login";
import { AuthProvider } from "../AuthContext"



function Rotue() {
  return (
    <AuthProvider>
    <Router basename="/Entertainment-web-app">
      <Navbar />    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/movies" element={<Movies />}/>
        <Route path="/tvSeries" element={<Tv />}/>
        <Route path="/bookMarks" element={<BookMarks />}/>
        <Route path="/movies/:id" element={<ShowVideoDetails />}/>
        <Route path="/series/:id" element={<ShowTVDetails />}/>
      </Routes>
    </Router>
</AuthProvider>
  );
}

export default Rotue;
