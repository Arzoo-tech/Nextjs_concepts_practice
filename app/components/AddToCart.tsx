//This is a client component which means that there will be a slot in server components where react 
//inserts the client component.
"use client";
import React from 'react'

const AddToCart = () => {
    return (
        <div>
            <button onClick={() =>
                console.log('click')}>
                Add to Cart
            </button>
        </div>
    )
}

export default AddToCart;
