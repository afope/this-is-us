import React, { Component, Fragment } from 'react';

// - components
import MasonryLayout from './Masonry';
import Test from './Utils/Test';


const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      'https://api.instagram.com/v1/users/3218629328/media/recent/?access_token=3218629328.1677ed0.9589547d547443aba66bd21068f7f615&count=50'
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ data: data.data });
      });
  }

  render() {
    const childElements = this.state.data.map(function(item) {
      return <img src={item.images.low_resolution.url} />;
    });

    return (
      <Fragment>
        <section className="home__mantra">
          <strong>THISISUS&trade;</strong> We create value. We believe in the
          work of our hands. We use local resources to serve local communities.
          We imagine experiences and design possibilities. We work together. We
          celebrate what we have and create what we don 't have. We are proud of
          our products. We are proud of our people. We are proud of our nation.{' '}
          <strong>THISISUS&trade;</strong>{' '}
        </section>
        <section className="masonry__layout">
          {/* <MasonryLayout columns={3} gap={25}>
            {this.state.data.map((item, i) => {
              return (
                <div key={i}>
                  <img src={item.images.low_resolution.url} />
                </div>
              );
            })}
          </MasonryLayout> */}
          <Test large={4} xs={12}>
            {this.state.data.map((item, i) => {
                return (
                  <div key={i} className="col-lg-4">
                      <div className="box" style={{border:'1px solid red'}}>
                        <img src={item.images.low_resolution.url} />
                      </div>
                  </div>
                );
              })}
          </Test>
        </section>
      </Fragment>
    );
  }
}

export default Home;
