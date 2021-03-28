/**
 * The Notifications component.
 *
 * @author Filippa Jakobsson
 * @version 1.0
 */

import React, { Component } from 'react'
import Database from './Database'

/**
* Component to render saved issues from database
*/
export default class Notifications extends Component {
    constructor() {
        super()
        this.state = { notifications: [] }
    }

    /**
    * Fetching saved issues
    */
    componentDidMount() {
        fetch('https://protected-depths-73018.herokuapp.com/database', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json) {
                this.setState({ notifications: json })
            }
        })
    }

    render() {
        return(
            <Database message={this.state.notifications} />
        )
    }
}