import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Dishes from './Dishes'
function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Home />
      </section>
      <section>
     <Dishes />
      </section> 
    </div>
  )
}

export default App