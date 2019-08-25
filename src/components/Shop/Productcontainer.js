import React from 'react'
import Product from '../Product';


const Productcontainer = (props) => {

    return (
        <div class="row center">
            {
                props.products.map(product => <Product product={product} key={product.id} />)
            }
        </div>
    );
}

export default Productcontainer;
