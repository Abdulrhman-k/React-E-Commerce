import React, { createContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export const PContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [Cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  const AddToCart = (Product) =>{
    setCart([...Cart, Product]);
    setTotal(total + Product.price);
  }
  const removeFromCart = (Product) => {
    setCart(Cart.filter((product) => product.id !== (Product.id)));
    setTotal(total - Product.price);
  }
  const clearCart = () => {
    setCart([]);
    setTotal(0);
    }
    const handleCheckout = () => {
      const auth = getAuth();
      if (auth.currentUser) {
        alert('Done!');
      } else {
        alert('You must have an account to checkout.');
      }
    };

    
  return (
    <PContext.Provider value={{ products, selectedProduct, setSelectedProduct , Cart ,AddToCart ,removeFromCart ,clearCart , handleCheckout }}>
      {children}
    </PContext.Provider>
  );
};
export default ProductProvider;














// import React, { createContext, useEffect, useState } from 'react';

// export const PContext = createContext();

// const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);
  
//     useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const response = await fetch('https://fakestoreapi.com/products');
//           const data = await response.json();
//           setProducts(data);
//         } catch (error) {
//           console.error('Error fetching products:', error);
//         }
//       };
//       fetchProducts();
//     }, []);
  
//     return (
//       <PContext.Provider value={{ products, selectedProduct, setSelectedProduct }}>
//         {children}
//       </PContext.Provider>
//     );
//   };

// export default PContext;