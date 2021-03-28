/**
 * Component to return real-time issues if the user is logged in
 * and if the user has webhook(s) on projekt(s).
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
 import Webhook from './Webhook'
/**
* Gets props from RealTimeIssues, with the data to return
* and data to determine if the user is loggeed in or not.
*/

import React, { Component } from 'react'

export default class Projects extends Component {
   constructor() {
       super()
       this.state = { webhook: '' }
   }

   async addWebhook (id) {
    await fetch('https://protected-depths-73018.herokuapp.com/hook/create', {
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


    render() { 
        if (this.props.message.length > 0) {
            return (
                <div> 
                    <Webhook message={this.state.webhook}/>
                    <br />
                    <h3>Projects</h3>
                    <p>Click on a project to add a webhook</p>
                    {this.props.message.map((project, i) => (
                        <div>
                            <h4 key={i} onClick={() => this.addWebhook(project.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ project.name }</h4>                        
                        </div>
                    ))}
                    <p style={{color: '#fff'}}>______________________________</p>
                </div>
            )
        }  else {
            return (
                <div>
                    <h3>Projects</h3>
                    <h4 style={{color: 'tomato'}}>This group has no projects</h4>
                    <p style={{color: '#fff'}}>______________________________</p>
                </div>
            )
        }
    }
}