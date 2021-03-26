import React, { Component } from 'react'
import Navbar from './navbar/Navbar'

export default class IsLoggedIn extends Component {
    constructor() {
        super()
        this.state = { isLoggedIn: false }
    }

    componentDidMount() {
        fetch(`/groups`)
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