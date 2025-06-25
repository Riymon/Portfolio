import './App.css'
import Header from './header.jsx'
import Background from './Background.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
function ProjectPage(){

    return(
        <>
        <Header/>
        <Background/>
        <Content title ="Projects" id="projects" />
        <Footer/>
        </>
    )

}
export default ProjectPage