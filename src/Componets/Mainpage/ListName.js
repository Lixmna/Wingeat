import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './ListName.css'

function ListName() {
    return (
        <div className="ListName">
            <div className="container ListName--pc">
                <div className="ListName__text">
                    <h1 id="fonts">
                        <strong>윙잇 MADE</strong>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default ListName;