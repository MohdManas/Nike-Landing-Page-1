import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from "./Components/HeroSection"
import PopularProducts from "./Components/PopularProducts"
import SuperQuality from "./Components/SuperQuality"
import Services from "./Components/Services"
import Special from "./Components/Special"
import CustomerReviews from './Components/CustomerReviews'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'
import Copyrights from './Components/Copyrights'



const App = () => {

  return (
    <div className='App'>
      <NavBar />
      <HeroSection />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <Special />
      <CustomerReviews /> 
      <Subscribe />
      <Footer />
      <Copyrights />
    </div>
  )
}

export default App