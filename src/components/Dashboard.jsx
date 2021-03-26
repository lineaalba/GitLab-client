import React, { Component } from 'react'
import Webhook from './Webhook'
import Notifications from './Notifications'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = { data: [], response: '', webhook: ''}
    }

    async handleClick (id) {
        await fetch(`https://protected-depths-73018.herokuapp.com/projects`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                id: id,
                'Access-Control-Allow-Credentials': true
            }
        })
        .then(res => res.json())
        .then(json => this.setState({ response: json }))
    }

    async addWebhook (id) {
        await fetch(`https://protected-depths-73018.herokuapp.com/hook/create`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                id: id,
                'Access-Control-Allow-Credentials': true,
            }
        })

        .then(res => res.json())
        .then(json => this.setState({ webhook: json}))
    }
           
    componentDidMount() {
        fetch(`https://protected-depths-73018.herokuapp.com/groups`, {
            metod: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Credentials': true
            }
        })
        .then(res => res.json())
        .then(json => this.setState({ data: json }))
    }

    renderGroups() {
        return (
            <div>
                <h3>Groups</h3>
                {this.state.data.map((group, i) => (
                    <h4 key={i} onClick={() => this.handleClick(group.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ group.name }</h4>
                ))}
            </div>
        )
    }

    renderProjects() {
        return (
            <div>
                <Webhook message={this.state.webhook}/>
                <br />
                <h3>Projects</h3>
                <p>Click on a project to add a webhook</p>
                {this.state.response.map((project, i) => (
                    <h4 key={i} onClick={() => this.addWebhook(project.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ project.name }</h4>
                ))}
                <br />
                {this.renderGroups()}
                <br />
                <Notifications />
            </div>
        )
    }

    render() {   
        if (this.state.data.length > 0 && !this.state.response)  {
            return (this.renderGroups())
        } else if (this.state.response) {
            return (this.renderProjects())      
        } else {
            return <h4 style={{color: '#fff', fontWeight: 'lighter'}}>You need to login to view your groups</h4>
        }
    }
}
