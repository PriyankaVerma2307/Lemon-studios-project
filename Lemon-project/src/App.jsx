import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TopSelling from './components/TopSelling/TopSelling'
import Reviews from './components/Reviews/Reviews'
import BestOf from './components/BestOf/BestOf'
import Footer from './components/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <div className="hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <TopSelling />
      <Reviews />
      <BestOf />
      <Footer />
    </div>
  )
}
