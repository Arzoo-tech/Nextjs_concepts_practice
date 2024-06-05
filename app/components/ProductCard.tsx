//we will tell next js compiler to include this component to our javascript bundle which means
//if this component is dependent on other component,those components will become client component
//one way to do this is use the 'use client' keyword in this component other method is to use the 
//the "use client " keyword with the component that absolutely need to interact with the clients.
//This way is better and faster.So,instead of using "use client" here, we will shift it to the 
//Button that is interacting with the client on browser directly i.e. "Add to cart "component

import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
    return (
        <div>
            <AddToCart />
        </div>
    )
}

export default ProductCard;