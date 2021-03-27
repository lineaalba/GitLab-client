import React, { Component } from 'react'
import Projects from './Projects'

export default class HandleClick extends Component {
    constructor(id) {
        super()

        this.state = { id: id, response: '' }
    }

    componentDidMount() {
        fetch(`https://protected-depths-73018.herokuapp.com/projects`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                id: this.state.id,
                'Access-Control-Allow-Credentials': true,
            }
        })
        .then(res => res.json())
        .then(json => this.setState({ response: json }))
        .then(res => console.log(res))
    }

    render() {       
        return (
        <Projects message={this.state.response} />
        )
    }
}
