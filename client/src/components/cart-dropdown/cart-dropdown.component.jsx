import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import CustomButton from "../custom-button/custom-button.component"

const CartDropdown = ({ cartItems, history, dispatch }) => {
	const navigate = useNavigate()
	return (
  <div className="absolute w-[400px] h-[540px] flex flex-column items-center justify-center bg-gray-50 p-[15px] border border-gray-500/25 top-[90px] right-[40px] z-10 text-slate-900 shadow-2xl">
    <div className="max-h-auto max-w-96 wrap z-10">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <div className="text-lg mx-auto z-10 text-center flex flex-row h-auto justify-center">Your cart is empty</div>
      )}
    </div>
    <CustomButton className="mx-auto mt-auto z-10 text-center ml-0" 
      onClick={() => {
        navigate('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
