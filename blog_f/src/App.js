import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './header/header';
import AboutMe from './pages/aboutme/AboutMe';
import Blog from './pages/blog/blog';
import Resume from './pages/resume/resume';
import BlogDetails from './pages/blogDetails/blogDetails';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/about" element={<AboutMe />}/>
            <Route path="/blog/:id" element={<BlogDetails/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/resume" element={<Resume />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
