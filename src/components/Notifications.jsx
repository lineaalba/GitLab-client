import React, { Component } from 'react'
import Database from './Database'

export default class Notifications extends Component {
    constructor() {
        super()
        this.state = { notifications: [] }
    }

    componentDidMount() {
        fetch(`https://nifty-yalow-9797ba.netlify.app/database`)
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