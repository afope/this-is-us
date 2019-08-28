import React, { Component, Fragment } from 'react';

// images
import imageOne from '../img/about-image-one.JPG';
import imageTwo from '../img/about-image-two.JPG';
import imageThree from '../img/about-image-three.JPG';
import imageFour from '../img/about-image-four.JPG';
import imageSix from '../img/about-image-seven.JPG';
import imageCottonOne from '../img/this-is-our-cotton-one.jpg';
import imageCottonTwo from '../img/this-is-our-cotton-two.jpg';
import imageSummary from '../img/about-summary.png';

export default class Sustainability extends Component {
  render() {
    return (
      <div className="sustainability">
      <h3>Sustainability</h3>
        <div className="row">
          <img src={imageOne} className="sustainability-img" alt="about the cotton" />
          <p><strong>Use it with love</strong></p>
          <p>
            1. We offer redyeing services. <br />
            2. We offer reviving services. <br />
            3. Upcycle your packaging
          </p>
        </div>

        <div className="row">
          <img src={imageTwo} alt="about the cotton" className="sustainability-img" />
            <p><strong>Get rid of it with love</strong></p>
            <p>
              We offer recycling/upcycling services so whenyou're done with it, you can get rid of it.
            </p>
        </div>

        <div className="row">
          <img src={imageThree} alt="about the cotton" className="sustainability-img" />
            <p><strong>Fair wage</strong></p>
            <p>
              We pay a fair wage to all of our employees and suppliers and ensure they do the same
            </p>
        </div>

        <div className="row">
          <img src={imageFour} alt="about the cotton" className="sustainability-img" />

            <p><strong>Homegrown</strong></p>
            <p>
              Local grown, processed and naturally dyed cotton using locally run textile mills and dye pits
            </p>
        </div>

        <div className="row">
          <img src={imageSix} alt="about the cotton" className="sustainability-img" />

            <p><strong>Low waste products</strong></p>
            <p>
              1. Revived shirt, using fabric to cover damaged shirt.<br />
            2. Patchwork shirt, using scrap fabric to create design. <br />
            </p>
        </div>
      </div>
    );
  }
}
