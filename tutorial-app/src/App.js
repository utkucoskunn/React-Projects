import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from "./components/Nav";
import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Awardpage from "./pages/award";
import Blogpage from "./pages/blog";
import Contactpage from "./pages/contact";
import Creativepage from "./pages/creative";
import Educationpage from "./pages/education";
import Portfoliopage from "./pages/portfolio";
import Workpage from "./pages/work";





function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="about" element={<Aboutpage/>}/>
                <Route path="creative" element={<Creativepage/>}/>
                <Route path="educations" element={<Educationpage/>}/>
                <Route path="works" element={<Workpage/>}/>
                <Route path="portfolio" element={<Portfoliopage/>}/>
                <Route path="award" element={<Awardpage/>}/>
                <Route path="blog" element={<Blogpage/>}/>
                <Route path="contact" element={<Contactpage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
