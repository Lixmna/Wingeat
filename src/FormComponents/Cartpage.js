import React from 'react';
import CartpageNavbar from '../Componets/Cartpage/CartpageNavbar';
import CartpageName from '../Componets/Cartpage/CartpageName';
import CartpageSimpleBody from '../Componets/Cartpage/CartpageSimpleBody';
import HeaderLogo from '../Componets/HeaderLogo';
import './Cartpage.css'

class Cartpage extends React.Component 
{
    state = {
        AllItem : [],
        CartItem : []
    }

    constructor(props) {
        super(props);
        if(localStorage.getItem('2'))
        {
            console.log(this.state.CartItem[0]);

            var item = JSON.parse(localStorage.getItem('1'));
            var Cart = localStorage.getItem('2').split(',"""",');
            var obj = []; 

            var i = 0;
            var j = 0;
            
            
            for(i=0;i<localStorage.getItem('2').split(',"""",').length;i++)
            {
                for(j=0;j<item.length;j++)
                {
                    if(Cart[i] === item[j].itemName)
                    {
                        obj.push(item[j]);
                    }
                }
            }

            for(i=0;i<obj.length;i++)
            {
                obj[i].Count = 1;
                obj[i].Checked = true;
                obj[i].RealPrice = obj[i].price;
                for(j=i+1;j<obj.length;j++)
                {
                    if(obj[i].id === obj[j].id)
                    {
                        obj[i].Count = obj[i].Count + 1;
                        obj[i].RealPrice = obj[i].Count * obj[i].price;
                        obj.splice(j,1);
                        j = j - 1;
                    }
                }
            }
            
            localStorage.setItem('3', JSON.stringify(obj));
        }else
        {
            alert("장바구니에 담긴 상품이 없습니다.");
        }
    }

    getListFilter (data, key, value) {
        return data.itemName.filter(function (object) {
            return object[key] === value;
        });
    }

    componentDidMount () {

    }

    render() {
        return (
            <div>
                <div className="Header">
                    <header className="Header">
                        <CartpageNavbar />
                        <HeaderLogo />
                    </header>
                </div>
                <div className="Body">
                    <CartpageName />
                    <div>
                        <CartpageSimpleBody />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cartpage;