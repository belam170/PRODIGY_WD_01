import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Dishes from './Dishes'
import About from './About'
import Review from './Review'
function App() {
  return (
    <div >
      <Navbar />
      <div className='main'>
      <section>
        <Home />
      </section>
      <section>
     <Dishes />
      </section> 
      <section>
        <About />
      </section>
      <section>
        <Review />
      </section>
      </div>
    </div>
  )
}

export default App