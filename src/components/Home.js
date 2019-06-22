import React, { Fragment } from 'react';
import StackGrid from "react-stack-grid";


// images
import imageOne from "../img/home-image-one.png";
import imageTwo from "../img/home-image-two.png";
import shopImage from "../img/home-image-shop.png";

const Home = () => (
    <Fragment>
        <section className="home__banner">
            <div className="home__banner-text">
                <span>This is us.</span> We create value. We believe in the work of our hands. We use local resources to serve local communities. We imagine experiences and design possibilities. We work together. We celebrate what we have and create what we don't have. We are proud of our products. We are proud of our people. We are proud of our nation. <span>This is us.</span> 
         </div>
        </section>

       <section className="home__grid">
        <section className="home__grid-first__row">
            <img src={imageOne} className="home__grid-first__row__image-one"/>
            <img src={imageTwo} className="home__grid-first__row__image-two" />
        </section>

        <section className="home__grid-second__row">
            <div>
                hey
            </div>
            <div>
                hey
            </div>
        </section>

        <section className="home__grid-third__row">
            <div>
                hey
            </div>
            <div>
                hey
            </div>
        </section>

        <section className="home__grid-fourth__row">
            <div>
                hey
            </div>
            <div>
                hey
            </div>
        </section>

        <section className="home__grid-fifth__row">
            <div>
                hey
            </div>
            <div>
                hey
            </div>
        </section>

        <section className="home__grid-sixth__row">
            <div>
                hey
            </div>
            <div>
                hey
            </div>
        </section>ss

        </section>
</Fragment>
 
);


export default Home;