import React, { Component } from 'react';
import '../styles/style.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchData: [],
        }
    }
    onHandleSearch = (e) => {
        this.setState({
            search: e.target.value,
        });

        fetch('https://swapi.co/api/planets/1/').then(response =>  response.json())
        .then(resData => {
           this.setState({ searchData: resData }); //this is an asynchronous function
           const { searchData } = this.state ;
           console.log('searchDatasearchData')
           console.log(searchData)
        //    if(email === name && psw === birth_year){
        //     this.setState({ isLogin: false,
        //         errorMessage: '',
        //         apiCallMessage: ''
        //     });
        //    } else{
        //     this.setState({
        //         apiCallMessage: '',
        //         errorMessage: 'Email or Password is incorrect', 
        //     });
        //    }
        });
    }

   render() {
       const { search } = this.state
      return (
         <div>
            <h2>Search Page</h2>
            <div class="container">
            <div class="row">
                <div class="col-25" />
                <div class="col-75">
                    <input type="text" name="search" placeholder="search" onChange = {this.onHandleSearch} />
                </div>
            </div>
            </div>
         </div>
      );
   }
}
export default Search;