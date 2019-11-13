import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default class SingleCity extends Component {

    state = {
        name: this.name,
        restaurants: [],
        cityForm: true,
        updatedCity: {
            name: ''
        },
        redirectToHome: false,
    }

    refreshList = () => {
        const cityId = this.props.match.params.cityId
        axios.get(`/api/cities/${cityId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }

    updateCity = (event) => {
        event.preventDefault()
        const cityId = this.props.match.params.cityId
        axios.put(`/api/cities/${cityId}`, this.state.updatedCity)
            .then(() => {
                this.refreshList()
            })
    }

    componentDidMount() {
        const cityId = this.props.match.params.cityId
        axios.get(`/api/cities/${cityId}`)
            .then((res) => {
                console.log(res.data)
                const oldState = { ...this.state }
                const newState = Object.assign({}, oldState, res.data)
                this.setState(newState)
            })

        axios.get(`api/restaurants/byCityId/${cityId}`)
            .then((res) => {
                console.log(res.data)
                const oldState = { ...this.state }
                const newState = Object.assign({ restaurants: [] }, oldState, { restaurants: res.data })
                this.setState(newState)
            })
    }


    toggleUpdateCityForm = () => {
        const cityForm = !this.state.cityForm
        this.setState({ cityForm })
    }

    deleteCity = (event) => {
        event.preventDefault()
        const cityId = this.props.match.params.cityId
        axios.delete(`/api/cities/${cityId}`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }

    handleInputChange = (event) => {
        const updatedCity = { ...this.state.updatedCity }
        updatedCity[event.target.name] = event.target.value
        this.setState({ updatedCity: updatedCity })
    }



    render() {
        return (
            this.state.redirectToHome ? <Redirect to="/" /> :
                <div>
                    <div>
                        <h1>{this.state.name}</h1>
                        <h3>Restaurants</h3>
                        {this.state.restaurants.map((restaurant) => {
                            return (
                                <div>
                                    <p>{restaurant.name}</p>
                                </div>)
                        })}
                    </div>
                    <span>
                        <button onClick={this.toggleUpdateCityForm}>
                            {this.state.cityForm ? 'Update City' : 'Hide'}
                        </button>
                        {this.state.cityForm ? null : <form onSubmit={(event) => { this.updateCity(event); this.toggleUpdateCityForm() }}>
                            <input type="text" defaultValue={this.state.name} value={this.state.updatedCity.name} name="name" placeholder="Name" onChange={this.handleInputChange} />
                            <input type="submit" />
                        </form>}
                    </span>
                    <span>
                        <button onClick={this.deleteCity}>Delete</button>
                        <Link to={"/"}>
                            <button>Home</button>
                        </Link>
                    </span>
                </div>

        )
    }
}