import React, { Component } from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
import M from 'materialize-css';


export default class Restaurants extends Component {

    state = {
        restaurants: [],

    }

    componentDidMount() {
        this.refreshList()
    }

    refreshList = () => {
        axios.get('/api/restaurants')
            .then((res) => {
                this.setState({ restaurants: res.data })
            })
    }

    render() {
        const restaurants = this.props.restaurants
        console.log(restaurants)
        const restaurantComponents = restaurants.map((restaurant, index) => {
            return <Restaurant
                name={this.name}
                address={this.address}
                hours={this.hours}
                phoneNumber={this.phoneNumber}
            />

        });
        return (
            <div>
                {restaurantComponents}
            </div>
        )
    }
}