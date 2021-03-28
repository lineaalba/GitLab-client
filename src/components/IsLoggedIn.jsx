/**
 * The IsLoggedIn component.
 *
 * @author Filippa Jakobsson
 * @version 1.0
 */

 import React, { Component } from 'react'
 import Navbar from './navbar/Navbar'

 /**
 * Renders correct navbar depending on if the user is logged in or not
 */
export default class IsLoggedIn extends Component {
    constructor() {
        super()
        this.state = { isLoggedIn: false }
    }

    /**
    * Fetching groups to determine if the user is authenticated
    */
    componentDidMount() {
        // trying to fetch groups to determine if the user is logged in
        // TODO: make more dry by adding a specific component that 
        // returns true if logged in
        fetch('https://protected-depths-73018.herokuapp.com/groups', {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
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