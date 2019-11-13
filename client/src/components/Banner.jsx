import React, { Component } from 'react'
import BannerStyle from './styledComponents/BannerStyle'

export default class Banner extends Component {
    render() {
        return (
            <BannerStyle>
                <p>Restaurant Finder</p>
                <p className='rest'>Find a Great Restaurant in your city</p>
            </BannerStyle>
        )
    }
}