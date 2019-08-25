import React from 'react'
import Product from '../Product';


const Productcontainer = (props) => {

    return (
        <div className="row center">
            {
                props.products && props.products.map(product => <Product product={product} key={product.id} />)
            }
        </div>
    );
}

export default Productcontainer;
