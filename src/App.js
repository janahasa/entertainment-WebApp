import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import BookMarks from "./pages/BookMarks";
import ShowVideoDetails from "./components/ShowVideoDetails";
import ShowTVDetails from "./components/ShowTVDetails";
import NotFoundPage from "./components/NotFoundPage";
import Signup from "./components/signup";
import Login from "./components/login";
import { AuthProvider } from "./components/AuthContext"; 
import "./App.css";


function App() {
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

export default App;
