import React, { Component } from 'react'
import io from 'socket.io-client'
import Issue from './Issue'

export default class Home extends Component {
    constructor() {
        super()
        this.state = { data: [], isLoggedIn: false }
    }

    componentDidMount() {
        const socket = io('https://nifty-yalow-9797ba.netlify.app', {transports: ['websocket']})
        socket.on('issue', data => {
            this.setState({ data })
        })

        fetch(`https://nifty-yalow-9797ba.netlify.app/groups`)
        .then(res => res.json())
        .then(json => {
            if (json) {
                this.setState({ isLoggedIn: true })
            }
        })

    }

    render() {       
        return (
        <Issue message={this.state.data} isLoggedIn={this.state.isLoggedIn} />
        )
    }
}
