import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { Link } from 'react-router-dom';
import { Nav, Form } from 'react-bootstrap';
import './CartpageNavbar.css'

class CartpageNavbar extends React.Component {

    render()
    {
        return (
            <div className="Navigation">
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Link to="/" className="BackMain">돌아가기</Link>
                    </Form>
                </nav>
            </div>
        );
    }
}

export default CartpageNavbar;