import React from 'react';
import { Item, Button } from 'semantic-ui-react';

import './CartpageSimpleBody.css'

class CartpageSimpleBody extends React.Component {

    state = {
        localStorageItem : JSON.parse(localStorage.getItem('3')),
        FinalPrice : 0
    }

    constructor(props) {
        super(props);

        let localStorageUse = JSON.parse(localStorage.getItem('3'));
        let SumPrice = 0;
        let i = 0;
        if(localStorageUse)
        {
            for(i=0;i<localStorageUse.length;i++)
            {
                SumPrice = SumPrice + localStorageUse[i].RealPrice;
            }
        }

        this.state = {
            localStorageItem : JSON.parse(localStorage.getItem('3')),
            FinalPrice : SumPrice
        };
    }

    checkboxonChange = async (e) => {
        let localStorageItemChange = await this.state.localStorageItem;        
        let value = e.target.value;
        let SumPrice = this.state.FinalPrice;

        localStorageItemChange[value].Checked?localStorageItemChange[value].Checked=false : localStorageItemChange[value].Checked=true;
        localStorageItemChange[value].Checked?SumPrice = SumPrice + localStorageItemChange[value].RealPrice : SumPrice = SumPrice - localStorageItemChange[value].RealPrice

        this.setState(() => {
            return {
                localStorageItem : localStorageItemChange,
                FinalPrice : SumPrice
            }
        });
    }

    onClickMinusButton = async (e) => {

        let localStorageItemChange = await this.state.localStorageItem;        
        let value = e;    
        let SumPrice = this.state.FinalPrice;

        if(localStorageItemChange[value].Count - 1 === 0)
        {
            alert("1개 이하의 수량은 선택할 수 없습니다.")        
        }else
        {
            localStorageItemChange[value].Count = localStorageItemChange[value].Count - 1;
            localStorageItemChange[value].RealPrice = localStorageItemChange[value].price * localStorageItemChange[value].Count;
            SumPrice = SumPrice - localStorageItemChange[value].price;
        }
        this.setState(() => {
            return {
                localStorageItem : localStorageItemChange,
                FinalPrice : SumPrice
            }
        });

    }

    onClickPlusButton = async (e) => {        
        
        let localStorageItemChange = await this.state.localStorageItem;        
        let value = e; 
        let SumPrice = this.state.FinalPrice;

        localStorageItemChange[value].Count = localStorageItemChange[value].Count + 1;
        localStorageItemChange[value].RealPrice = localStorageItemChange[value].price * localStorageItemChange[value].Count;
        SumPrice = SumPrice + localStorageItemChange[value].price;
        this.setState(() => {
            return {
                localStorageItem : localStorageItemChange,
                FinalPrice : SumPrice
            }
        });
    }

    onClickClose = async (e) => {
        let localStorageItemChange = await this.state.localStorageItem;        
        let value = e; 
        let SumPrice = this.state.FinalPrice;

        SumPrice = SumPrice - localStorageItemChange[value].RealPrice;
        localStorageItemChange.splice(value,1);

        this.setState(() => {
            return {
                localStorageItem : localStorageItemChange,
                FinalPrice : SumPrice
            }
        });
    }


    render() {
        let itembox = this.state.localStorageItem;
        if(this.state.localStorageItem)
        {
            itembox = this.state.localStorageItem.length && this.state.localStorageItem.map((item, i) => (
                <div className="Item">
                    <div className="form-check">
                        <input type="checkbox" key={i} name="checkbox" value={i} onChange={this.checkboxonChange} checked={item.Checked}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;{item.itemName}
                        <button type="button" className="close" key={i}  aria-label="Close" value={i} onClick={() => this.onClickClose(i)}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="ItemboxMiddle">
                        <div className="row">
                            <div className="ItemboxImage">
                                <img className="ItemImg" key={i} index={Item.index} value={i} src={'https://image.wingeat.com/' + item.image} alt={Item.index}/>
                            </div>
                            &nbsp;&nbsp;
                            <div className="ItemboxButtonText">
                                <div className="PriceText">
                                    <h3 key={i} >
                                        {item.price.toLocaleString()}원
                                    </h3>
                                </div>
                                <Button.Group className="CountButtonGroup">
                                    <Button icon="minus" key={i}  value={i} onClick={() => this.onClickMinusButton(i)}/>
                                    <Button key={i}  content={item.Count} />
                                    <Button icon="plus" key={i}  value={i} onClick={() => this.onClickPlusButton(i)}/>
                                </Button.Group>
                            </div>
                        </div>
                    </div>
                    <div className="ItemboxBottom">
                        <div className="RealPriceSum">
                            <h2 key={i} >
                                합계:{item.RealPrice.toLocaleString()}원
                            </h2>
                        </div>
                    </div>
                </div> 

            ));
        }
    

        return (
            <div className="CartpageSimpleBody">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 pl-5 ItemList">
                        {itembox?itembox:"장바구니가 비었습니다."}
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 Charge">
                        <div className = "PayTextBox">
                            <div className = "row">
                                <div className = "ml-auto PayText">
                                    <h3>
                                        결제 예정 금액                                    
                                    </h3>
                                </div>
                                <div className = "mr-auto Pay">
                                    <h3>
                                        {this.state.FinalPrice.toLocaleString()}원
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className = "PayButtonBox">
                            <Button className = "center-block btn-lg PayButton" color='red'>주문하기</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartpageSimpleBody;