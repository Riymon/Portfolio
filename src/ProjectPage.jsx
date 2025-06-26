import './App.css'
import Header from './header.jsx'
import Background from './Background.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import Contact from './Contact.jsx'
function ProjectPage(){

    return(
        <>
        <Header/>
        <Background/>
        <Content title ="Projects" tag="projects" />
        <Contact/>
        <Footer/>
        </>
    )

}
export default ProjectPage