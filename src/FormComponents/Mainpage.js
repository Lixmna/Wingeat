
import React from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from '../Componets/Mainpage/Navbar';
import HeaderLogo from '../Componets/HeaderLogo';
import Carousel from '../Componets/Mainpage/Carousel';
import './Mainpage.css';
import ListName from '../Componets/Mainpage/ListName';
import ListData from '../Componets/Mainpage/ListData';

localStorage.clear();

class Mainpage extends React.Component {
    
    state = {
        CartItem : 0
    }

    getData = (data) =>{
        this.setState({CartItem: data});
        console.log(data);
    }

    render() {
        return (
            <div id="root">
                <div className="Header">
                    <header className="Header">
                        <Navigation />
                        <HeaderLogo />
                    </header>
                </div>
                <div className="Featuer">
                    <Carousel />
                </div>
                <div className="List">
                    <ListName />
                    <ListData onSubmit={this.getData} />
                </div>
            </div>
        );
    }
}

export default withRouter(Mainpage);