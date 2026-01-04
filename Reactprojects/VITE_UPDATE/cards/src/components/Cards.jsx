import { useState } from 'react'
const Cards = () => {
       
     const data = "{name:'datas',productprice:20}"
     const obj = {name:"datas",productprice:20}
     console.log('json string',data);
     console.log('Object',obj);


     //const [product,setProduct] = useState([{id:1,productname:"Cup",prodctcat:"ceramic",productprice:200},{id:2,productname:"Bottle",prodctcat:"plasitc",productprice:100}])
     
     const [getProduct,setGetProduct] = useState([]);
      

     const showproduct = async()=>{
        //alert('working')

         const productdatas = await fetch("https://dummyjson.com/products")

          console.log(productdatas);
          
          const datas = await productdatas.json()
          
          console.log(datas);

          setGetProduct(datas.products)
          

     }


  return (
    <div className="bg-gray-600 text-white p-5 flex gap-10 flex-wrap">
     
     {getProduct.map((e)=>(
 <div className="bg-white rounded p-2  w-50 text-black" key={e.id}>
        <img src={e.images} alt="" />
        <h1>Product Name:{e.title}</h1>
      <p>Product Cat: {e.category}</p>
      <p>Product price: {e.price}Rs</p>
      <button className="bg-black p-1 rounded text-white mt-4">Buy Now</button>
      </div>


     ))}

    <div>
        <button onClick={showproduct} className="bg-black p-1 rounded text-white mt-4">Show Product</button>
    </div>
     
    </div>
  )
}

export default Cards