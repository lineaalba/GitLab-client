import React, { Component } from 'react'
import Navbar from './navbar/Navbar'

export default class IsLoggedIn extends Component {
    constructor() {
        super()
        this.state = { isLoggedIn: false }
    }

    componentDidMount() {
        fetch(`https://nifty-yalow-9797ba.netlify.app/groups`)
        .then(res => res.json())
        .then(json => {
            if (json) {
                this.setState({ isLoggedIn: true })
            }
        })
    }

    render() {
        return(
            <Navbar message={this.state.isLoggedIn} />
        )
    }
}