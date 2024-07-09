import React, { useContext, useMemo, useState } from "react";
import { PContext } from "./PContext";

const Pcart = () => {
  const { Cart, removeFromCart, clearCart ,handleCheckout } = useContext(PContext);
  const [filteredCart, setFilteredCart] = useState([]);

  useMemo(() => {
    setFilteredCart(
      Cart.reduce((acc, product) => {
        const existingProduct = acc.find((p) => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
          existingProduct.totalPrice += product.price;
        } else {
          acc.push({ ...product, quantity: 1, totalPrice: product.price });
        }
        return acc;
      }, [])
    );
  }, [Cart]);

  const handleIncrement = (product) => {
    setFilteredCart(
      filteredCart.map((p) =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1, totalPrice: p.totalPrice + p.price }
          : p
      )
    );
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      setFilteredCart(
        filteredCart.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity - 1, totalPrice: p.totalPrice - p.price }
            : p
        )
      );
    } else {
      removeFromCart(product);
    }
  };

  const totalQuantity = filteredCart.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = filteredCart.reduce((total, product) => total + product.totalPrice, 0);

  return (
    <div className="div-20">
      {filteredCart.length === 0 ? (
        <p className="Empt">Your cart is empty</p>
      ) : (
        <div className="items">
          {filteredCart.map((product) => (
            <div key={product.id}>
              <img className="P-img" src={product.image} alt={product.title} />
              <h3 className="P-title">{product.title}</h3>
              <p className="P-price">Price: {product.price}</p>
              <p className="P-quantity">Quantity: {product.quantity}</p>
              <p className="P-total-price">Total Price: {product.totalPrice.toFixed(2)}</p>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={() => handleDecrement(product)}>
                  -
                </button>
                <button className="quantity-btn" onClick={() => handleIncrement(product)}>
                  +
                </button>
              </div>
              <button className="R-Btn" onClick={() => removeFromCart(product)}>
                Remove from cart
              </button>
            </div>
          ))}
          <div className="cart-totals">
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="C-Btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pcart;
// import React, { useContext } from "react";
// import { PContext } from "./PContext";

// const Pcart = () => {
//     const { cart } = useContext(PContext);
//   return (
//     <div>
//         <h1>Cart</h1>
//         {cart.length  === 0 ?(
//         <p>Your cart is empty</p>
//         ) : (
//         <div>
//             {cart.map((Product) => (
//                 <div key={Product.id}>
//             <img src={Product.image} alt={Product.title} />
//             <h3>{Product.title}</h3>
//             <p>Price :{Product.price}</p>
//             <button onClick={() => removeFromCart(product)}>Remove from cart</button>
//             </div>
//         ))}
//             </div>
//             )}
//             </div>
//     );
//     }
// export default Pcart;