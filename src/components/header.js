/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from '@material-ui/core';



const Header = props => {
  return (
    <>
      <header>
        <h1>OUR STORE</h1>
        <Link className="a" color="primary" >
                    CART ({props.cart.count})
        </Link>
      </header>
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});


export default connect(mapStateToProps)(Header);