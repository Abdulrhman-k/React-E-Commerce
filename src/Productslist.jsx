import React , {useEffect, useState} from 'react'
import axios from 'axios';
import { Card } from "react-bootstrap";

const Productslist = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      axios.get("data.json")
      .then((res) => {
        setProducts(res.data.products);
      })
    } ,[])

  return (
    <div className='div-5'> 
    {products.map((product) => 
       <Card key={product.id} className='card' style={{ width: '18rem' }}>
    <Card.Img className='cardimg' variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <button >Add To Cart</button>
      </Card.Body>
  </Card>
          )}
  </div>
  )
}

export default Productslist