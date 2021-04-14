import axios from 'axios';
import React from 'react';


class axios_Facade extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            id : ''
        }
    }

    getFeaturesData(input_number) {
        return axios.get('https://node.wingeat.com/test-api/features' + input_number);
    }

    getPagesData(input_number) {
        return axios.get('https://node.wingeat.com/test-api/items?page=' + input_number);
    }

    PostData(input_Url, user_Id, user_Password, user_Name) {
        return axios.post('http://192.168.0.38:5000/api/users/'+ input_Url, {email : user_Id, password : user_Password, name : user_Name}, {withCredentials: true}).then(({data}) => { console.log(JSON.stringify(data));});
    }

}

export default axios_Facade;