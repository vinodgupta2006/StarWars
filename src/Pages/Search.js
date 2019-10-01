import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultData: [],
            searchData: [],
        }
    }

    componentWillMount(){
        this.getSearchData();
    }

    getSearchData = () =>{
        fetch('https://swapi.co/api/planets/').then(response =>  response.json())
        .then(resData => {
           this.setState({ searchData: resData }); //this is an asynchronous function
        });
    }

    onHandleSearch = (e) => {
        const { searchData } = this.state
        const results = searchData.results;
        const search = (e && e.target && e.target.value);
        // const gatResults = results.find(data => data.name === search);
        let gatResults = []
        if(search){
            gatResults = results.filter(data => new RegExp(search, "i").test(data.name));
        }
        this.setState({
            resultData: gatResults
        });
    }

   render() {
       const { resultData } = this.state
       let finalListItems = resultData.map((listItems) =>
       <tr>
            <td>{listItems.name}</td>
            <td>{listItems.population}</td>
            <td>{listItems.rotation_period}</td>
            <td>{listItems.orbital_period}</td>
            <td>{listItems.diameter}</td>
            <td>{listItems.climate}</td>
            <td>{listItems.gravity}</td>
            <td>{listItems.surface_water}</td>
            <td>{listItems.terrain}</td>
        </tr>
    );
      return (
         <div>
            <h2>Search Page</h2>
            <div className="container">
            <div className="row">
                <div className="col-25" />
                <div className="col-75">
                    <input type="text" name="search" placeholder="Search Planet" onChange = {this.onHandleSearch} />
                </div>
            </div>
            </div>
            <div className="row tableStyle">
                {finalListItems.length ? <table align="center">
                    <tr>
                        <th>Planet Name</th>
                        <th>Population</th>
                        <th>Rotation Period</th>
                        <th>Orbital Period</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                        <th>Surface Water</th>
                        <th>Terrain</th>
                    </tr>
                   {finalListItems}
                </table>
                : <table align="center"><tr><td>No search data found</td></tr></table>
                }
            </div>
         </div>
      );
   }
}
export default Search;