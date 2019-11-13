import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import M from 'materialize-css';


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

    // update state on input typing
    onCityFormChange = (event) => {
        const previousState = { ...this.state }
        previousState[event.target.name] = event.target.value
        this.setState(previousState)
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

    //render redirect
    renderRedirect = () => {
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
    }
    setRedirect = () => {
        this.setState({ redirect: true })
    }

    render() {
        return (
            <div>

                {this.renderRedirect()}

                <h1>
                    {this.state.name}
                </h1>
                <h4>Restaurants
                    {this.state.restaurants}
                </h4>

                <button onClick={this.deleteCity}>Delete</button>

                {this.state.formToggle
                    ?
                    <button onClick={this.toggleUpdateCityForm}>Update City</button>
                    :
                    <div className="create-form">
                        <button onClick={this.toggleUpdateCityForm}>Back</button>
                        <form onSubmit={this.updateCity}>
                            <input type="text" name="name" placeholder="name" onChange={this.onCityFormChange} />
                            <input type="submit" />
                        </form>
                    </div>}

            </div>
        )
    }
}