
import Navbar from './components/Navbar'
import Herosection from './sections/Herosection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import Timing from './sections/Timing'
import TestimonialSection from './sections/TestimonialSection'
import Faq from './sections/Faq'
const App = () => {
  return (
    <>
      <Navbar/>
      <Herosection/>
      <About/>
      <Stats/>
      <Dishes/>
      <Features/>
      <BookingProcess/>
      <Timing/>
      <TestimonialSection/>
      <Faq/>
    </>
  )
}

export default App
