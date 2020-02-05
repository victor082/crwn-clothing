import React from 'react'
import { connect } from 'react-redux'
import CustomButton from './Custom-Button'
import CartItem from './Cart-Item'
import { selectCartItems } from '../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'
import '../styles/cart-dropdown.scss'

const CartDropdown = ({ cartItems }) => (

    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />
                    )
                    :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)