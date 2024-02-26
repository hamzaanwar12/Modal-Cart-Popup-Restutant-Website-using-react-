import React, { useState } from "react";
import Navbar from "./NavBar"
import AllItems from "./AllItems"
import ModalCart from"./ModalCart";

// import Item from "./CartItem"
const FoodContext = React.createContext()
const CartContext = React.createContext()


function App() {
  const [modalCart,setModalCart] = useState(false);

  const handleCart = ()=>setModalCart(true)
  const handleCartOff = ()=>setModalCart(false)


  const [items, setItems] = useState([
    {
      id: 0,
      name: "Sushi",
      detail: "Finest fish and veggies",
      price: 22.99,
      quantity: 1
    },
    {
      id: 1,
      name: "Schnitzel",
      detail: "A German speciality",
      price: 16.50,
      quantity: 1
    },
    {
      id: 2,
      name: "Barbecue Burger",
      detail: "American,raw,meaty",
      price: 12.99,
      quantity: 1
    },
    {
      id: 3,
      name: "Green Bowl",
      detail: "Healthy... and Green...",
      price: 18.99,
      quantity: 1
    },
  ]);
  const [cart, setCart] = useState([]);

  return (
    <FoodContext.Provider value={{ items, setItems }}>
      <CartContext.Provider value = {{cart,setCart}}>
        <Navbar showModel  = {handleCart}/>
        <AllItems/>
        {modalCart && <ModalCart closeModel  = {handleCartOff}/>}
      </CartContext.Provider>
    </FoodContext.Provider>
  );
}


export default App;
export { FoodContext, CartContext }
