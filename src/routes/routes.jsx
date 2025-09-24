import About from "../pages/About";
import Certifications from "../pages/Certifications";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Project from "../pages/Project";
import Projects from "../pages/Projects";


// HomePage is About Component
const routes = () => [
    {path:'/', element: <About/>},
    {path:'/home', element: <About/>},
    {path:'/projects', element: <Projects/>},
    {path:'/project/:id', element: <Project/>},
    {path:'/gallery', element: <Gallery/>},
    {path:'/contact', element: <Contact/>},
    {path:'/certifications', element: <Certifications/>},
    {path:'*', element: <p>404 Not Found</p>}
]

export default routes 