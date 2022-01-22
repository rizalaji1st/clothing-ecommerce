import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import './card-dropdown.style.scss';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-item">
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    </div>
)

export default CartDropdown;