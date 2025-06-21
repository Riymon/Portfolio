import './App.css'
import Header from './header'
import Background from './Background'
import Content from './Content'
import AboutMe from './About-me'
import Footer from './footer'

function App() {


  return (
    <>
      <div className='scroll-smooth' >
        <Header/>
        <Background/>
        <AboutMe/>
        <Content/>
        <Footer/>
      </div>
        
    </>
  )
}

export default App
