/* eslint-disable array-callback-return */
import React from 'react';
import { connect } from 'react-redux';


// MATERIAL UI


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';




const Products = props => {
    return (
        < Container maxWidth="md" component="main" >
            {props.categories.products.map((product, idx) => {
                if (product.category === props.categories.activeCategory) {
                    return (
                        < Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Card>

                                    <CardHeader title={product.name}
                                        titleTypographyProps={{ align: 'center' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" color="textPrimary">
                                            Category: {product.category}
                                        </Typography>
                                        <Typography variant="h5" color="textPrimary">
                                            Price: {product.price}$
                                </Typography>
                                        <Typography variant="h5" color="textPrimary">
                                            inStock: {product.inStock}
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button variant='outlined' color="primary">ADD TO CART</Button>
                                        <Button variant='outlined' color="primary">VIEW DETAILS</Button>

                                    </CardActions>
                                </Card>
                            </Grid>


                        </Grid>
                    )
                }

            })}
        </Container >
    )
}



const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps)(Products);




// BEFORE MATERIAL UI

// const Products = props => {
//     return (



//         props.categories.products.map((product, idx) => {
//             if (product.category === props.categories.activeCategory) {
//                 return (

//                     <div key={idx} className="container">
//                         <h4>{product.name}</h4>
//                         <p>{product.category}</p>
//                         <p>{product.price}</p>
//                         <p>{product.inStock}</p>
//                         <a href='!#' >ADD TO CART</a>
//                         <a href='!#' >VIEW DETAILS</a>
//                     </div>
//                 )
//             }

//         })


//     )
// }