import React, { Component } from 'react'
import Navbar from './navbar/Navbar'

export default class IsLoggedIn extends Component {
    constructor() {
        super()
        this.state = { isLoggedIn: false }
    }

    componentDidMount() {
        fetch(`https://protected-depths-73018.herokuapp.com/groups`, {
            // mode: 'no-cors',
            metod: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials': true,
                // 'Access-Control-Allow-Origin' : '*',
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
            <Navbar message={this.state.isLoggedIn} />
        )
    }
}