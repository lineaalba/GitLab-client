import React, { Component } from 'react'
import io from 'socket.io-client'
import Issue from './Issue'

export default class Home extends Component {
    constructor() {
        super()
        this.state = { data: [], isLoggedIn: false }
    }

    componentDidMount() {
        const socket = io('https://protected-depths-73018.herokuapp.com/', {transports: ['websocket']})
        socket.on('issue', data => {
            this.setState({ data })
        })

        fetch(`https://protected-depths-73018.herokuapp.com/groups`)
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
