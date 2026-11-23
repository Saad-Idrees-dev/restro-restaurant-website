
import Navbar from './components/Navbar'
import Herosection from './sections/Herosection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
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
    </>
  )
}

export default App
