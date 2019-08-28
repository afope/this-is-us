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
          <p>
            With the potential to contribute 25 percent (USD120bn) to Nigeria’s
            GDP annually, the cultivation of cotton should be high up on the
            list of immediate action plans to diversify Nigeria’s economy. A
            thriving cotton industry has the potential to provide over 100,000
            jobs for farm workers, crop processors, consultants, distributors
            and operators of farm machinery. Furthermore, the industry directly
            stimulates the textile and cotton seed processing industries, as
            well as banking, warehousing, transportation and merchandising
            industries.
          </p>
        </div>

        <div className="row">
          <img src={imageTwo} alt="about the cotton" className="sustainability-img" />
          <p>
            The cotton plant grows in most parts of the North and South-Western
            regions of Nigeria. And production has been carried out since the
            early 1900s, after the introduction of seeds by the British Cotton
            Growers Association. Once harvested, cotton crop is moved to a
            Ginnery, where cotton lint is separated from cottonseed. These two
            products, cottonseed and lint, have high cash value — each one at
            least 10 times the value of harvested cotton. Lint is employed in
            textile manufacturing for producing all types of clothing and home
            furnishing like bedspreads and curtains.
          </p>
        </div>

        <div className="row">
          <img src={imageThree} alt="about the cotton" className="sustainability-img" />

          <p>
            From 25 percent in 1980, the cotton industry contribution to GDP has
            reduced to 5 percent in 2015. Nigeria was the hotbed of the Cotton
            industry in West Africa throughout the later part of the 20th
            century and into the early part of the 21st. Production was 30,000
            metric tonnes in 1954, and increased to 60,000 metric tonnes in
            1979, after which it started to decline and reached 30,000 metric
            tonnes during 1988.
          </p>
        </div>

        <div className="row">
          <img src={imageFour} alt="about the cotton" className="sustainability-img" />

          <p>
            The steady decline in the cotton industry can be attributed to many
            factors, stemming from the neglect of the industry by key
            stakeholders during the oil boom period, which saw a shift in
            priority from exportation of agricultural produce to crude oil. This
            shift contributed to the gradual decay of the agricultural sector as
            a whole. Regulations restricting importation of high yield seeds do
            not favor cotton growers.
          </p>
        </div>

        <div className="row">
          <img src={imageSix} alt="about the cotton" className="sustainability-img" />

          <p>
            To quickly improve and encourage cotton cultivation, government
            together with relevant stakeholders and technical partners should:
            1) conduct research and studies on the most suitable homegrown
            practices for soil fertility and water management, pest and disease
            control and efficient methods of harvesting and storage; 2) design
            and implement policies that ensure good quality seeds are available
            to farmers — seed policies must however consider existing global
            issues surrounding the viability of genetically modified seeds,
            which result in high yields but have come under fire for potentially
            adverse effects on health and the environment; 3) redesign schemes
            like the 2010 N100 billion Textile and Manufacturing Revitalization
            Program to enhance the ability of farmers to increase affordable
            cotton supply.
          </p>
        </div>
      </div>
    );
  }
}
