import React from 'react';
import { connect } from 'react-redux';
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, pricingText, imageUrl } = item;

  return (
    <div className='rounded-lg bg-gray-50 shadow-sm dark:bg-neutral-700 p-5 h-full flex flex-col items-start justify-evenly'>
      <img className="rounded-t-lg h-full w-full object-contain bg-gradient-to-tr from-rose-50 to-lime-50" src={imageUrl} alt="item" />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium font-[Urbanist] leading-tight text-neutral-800 dark:text-neutral-50">{name}</h5>
        <p className="mb-4 text-base font-[Urbanist] text-neutral-600 dark:text-neutral-100">$ {pricingText.toFixed(2)}</p>
      </div>
      <button className="flex flex-row items-center mx-auto justify-between rounded bg-rose-900 px-6 py-2 text-2xl font-light leading-normal text-gray-50 shadow-sm transition duration-150 font-[Urbanist] ease-in-out min-w-[65%] hover:bg-rose-600" onClick={() => addItem(item)} inverted>
        Add to cart
				<ShoppingCartIcon width={"24px"} height={"24px"} px={5}/>
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