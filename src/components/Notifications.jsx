import React, { Component } from 'react'
import Database from './Database'

export default class Notifications extends Component {
    constructor() {
        super()
        this.state = { notifications: [] }
    }

    componentDidMount() {
        fetch('https://protected-depths-73018.herokuapp.com/database', {
            mode: 'no-cors',
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