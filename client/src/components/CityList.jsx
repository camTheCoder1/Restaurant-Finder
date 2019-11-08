
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from './styledComponents/Form'



export default class CityList extends Component {

    state = {
        allCities: [],
        newCity: {
            cityName: '',
            state: []
        },
        isAddFormDisp: false
    }

    componentDidMount() {
        axios.get('/api/city')
            .then((res) => {
                this.setState({ allCities: res.data })
            })
    }

    toggleAddForm = () => {
        this.setState((state, props) => {
            return ({ isAddFormDisp: !state.isAddFormDisp })
        })
    }

    handleChange = (evt) => {
        const copyNewCity = { ...this.state.newCity }
        copyNewCity[evt.target.name] = evt.target.value
        this.setState({ newCity: copyNewCity })
    }

    createCity = (evt) => {
        evt.preventDefault()
        axios.post('api/city', {
            cityName: this.state.newCity.cityName,
        }).then(res => {
            const cityList = [...this.state.allCities]
            cityList.unshift(res.data)
            this.setState({
                newCity: {
                    cityName: ''
                },
                isAddFormDisp: false,
                allCities: cityList
            })
        })
    }

    render() {
        const allCities = this.state.allCities.map(city => {
            return (
                <div key={city._id}>
                    <p className='cityLink'><Link to={`/allCities/${city._id}`}>{city.cityName}</Link></p>
                </div>
            )
        })
        return (
            <div>
                <h1>Cities</h1>
                {allCities}
                {this.state.isAddFormDisp ? <button onClick={this.toggleAddForm}>Hide Form</button> :
                    <button onClick={this.toggleAddForm}>Add New City </button>}
                {this.state.isAddFormDisp
                    ?
                    <Form onSubmit={this.createCity}>
                        <div>
                            <label htmlFor="cityName">Name</label>
                            <input
                                id='name' name='name' type='text'
                                onChange={this.handleChange}
                                value={this.state.newCity.cityName}
                            />
                        </div>
                    </Form>
                    : null
                }
                {this.state.allCities.map((city) => {
                    return (<p>{city.cityName}</p>)
                })}
            </div>
        )
    }
}
