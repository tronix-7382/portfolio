import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Project from "../pages/Project";
import Home from "../pages/Project";
import Projects from "../pages/Projects";


const routes = () => [
    {path:'/', element: <About/>},
    {path:'/home', element: <About/>},
    {path:'/projects', element: <Projects/>},
    {path:'/project/:id', element: <Project/>},
    {path:'/gallery', element: <Gallery/>},
    {path:'/contact', element: <Contact/>},
    {path:'/blog', element: <Blog/>},
    {path:'*', element: <p>404 Not Found</p>}
]

export default routes