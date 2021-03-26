import React, { Component } from 'react'
import Login from './Login'

export default class LoginOrLogout extends Component {
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
            <Login message={this.state.isLoggedIn} />
        )
    }
}