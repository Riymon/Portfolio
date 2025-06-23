import './App.css'
import Header from './header'
import Background from './Background'
import Content from './Content'
import AboutMe from './About-me'
import Footer from './footer'

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
      <script src='/scripts/script.js'></script>
    </>
  )
}

export default HomePage