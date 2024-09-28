import React from 'react'
import Nav from './Nav'
import Logo from './Logo'
import Cart from './Cart'

const Header = () => {
    return (
        <>
            <div className='relative flex justify-between w-full pr-3 text-white bg-black border-4 border-green-600 md:items-center'>
                <Logo />
                <span className='flex justify-end w-full space-x-8 border-4 border-red-600 md:w-2/3 md:items-center'>
                    <Nav />
                    <Cart />
                </span>

            </div>
        </>
    )
}

export default Header
