import React from 'react';
import { connect } from 'react-redux';
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, pricingText, imageUrl, description } = item;

  return (
    <div className='group flex flex-col items-center justify-evenly overflow-hidden'>
		<div className="tooltip tooltip-right tooltip-light font-serif max-w-[250px] min-h-1/2 object-contain top-0 bg-gradient-to-tr from-rose-50 to-lime-50" data-tip={description}>
      <img className="w-full max-h-1/2 object-cover transition duration-500 group-hover:scale-105 sm:h-[300px] sm:w-[250px]" src={imageUrl} alt="item"/>

      <div className="bg-transparent pt-3">
        <h3 className="relative z-10 mt-2 font-bold text-3xl font-sans">{name}</h3>
        <p className="relative z-10 tracking-wider text-slate-900 font-sans">${pricingText.toFixed(2)}</p>
      <button className="flex flex-row items-center mx-auto justify-between rounded bg-rose-400 px-6 py-2 text-2xl font-medium uppercase leading-normal text-gray-50 shadow-sm transition duration-150 ease-in-out min-w-[65%] hover:bg-rose-600 font-sans" onClick={() => addItem(item)} inverted>
        Add to cart
				<ShoppingCartIcon width={"24px"} height={"24px"}/>
      </button>
      </div>
			</div>
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