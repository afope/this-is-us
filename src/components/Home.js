import React, { Component, Fragment } from 'react';

// - components
import ResonsiveGrid from './Utils/ResonsiveGrid';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    if (sessionStorage.getItem('igdata') === null) {
      fetch(
        'https://api.instagram.com/v1/users/3218629328/media/recent/?access_token=3218629328.1677ed0.9589547d547443aba66bd21068f7f615&count=50'
      )
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.setState({ data: data.data });
        }).then(() => {
          sessionStorage.setItem('igdata', JSON.stringify(this.state.data))
        }).catch(error => {
          console.log('error', error)
        });
    } else {
      const igData = sessionStorage.getItem('igdata');
      this.setState({ data: JSON.parse(igData) });
    }
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
          celebrate what we have and create what we don't have. We are proud of
          our products. We are proud of our people. We are proud of our nation.{' '}
          <strong>THISISUS&trade;</strong>{' '}
        </section>
        <section className="masonry__layout">
          <ResonsiveGrid>
            {this.state.data.map((item, i) => {
                return (
                  <div key={i} className="col-lg-4 col-xs-12">
                      <div className="box">
                        <img
                          className="home__img"
                          style={{ width:'420px', height: '420px'}}
                          src={item.images.standard_resolution.url} />
                      </div>
                  </div>
                );
              })}
          </ResonsiveGrid>
        </section>
      </Fragment>
    );
  }
}

export default Home;
