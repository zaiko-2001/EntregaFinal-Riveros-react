import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function ItemListContainer({saludo}) {
    return (
        <>
        <div className="container  d-flex justify-content-center align-items-center">
        <h1 style={{
        fontFamily:"30px",
        marginTop:"100px"
        }}
        >{saludo}</h1>
        </div>
        </>
    )
}
export default ItemListContainer