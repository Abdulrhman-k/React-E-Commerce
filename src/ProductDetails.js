import React, { useContext } from "react";
import { PContext } from "./PContext";

const ProductDetails = () => {
    const { selectedProduct ,AddToCart } = useContext(PContext);

    const handleAddToCart =() =>{
        if(selectedProduct) {
            AddToCart(selectedProduct);
        }
    
    if (!selectedProduct) {
        return <h1>Product not selected</h1>;
    }
}
    return (
        <div className="div-11">
            <img className="pro-image" src={selectedProduct?.image} width={300} alt={selectedProduct?.title} />
            <h1 className="pro-title ">{selectedProduct?.title}</h1>
            <p className="pro-description">{selectedProduct?.description}</p>
            <p className="pro-price">price: {selectedProduct?.price}</p>
            <button className="addbtn" onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
};

export default ProductDetails;





// import React ,{useContext} from "react";
// import {PContext} from "./PContext";

// const ProductDetails = () => {
//     const {selectedProduct} = useContext(PContext)
//     if(!selectedProduct){
//         return <h1>Product not selected</h1>
//     }
//     return (
//         <div>
//             <h1>{selectedProduct.title}</h1>
//             <img src={selectedProduct.image} alt={selectedProduct.title} />
//             <p>{selectedProduct.description}</p>
//             <p>price: {selectedProduct.price}</p>
//         </div>
//         )
// }

// export default ProductDetails