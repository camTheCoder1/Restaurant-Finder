import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


export default class Cities extends Component {

    state = {
        cityList: [],
        newShowForm: true,
        newCity: {
            name: ''
        }
    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        axios.get('/api/cities')
            .then((res) => {
                this.setState({ cityList: res.data })
            })
    }

    createNewCity = (event) => {
        event.preventDefault()

        axios.post('/api/cities', this.state.newCity)
            .then(() => {
                this.refreshList()
            })
    }

    toggleNewCityForm = () => {
        const newCityForm = !this.state.newCityForm
        this.setState({ newCityForm })
    }

    handleInputChange = (event) => {
        const newCity = { ...this.state.newCity }
        newCity[event.target.name] = event.target.value
        this.setState({ newCity: newCity })
    }

    render() {
        const allCities = Object.keys(this.state.cityList).map((city) => {
            return (
                <div>
                    <h2><Link to={`/${city._id}`} >
                        {city.name}
                    </Link></h2>

                </div>
            )
        })

        return (
            <div>
                <h1>Cities</h1>
                <div>
                    {allCities}
                </div>
                <span>
                    <button onClick={this.toggleNewCityForm}>
                        {this.state.newCityForm ? 'New City' : 'Hide'}
                    </button>
                    {this.state.newCityForm ? null : <form onSubmit={(event) => { this.createNewCity(event); this.toggleNewCityForm() }}>
                        <input
                            type="text"
                            name="name" placeholder="Name"
                            onChange={this.handleInputChange} />
                        <input type="submit" />
                    </form>}
                </span>
            </div>
        )
    }
}