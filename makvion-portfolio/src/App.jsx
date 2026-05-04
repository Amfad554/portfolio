import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import Hero from './components/sections/Hero'
import FeaturedProject from './components/sections/FeaturedProject'
import CaseStudy from './components/sections/CaseStudy'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-[#F5F7F6]">
        <Hero />
        <FeaturedProject />
        <CaseStudy />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App