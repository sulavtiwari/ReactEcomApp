import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Links from './Links'; // Assume Links is a function that returns an array of link objects

// Define the type for the props of NavLinks
interface NavLinksProps {
    toggleNavbar: () => void; // Function to toggle the navbar
}

const NavLinks: React.FC<NavLinksProps> = ({ toggleNavbar }) => {
    const linked = Links(); // Use Links directly if it's a data array

    return (
        <>
            {linked.map((curLink) => (
                <NavLink
                    to={curLink.linkTo}
                    key={curLink.title}
                    className='pb-2 hover:text-orange-600'
                    onClick={toggleNavbar} // Call the function passed as a prop
                >
                    {curLink.title}
                </NavLink>
            ))}
        </>
    );
};

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false); // Specify the type of the state variable

    const toggleNavbar = () => {
        if (window.innerWidth < 768) {
            setIsOpen(prevState => !prevState); // Toggle the state
        }

    };

    return (
        <>
            <nav className=''>
                <div className='hidden px-2 py-3 space-x-5 border-4 border-gray-600 md:flex'>
                    <NavLinks toggleNavbar={toggleNavbar} /> {/* Pass the function as a prop */}
                </div>
                <div className='absolute top-0 right-0 md:hidden'>
                    <button onClick={toggleNavbar}>{isOpen ? "Close" : "Open"}</button>
                </div>
            </nav>
            {isOpen && (
                <div className='flex flex-col w-full pt-9 md:hidden'>
                    <NavLinks toggleNavbar={toggleNavbar} /> {/* Pass the function again */}
                </div>
            )}
        </>
    );
};

export default Nav;
