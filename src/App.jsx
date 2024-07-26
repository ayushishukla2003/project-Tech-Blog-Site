import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Article from "./pages/Article.jsx";
import ArticlesList from "./pages/ArticlesList.jsx";

import NotFound from "./pages/NotFound.jsx";

//components
import Navbar from "./components/Navbar.jsx";



export default function App() {
  return(

    <Router>
      <Navbar />
      <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
          <Route path='/' element={<Home />} />    

          


          <Route path='/about' element={<About />} />
          
          <Route path='/articles-list' element={<ArticlesList />} />
         


          <Route path='/article/:name' element={<Article />} />  
         
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    
    
  )
}

