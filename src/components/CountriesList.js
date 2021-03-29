import React, { Component } from 'react'
import CountryCard from './CountryCard';
import axios from 'axios';
class  CountriesList extends Component {
    constructor(props) {
        super(props);
        this.state={ countries: []};
    }

    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => this.setState({ countries: response.data }))
    }
    searchCountryHandler =(e)=> {
        axios.get('https://restcountries.eu/rest/v2/name/'+e.target.value)
            .then(response => this.setState({countries: response.data}))
    }
    render() {

        const countries = this.state.countries.map( country => <CountryCard country={country} key={country.numericCode}/> )

        return (
            <div>
               
                <input type='text' name='search' className="form-control mb-2" placeholder='ulke ara'
                       onChange = {this.searchCountryHandler}
                />
              
                <div className='card-columns'>
                    { countries }
                </div>
                
            </div>
        )
    }
}
export default  CountriesList;
