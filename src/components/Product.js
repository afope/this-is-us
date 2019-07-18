import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return ( 
        <ProductWrapper >
            <div className = "product__container" >
                <div className = "product__image-container" onClick = {() => console.log('you clicked on the container') } >
                    <Link to = "/details" >
                         <img src = { img } className = "product__image" alt = "product" / >
                    </Link>
                    <button className="cart-btn" disbled={!inCart ? true : false} onClick={() => console.log('added to the cart')} >
                    {inCart ? (<p className="text-capitalize mb-0" disabled>In cart</p>):(<i className="fas fa-cart-plus" />)}
                    </button>
                </div> 
                <div className="card-footer">
                    <p>{title}</p>
                    <h5>{price}</h5>
                </div>
            </div> 
        </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div `
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }

    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2)
        }
    }
    .card-footer {
        background: rgba(247,247,247)
    }
    .img-container {
        position: relative;
        overlow: hidden;
    }
        
 }
`