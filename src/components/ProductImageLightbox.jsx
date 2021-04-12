import React, { Component } from 'react';
import { MDBLightbox } from 'mdbreact';

class LightboxPage extends Component {
  state = {
    images: [
      { src: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg', alt: ''},
    ]
  };

  render() {
    return <MDBLightbox md='4' images={this.state.images} />;
  }
}

export default LightboxPage;
