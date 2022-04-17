import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';

const Products = () => {

const [data, setData] = useState([]);
const [filter, setFilter]  = useState(data);
const [loading, setLoading] = useState(false)
let componentMounted = true;

useEffect(() => {

const getData = async () => {

setLoading(true)

const response = await fetch('https://fakestoreapi.com/products')

setData(await response.clone().json())
setFilter(await response.json())
setLoading(false)

}

getData();


},[ ])


const filterData = (cat) => {

let updatedList = data.filter((x) => x.category === cat)
setFilter(updatedList)

}



const Loading = () => {


return(
<>

<div className='col-md-3'>
<Skeleton height={350} />
</div>


<div className='col-md-3'>
<Skeleton height={350} />
</div>


<div className='col-md-3'>
<Skeleton height={350} />
</div>


<div className='col-md-3'>
<Skeleton height={350} />
</div>


</>

) 

}


console.log(filter)
const ShowProducts = () => {

return (

<>

<div className='buttons d-flex align-items-center justify-content-center mb-5 pb-5s'>

<button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
<button className='btn btn-outline-dark me-2' onClick={() => filterData("men's clothing")}>Men's Clothing</button>
<button className='btn btn-outline-dark me-2' onClick={() => filterData("women's clothing")}>Women's Clothing</button>
<button className='btn btn-outline-dark me-2' onClick={() => filterData("jewelery")}>Jewelery</button>
<button className='btn btn-outline-dark me-2' onClick={() => filterData("electronics")}>Electronics</button>

</div>

{filter.map((Products) => {


return (

    <>

<div className='col-md-3 mb-4'>

<div className="card h-100 text-center p-4" key={Products.id} >
  <img src={Products.image} height='250px' className="card-img-top" alt={Products.title}/>
  <div className="card-body">
    <h5 className="card-title mb-0">{Products.title.substring(0,12)}...</h5>
    <p className="card-text lead fw-bold">${Products.price}</p>
    <a href="#" className="btn btn-outline-dark">Buy Now</a>
  </div>
</div>


</div>

</>




)


})}

</>
)



}


  return (
    <div>

       <div className='container my-5 py-5'>

        <div className='row'>


     <div className='col-12 mb-5'>


      <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>

      <hr />

     </div>


     <div className='row justify-content-center'>

     {loading ? <Loading /> : <ShowProducts/>}

     </div>



        </div>

        </div>
   
        
      
    </div>
  )
}

export default Products
