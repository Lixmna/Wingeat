import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';
import { Nav, Form } from 'react-bootstrap';
import './Navbar.css'

class Navigation extends React.Component {

    componentDidMount () {
        this._mounted = true
        
     }
     componentWillUnmount () {
        this._mounted = false
     }

    render()
    {
        return (
            <div className="Navigation">
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <div className="ui red circular label">
                            {localStorage.getItem('2')?(localStorage.getItem('2').split(',"""",')).length : 0} </div>
                        <Link to="/cart">장바구니</Link>
                    </Form>
                </nav>
            </div>
        );
    }
}

export default Navigation;