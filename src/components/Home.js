import React, { Component, Fragment } from 'react';
import StackGrid from "react-stack-grid";


// images
import imageOne from "../img/home-image-one.png";
import imageTwo from "../img/home-image-two.png";
import shopImage from "../img/home-image-shop.png";


 class Home extends Component {
     constructor() {
         super();
         this.state = {
             pictures: [],
         }
     }

     componentDidMount() {
         fetch('https://api.instagram.com/v1/users/3218629328/media/recent/?access_token=3218629328.1677ed0.9589547d547443aba66bd21068f7f615').
         then(results => {
             console.log('results', results.json())
         }).catch(error => console.log('error', error));

     }

    render () {
        return (
            <div>hello from home</div>
        )
    }
 }

export default Home;