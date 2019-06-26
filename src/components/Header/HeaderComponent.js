import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class HeaderComponent extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark color="primary" fixed="top">
        <div className="container">
            <NavbarBrand href="/">News Times Most Popular</NavbarBrand>
        </div>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default HeaderComponent;