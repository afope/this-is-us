import React, { Fragment } from 'react'
import Product from '../Product';


const Productcontainer = (props) => {

    return (
        <div class="row">
          {console.log('props')}
            {
                props.products.map(product => <Product product={product} key={product.id} />)
            }
        </div>
    );
}

export default Productcontainer;
