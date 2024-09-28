import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
    return (

        <button className='absolute top-1 right-12 md:static'>
            <span className='relative'>
                <MdOutlineShoppingCart color="white" fontSize="1.8em" />
                <span className='absolute top-0 text-xs bg-red-700 rounded'>
                    10
                </span>
            </span>
        </button>

    )
}

export default Cart
