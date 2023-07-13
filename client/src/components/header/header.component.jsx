import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { HomeIcon } from "@heroicons/react/24/outline";



const Header = ({ currentUser, hidden, signOutStart }) => (
  <nav className="h-auto lg:h-26 w-full flex flex-column lg:flex-row items-center justify-evenly lg:justify-between -mt-16 lg:mt-0 p-auto lg:p-0 z-20 border-none shadow-none bg-transparent">
    <div className="w-full font-['Roboto'] lg:w-1/2 h-auto flex flex-row items-center justify-end relative text-right lg:mt-2 mx-auto lg:mr-24 p-auto hover:text-pink-600 space-x-5 z-10">
      <Link to="/">
        <HomeIcon height={"16"} width={"16"}/>
      </Link>
      <Link
        className="text-red-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
        to="/shop"
      >
        SHOP
      </Link>
      <Link
        className="text-red-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
        to="/contact"
      >
        CONTACT
      </Link>
      {currentUser ? (
        <Link
          className="text-red-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
          onClick={signOutStart}
        >
          SIGN OUT
        </Link>
      ) : (
        <Link
          className="text-red-900 p-0 lg:p-[25px] h-full text-sm font-semibold cursor-pointer hover:text-pink-600"
          to="/signin"
        >
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
