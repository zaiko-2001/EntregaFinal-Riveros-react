import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './CartWidget.css'

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