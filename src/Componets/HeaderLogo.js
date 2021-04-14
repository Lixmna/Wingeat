import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './HeaderLogo.css'

function HeaderLogo() {
    return (
        <div className="Logo">
            <div className="container header-main--pc">
                <div className="header-main__logo">
                    <a href="/">
                        <img src="https://image.wingeat.com/logo/images/we_logo_center.png" alt="Wing Eat"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HeaderLogo;