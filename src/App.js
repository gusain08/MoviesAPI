import "./App.css";
import Movie from "./Components/Movie";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
    
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
    </Router>
    
    </>
  )
  }
export default App;
