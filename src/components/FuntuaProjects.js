import React, { Component, Fragment } from "react";

// - components
import { Fade } from "react-slideshow-image";

// images
import imageOne from "../img/about-image-one.JPG";
import imageTwo from "../img/about-image-two.JPG";
import imageThree from "../img/about-image-three.JPG";
import imageFour from "../img/about-image-four.JPG";
import imageSix from "../img/about-image-seven.JPG";
import imageCottonOne from "../img/this-is-our-cotton-one.jpg";
import imageCottonTwo from "../img/this-is-our-cotton-two.jpg";
import imageSummary from "../img/about-summary.png";

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

export default class FuntuaProjects extends Component {
  render() {
    return (
      <div className="funtua-projects">
        <section className="funtua__mantra">
          <div className="funtua__mantra-text">
            <h3>Funtua project</h3>
            <p>
              The Funtua Project started out of curiosity about Nigerian Fabric,
              which lead us on a search for locally grown, ginned, spun, woven
              and dyed cotton. And the result is the most beautiful indigo dyed
              fabric that's woven in Funtua, Katsina, and hand dyed in Kano at
              the centuries old Kofar Mata Dye pits.
            </p>
          </div>
        </section>

        <section className="funtua__mantra">
          <div className="funtua__mantra-text">
            <h3>THIS IS FUNTUA TEES</h3>
            <p>
              Some text about about the funtua tees and then some photos below
              in a slide show
            </p>
          </div>
        </section>

        <Fragment>
          <div className="slide-container">
            <h2>Funtua TEES</h2>
            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageOne} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageFour} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageSix} />
                </div>
              </div>
            </Fade>
          </div>
        </Fragment>

        <section className="funtua__mantra">
          <div className="funtua__mantra-text">
            <h3>Caption</h3>
            <p>Shop the collection</p>
          </div>
        </section>

        <section className="funtua__mantra">
          <div className="funtua__mantra-text">
            <h3>UNIFORM WEAR</h3>
            <p>
              Some text about about the uniform wear and then some photos below
              in a slide show
            </p>
          </div>
        </section>

        <Fragment>
          <div className="slide-container">
            <h2>Uniform wear</h2>
            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageOne} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageFour} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageSix} />
                </div>
              </div>
            </Fade>
          </div>
        </Fragment>

        <section className="funtua__mantra">
          <div className="funtua__mantra-text">
            <h3>Caption</h3>
            <p>Shop the collection</p>
          </div>
        </section>

<section className="funtua-projects__cotton">
  <div className="funtua-projects__cotton__text">
    <div className="funtua-projects__cotton-img-container">
    <img src={imageOne} className="funtua-projects__cotton-img" alt="about the cotton" />
    </div>
    <div>
    <h3>OUR COTTON</h3>
    <p><strong>100% locally grown</strong></p>
    <p>
    FUNTUA is the market lingo for the cotton which gets its name from the city in Katsina (Funtua) where the cotton is grown and spun
    </p>
    <br />
    <p>
      FUNTUA cotton is a long staple cotton between 30mm to 40mm. The cotton yarns are woven loosely using a traditional weave. This loose weave makes the cotton extremely breathable (think linen), malleable and soft (think gauze).
    </p>
  </div>
</div>
</section>

  <section className="funtua__mantra">
    <div className="funtua__mantra-text">
      <h3>COLLABORATIONS</h3>
      <p>
        Some text about about collaborations and then some photos below in
        a slide show
      </p>
    </div>
  </section>


        <Fragment>
          <div className="slide-container">
            <h2>Funtua collaborations</h2>
            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageOne} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageFour} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageSix} />
                </div>
              </div>
            </Fade>
          </div>
        </Fragment>

        <section className="funtua__mantra">
          <div className="funtua__mantra-options">
            <h3>Caption</h3>
            <p>Shop</p>
          </div>
        </section>

        <section className="funtua__mantra">
          <div className="funtua__mantra-text">
            <h3>Fabric and Totes</h3>
            <p>
              Some text about about Fabric and Totes and then some photos below
              in a slide show
            </p>
          </div>
        </section>

        <Fragment>
          <div className="slide-container">
            <h2>Fabrics and Totes</h2>
            <Fade {...fadeProperties}>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageOne} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageFour} />
                </div>
              </div>
              <div className="each-fade">
                <div className="image-container">
                  <img src={imageSix} />
                </div>
              </div>
            </Fade>
          </div>
        </Fragment>

        <section className="funtua__mantra">
          <div className="funtua__mantra-options">
            <h3>Caption</h3>
            <p>Shop</p>
          </div>
        </section>
      </div>
    );
  }
}
