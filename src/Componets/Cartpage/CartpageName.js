import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './CartpageName.css'

function CartpageName() {
    return (
        <div className="CartpageName">
            <div className="container CartpageName--pc">
                <div className="CartpageName__text">
                    <h1 id="fonts">
                        <strong>장바구니</strong>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default CartpageName;