import axios_Facade from '../../axios/axios_Facade';
import React from 'react';
import Slider from "react-slick"
import './Carousle.css'
import { useMediaQuery } from 'react-responsive'

let axios_open = new axios_Facade();

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

function Imgaes({Item, key}) {
    return (
        <div className="image_container" key={key}>
            <img key={key} src={'https://image.wingeat.com/' + Item.image} className="d-block w-100" alt="..." />
        </div>
    )
}

function Imgaes_Mobile({Item, key}) {
    return (
        <div className="image_container" key={key}>
            <img key={key} src={'https://image.wingeat.com/' + Item.mobileImage} className="d-block w-100" alt="..." />
        </div>
    )
}

class Carousel extends React.Component {

    state = {
        CarouselItemPC : []
    }



    constructor(props) {
        super(props);

        this.state = {
            CarouselItemPC : []
        };
    }

    getFeaturesDataOpen = async () => {

        const mydata = await axios_open.getFeaturesData('');
        const obj = JSON.parse(JSON.stringify(mydata.data));
        
        this.setState(() => {
            return {
                CarouselItemPC : obj
            }
        });
    }

    componentDidMount() {
        this.getFeaturesDataOpen();
    }

    render() {
        var settings = {
            dots: true, 
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2750,
            className:"Slider_css"
        };
        return (
            <div>
                <Desktop>
                    <Slider {...settings} dotsClass="dots">
                            {this.state.CarouselItemPC.length && this.state.CarouselItemPC.map((Item, index) => (
                                <Imgaes Item={Item} key={index}/>
                            ))}
                    </Slider>
                </Desktop>
                <Mobile>
                    <Slider {...settings} dotsClass="dots">
                            {this.state.CarouselItemPC.length && this.state.CarouselItemPC.map((Item, index) => (
                                <Imgaes_Mobile Item={Item} key={index}/>
                            ))}
                    </Slider>                       
                </Mobile>
              </div>
        );
      }
}

export default Carousel;