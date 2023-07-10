import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, pricingText, imageUrl } = item;

  return (
    <div className='rounded-lg bg-gray-50 shadow-sm dark:bg-neutral-700 p-5 h-full flex flex-col items-start justify-evenly'>
      <img className="rounded-t-lg h-full w-full object-contain" src={imageUrl} alt="item" />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{name}</h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-100">$ {pricingText.toFixed(2)}</p>
      </div>
      <button className="flex flex-col justify-end rounded bg-rose-400 px-6 py-2 text-xs font-medium uppercase leading-normal text-gray-50 shadow-sm transition duration-150 ease-in-out hover:bg-rose-600" onClick={() => addItem(item)} inverted>
        Add to cart
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