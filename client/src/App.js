import { useEffect } from 'react';
import { Routes, Route, redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ContactPage from './pages/contact/contact.component';
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import "./App.css"

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/contact' element={<ContactPage/>}/>
          <Route exact path='/checkout' element={<CheckoutPage/>} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? redirect.to('/') : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
        <footer style={{textAlign:'center', margin: "3em auto 0 auto", padding: 0}}>&copy; 2023 <a href="https://oscarluna.dev">oscarluna.dev</a></footer>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);