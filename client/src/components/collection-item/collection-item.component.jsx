import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, pricingText, imageUrl } = item;

  return (
    <div className='rounded-lg bg-gray-50 shadow-sm dark:bg-slate-700 p-5 h-full flex flex-col items-start justify-evenly'>
		<div className="tooltip tooltip-right tooltip-secondary" data-tip={item.description}>
      <img className="rounded-t-lg h-full w-full object-contain bg-gradient-to-tr from-rose-50 to-lime-50" src={imageUrl} alt="item"/></div>

      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold leading-none text-slate-900 dark:text-slate-50 font-sans">{name}</h5>
        <p className="mb-4 text-xl font-serif text-red-600 dark:text-slate-100">$ {pricingText.toFixed(2)}</p>
      </div>
      <button className="flex flex-row items-center mx-auto justify-between rounded bg-rose-400 px-6 py-2 text-2xl font-medium uppercase leading-normal text-gray-50 shadow-sm transition duration-150 ease-in-out min-w-[65%] hover:bg-rose-600" onClick={() => addItem(item)} inverted>
        Add to cart
				<ShoppingCartIcon width={"24px"} height={"24px"}/>
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);