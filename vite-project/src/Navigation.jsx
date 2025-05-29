import React from 'react';
import { NavLink } from 'react-router-dom'
const Navigation = ({ handleClick, isDark }) => {
    let styles = {};

    if (isDark) {
        styles.backgroundColor = 'black';
        styles.color = 'white';
    } else {
        styles.backgroundColor = 'white';
        styles.color = 'black';
    }


    return (
        <div className='logo'>
            <div className='logo1'>
                <NavLink to="/"> <img src="./Image/Logo.png" alt="ROG Logo" /> </NavLink>
            </div>
            <div className='nav'>
                <NavLink to="/Home">HOME</NavLink>
                <NavLink to="/Products">PRODUCTS </NavLink>
                <NavLink to="/Download">DOWNLOAD  </NavLink>
                <NavLink to="/Community">COMMUNITY </NavLink>
                <NavLink to="/Service">SERVICE </NavLink>
                <NavLink to="/Add"> ADD TO CART</NavLink>
            </div>
            <div className='Asus'>
                <img src='./Image/ASUS.png' />
            </div>
            <div className='hr'>
                <hr></hr>
            </div>
            <div className='circle'>
                <button type="button" onClick={handleClick}>Light</button>
            </div>

        </div>
    );
}

export default Navigation;
