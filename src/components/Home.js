import React from 'react'
import Products from './Products'


const Home = () => {
  return (
    <div>
      
   <div className='hero'>
      <div class="card bg-dark text-black border-0 ">
  <img src="https://feelmyworth.com/wp-content/uploads/2021/06/outlet-shopping-696x392.jpg" class="card-img " alt="home image" height='550px' />
  <div class="card-img-overlay d-flex flex-column justify-content-center">

      <div className='container'>

      <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>

      <p className='card-text lead fs-2'>CHECKOUT ALL THE TRENDS</p>

    
      </div>
    
  </div>
</div>
</div>

<Products/>



    </div>
  )
}

export default Home
