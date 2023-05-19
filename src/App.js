import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import BookMarks from "./pages/BookMarks";
import { BookMarkedContext } from "./context/BookMarkedContext";
import ShowDetails from "./pages/ShowDetails";
import ShowVideoDetails from "./components/ShowVideoDetails";
import ShowTVDetails from "./components/ShowTVDetails";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <Router basename="/Entertainment-web-app">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<NotFoundPage />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/tvSeries" element={<Tv />}/>
        <Route path="/bookMarks" element={<BookMarks />}/>
        <Route path="/movies/:id" element={<ShowVideoDetails />}/>
        <Route path="/series/:id" element={<ShowTVDetails />}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
