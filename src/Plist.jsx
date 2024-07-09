import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PContext } from "./PContext";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";

const Plist = () => {
  const {selectedProduct } = useContext(PContext)
  const { products, setSelectedProduct , AddToCart} = useContext(PContext);

  const handleProductsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart =(product) =>{
    AddToCart(product)
  }
  return (
    <>
        <div className='div-5'> 
    {products.map((product) => 
       <Card key={product.id} className='card' >
<Card.Img className='cardimg' variant="top" src={product.image} alt={product.title}/>
<Card.Body>
      <Card.Title>
      <Link className="Title" to={`/Products/${product.id}`} onClick={() => handleProductsClick(product)}>
              {product.title}
            </Link></Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Button onClick={() => handleAddToCart(product)} variant="primary">add item</Button>
      </Card.Body>
  </Card>
          )}
  </div>
 </>
  )
}

export default Plist