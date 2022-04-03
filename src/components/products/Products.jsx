import React from 'react';
import {Grid} from '@material-ui/core'
import Product from './product/Product';
import useStyles from './styles'
// const products=[
//     {id:1, name:"Nike Air Max", description:"Nike air max '07",price:"8000",image:"https://assets.ajio.com/medias/sys_master/root/20220131/E6Co/61f80b0bf997dd66234f748b/-473Wx593H-469097248-black-MODEL2.jpg"},
//     {id:2, name:"Puma Bmw motorsport", description:"Puma Bmw motorsport high tops", price:"10000", image:"https://assets.ajio.com/medias/sys_master/root/20211012/0BWT/6164ba0ff997dd3ed4680353/-473Wx593H-460977133-white-MODEL.jpg"}
// ]

const Products = ({products, onAddToCart}) => {
    const classes=useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
         <Grid container justifyContent='center' spacing={4}>
             {products.map((product)=>{
                //  console.log(product);
                 return(
                    <Grid item key={product.id} xs={12} sm={6} md={6} lg={4}>
                        <Product product = {product} onAddToCart={onAddToCart}/>
                </Grid>
                 );
                 
             })}
         </Grid>
     </main>
    );
     
}
export default Products;