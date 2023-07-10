import React from 'react';

const CartItem = ({ item: { imageUrl, pricingText, name, quantity }}) => (
  <div className="w-96 space-x-5 flex flex-row items-center justify-between h-[120px] mb-[15px] ml-0 pl-0 overflow-visible z-10">
    <img className="w-1/4 h-1/2 overflow-visible" src={imageUrl} alt='item' />
    <div className="flex flex-row items-center justify-center mt-[10px] w-3/4">
      <span className="text-slate-900 w-3/4 pt-[10px] flex flex-row items-center text-xl mb-3 justify-center">{name}</span>{' '}{' '}
      <span className="text-slate-600 font-thin flex flex-column justify-center tracking-tight mx-5">
        {quantity}< span className="w-1"/><small>x</small> < span className="w-1"/>{' '}
				</span>
				<span className="text-pink-800 font-thin flex flex-column justify-center tracking-tight w-1/4 -mr-12 z-10">{`$` + `${pricingText.toFixed(2)}`}
      </span>
    </div>
  </div>
);

export default CartItem;
