import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.scss';


class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" >
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/firstScreen">Location</Nav.Link>
            <Nav.Link as={Link} to="/tableScreen">Results</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default withRouter(NavBar);