
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import Landing from './components/Landing'
import About from './components/About'
import ImageSlider from './components/ImageSlider'
import Features from './components/Features'
import Packages from './components/Packages'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <ParallaxProvider><Landing/></ParallaxProvider>
      <About/>
      <ImageSlider/>
      <Features/>
      <Packages/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
