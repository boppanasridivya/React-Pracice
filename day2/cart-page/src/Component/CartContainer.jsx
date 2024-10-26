import React, { useState } from 'react'
import CartItem from './CartItem'
import Total from './Total'


let cartItems =[
{
    id :1,
    name : "noodles",
    quantity:1,
    price:40
},
{
    id :2,
    name :"Veg Manchuria" ,
    quantity:1,
    price:120
    
},
{
    id :3,
    name : "Machow soup",
    quantity:1,
    price:99
},
{
    id :4,
    name : "Babycorn65",
    quantity:1,
    price:150
}
]

const CartContainer = () => {
    const[cart, setCart] = useState(cartItems);
    // const handleClick =(id) =>{
    //     setCart(cartItems.map((item) =>{
    //         item.id === id ? {...item,quantity:item.quantity+1}:{item}
    //     }))
   
    // }

    const totalPrice =cart.reduce((currentTotal, item) =>{
        return currentTotal+item.price*item.quantity;
    },0)

    const handleClick= (id, value) =>{
       let updateCart = cart.map((item) =>{
        let newQuantity= item.quantity+value;
         newQuantity =   newQuantity>0 ? newQuantity :0;

        return(
            item.id === id ? {...item , quantity: newQuantity}:item

        )
    })
setCart(updateCart);
    }

  return (

    <div>
        {cart.map((item)=>{
           return(
            <CartItem key={item.id} {...item} handleClick={handleClick}/>
           )
        })}
        <Total totalPrice={totalPrice}/>
       
      
    </div>
  )
}

export default CartContainer
