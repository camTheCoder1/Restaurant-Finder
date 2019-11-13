import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import M from 'materialize-css';


export default class Cities extends Component {

    state = {
        cityList: [], newCity: {
            name: ''
        },
        newCityForm: false
    }

    componentDidMount() {
        this.getAllCities()
    }

    getAllCities = () => {
        axios.get('/api/cities')
            .then((res) => {
                this.setState({ cityList: res.data })
            })
    }

    toggleNewCityForm = () => {
        this.setState((state) => {
            return { newCityForm: !state.newCityForm }
        })
    }

    handleInputChange = (event) => {
        const copiedCity = { ...this.state.newCity }
        copiedCity[event.target.name] = event.target.value
        this.setState({ newCity: copiedCity })
    }

    submit = (event) => {
        event.preventDefault()

        axios.post('/api/cities', this.state.newCity)
            .then(() => {
                this.setState({ newCityForm: false })
                this.getAllCities()
            })
    }

    render() {
        const allCities = Object.keys(this.state.cityList).map((city) => {
            return (
                <div>
                    <Link key={city._id} to={`/cities/${city._id}`} >
                        {city.name}
                    </Link>
                </div>
            )
        })

        return (
            this.state.newCityForm
                ? <form onSubmit={this.submit}>
                    <label htmlFor="new-city-name">City</label>
                    <input
                        type="text"
                        name="name"
                        id="new-city-name"
                        onChange={this.handleInputChange}
                        value={this.state.newCity.name}
                    />
                    <input type="submit" value="Add City" />
                </form>
                : <div>
                    <div>
                        <button onClick={this.toggleNewCityForm}>Create New City</button>
                    </div>
                    {/* Accessing the value of message from the state object */}
                    <div id="city-list">
                        {allCities}
                    </div>
                </div>
        )
    }
}