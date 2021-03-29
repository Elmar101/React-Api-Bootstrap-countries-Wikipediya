import React,{ Component} from 'react'
import axios from 'axios';
class Country extends Component {
    constructor(props){
        super(props);
        this.state = { country: {} };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get('https://restcountries.eu/rest/v2/name/'+id+'?fullText=true')
             .then(response => this.setState({ country: response.data[0]}) )
    }
    render() {
        const { country} = this.state;
        return (
            <div>
                <h2> {country.nativeName} </h2>
                <hr/>
                <div className="card-columns">
                    <div className='card'>
                        <dl className='row p-2' >
                        <dt className="col-sm-4"> Paytaxt: </dt>
                        <dt className="col-sm-8"> {country.capital} </dt>

                        <dt className="col-sm-4"> Nufuz: </dt>
                        <dd className="col-sm-8"> {country.population} </dd>

                        <dd className="col-sm-4"> Erazi: </dd>
                        <dd className="col-sm-8"> {country.area} </dd>
                        </dl>
                    </div>
                    <div className='card'>
                        <img className="card-img-top" src={country.flag} alt="bayraq"/>
                    </div>
                </div>
            </div>
        )
    }
   
}
export  default Country;