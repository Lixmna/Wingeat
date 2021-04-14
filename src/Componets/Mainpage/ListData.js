import axios_Facade from '../../axios/axios_Facade';
import React from 'react';
import './ListData.css'


let axios_open = new axios_Facade();


class ListData extends React.Component {

    

    state = {
        Page : 1,
        ListItemData : [],
    }

    constructor(props) {
        super(props);

        this.state = {
            Page : 1,
            ListItemData : []
        };
    }

    getItemDataMore = async () => {

        const mydata = await axios_open.getPagesData(this.state.Page);

        const obj = JSON.parse(JSON.stringify(mydata.data));

        this.setState(() => {
            return {
                ListItemData : this.state.ListItemData.concat(...obj),
                Page : this.state.Page + 1
            }
        });
        
        localStorage.setItem('1', JSON.stringify(this.state.ListItemData));
    }

    getItemDataOpen = async () => {

        const mydata = await axios_open.getPagesData(this.state.Page);

        const obj = JSON.parse(JSON.stringify(mydata.data));

        this.setState(() => {
            return {
                ListItemData : obj,
                Page : this.state.Page + 1
            }
        });

        localStorage.setItem('1', JSON.stringify(this.state.ListItemData));
    }

    componentDidMount() {
        this.getItemDataOpen();
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
    }

    

    handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && this.state.Page <= 6 && this.state.Page !== 1) {
          // 페이지 끝에 도달하면 추가 데이터를 받아온다
          this.getItemDataMore();
        }
    };

    render() {
        return (
            <div className="ListData">
                <div className="row">
                    {this.state.ListItemData.length && this.state.ListItemData.map((Item, index) => (
                        <Imgaes Item={Item} key={index}/>
                    ))}
                </div>
            </div>
        );
      }
}

function Imgaes({Item, key}) {
    
    return (
        <div className="col-6 col-sm-4 col-md-3 mt-3 ListCard">
            <div className=" ListHeader" key = {key} >
                <a href="#!" value={Item.index} onClick={

                function (e) {
                console.log(e.currentTarget.innerText);
                alert("장바구니에 [" + e.currentTarget.innerText + "] 가 추가되었습니다.");
                var obj = [];
                if(localStorage.getItem('2'))
                {
                    obj = [localStorage.getItem('2'),'""""', e.currentTarget.innerText];
                }else
                {
                    obj = e.currentTarget.innerText;
                }
                localStorage.setItem('2', obj);
                console.log(localStorage.getItem('2').split(',"""",'));
                
            }}>
                <div className=" ListItemImg">
                    <img index={Item.index} value={Item} src={'https://image.wingeat.com/' + Item.image} className="img-responsive rounded-lg center-block itemCard" alt={Item.index}/>
                </div>
                <div className="ListHeaderText" id='fonts'>
                    {Item.itemName}
                </div>
                </a>
            </div>
            <div className="ListBody">
                <div className="ListItemPrice">
                    <h3>
                        <strong>{Item.price.toLocaleString()}원</strong>
                    </h3>
                </div>            
            </div>       
    </div>
    )
}

export default ListData;