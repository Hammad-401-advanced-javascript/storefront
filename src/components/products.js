import React from 'react';
import { connect } from 'react-redux';
import { activate } from '../store/products';



const Products = props => {
    return (
        <section>
            {props.products.products.map((product, idx) =>
                <div key={idx} className="container">
                    <p>{product.image}</p>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <a href='!#' >ADD TO CART</a>
                    <a href='!#' >VIEW DETAILS</a>
                </div>
            )}
        </section>
    )
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Products);