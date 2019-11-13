import React, { Component } from 'react'
import axios from 'axios'

export default class Restaurant extends Component {

    state = {
        name: this.name,
        address: this.address,
        hours: this.hours,
        phoneNumber: this.phoneNumber,
        cityId: this.cityId
    }

    componentDidMount() {
        const restaurantId = this.props.match.params.restaurantId
        axios.get(`/api/restaurants/${restaurantId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }

    removeRestaurant() {
        const restaurantId = this.props.match.params.restaurantId
        axios.delete(`/api/restaurants/${restaurantId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }


    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <div>
                    {/* <input type="checkbox" /> */}
                    <button onClick={this.removeRestaurant}>
                    </button>
                </div>
            </div>
        )
    }
}