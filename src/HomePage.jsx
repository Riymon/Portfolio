import './App.css'
import Header from './header.jsx'
import Background from './Background.jsx'
import Content from './Content.jsx'
import AboutMe from './About-me.jsx'
import Footer from './Footer.jsx'

function HomePage() {

  return (

    <>
      <div className='scroll-smooth' >
        <Header/>
        <Background/>
        <AboutMe/>
        <Content title="My Services" tag="services"/>
        <Footer/>
      </div>
    </>
  )
}

export default HomePage