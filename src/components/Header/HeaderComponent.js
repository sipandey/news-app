import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class HeaderComponent extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar dark color="primary">
        <div className="container">
            <NavbarBrand href="/">NY Times Most Popular</NavbarBrand>
        </div>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default HeaderComponent;