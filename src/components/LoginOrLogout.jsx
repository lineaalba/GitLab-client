import React, { Component } from 'react'
import Login from './Login'

export default class LoginOrLogout extends Component {
    constructor() {
        super()
        this.state = { isLoggedIn: false }
    }

    componentDidMount() {
        fetch('https://protected-depths-73018.herokuapp.com/groups', {
            mode: 'no-cors',
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials': true,
                // 'Access-Control-Allow-Origin' : '*',
                // "Content-type": "application/json"
            }
        })
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