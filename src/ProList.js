import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PContext } from "./PContext";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";


const ProList = () => {
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
  );
};

export default ProList;
// import React ,{useContext} from "react";
// import { Link } from "react-router-dom";
// import {PContext} from "./PContext";

// const ProductList = () =>{
//     const {products , setSelectedProduct} = useContext(PContext);
//     const HandelProductsClick = (product) => {
//         setSelectedProduct(product);
//     }



//     return(
//         <>
//         <h1> Product List</h1>
//         <div>
//             {products.map((product) =>(
//                 <div key={product.id} className="product">
//                     <Link to={`/product/${product.id}`} onClick={() => HandelProductsClick(product)}>
//                     {product.title}
//                     <br/>
//                     More Details
//                     </Link>
//                     <div className="product-info">
//                         <h3>{product.title}</h3>
//                         <p>{product.description}</p>
//                         <p>{product.price}</p>
//                         </div>
//                         </div>
//                         ))}
//         </div>

//         </>
//     )
//     }
// export default ProductList;
