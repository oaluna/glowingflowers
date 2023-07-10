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
  <div className="absolute w-[400px] h-[480px] flex flex-col bg-rose-50 p-[15px] border border-solid border-gray-50/20 top-[90px] right-[40px] z-10 text-slate-900 shadow-xl">
	<h2 className="text-5xl text-center font-medium font-sans">My Shopping Cart</h2>
    <div className="h-full flex flex-col overflow-y-scroll">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
				<span className="text-sm my-[50px] mx-auto">Your cart is empty</span>
      )}
    </div>
	
    <CustomButton className="mt-auto"
      onClick={() => {
        navigate('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      <p className="text-md font-sans flex flex-row items-center m-auto ">Proceed to Checkout</p>
    </CustomButton>
	
  </div>
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
