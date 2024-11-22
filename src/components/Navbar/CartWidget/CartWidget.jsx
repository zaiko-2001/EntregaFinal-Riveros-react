import React from "react";


function CartWidget() {
    const itemCount = 5
    return (
        <>
       <span className="carrito">
        <i className="bi bi-cart icon"></i> 
         {itemCount}
         </span>
         
        </>
    )
}
export default CartWidget