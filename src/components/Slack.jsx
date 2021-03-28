/**
 * The Slack component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 import React, { Component } from 'react'
 import Confirmation from './Confirmation'
 
 /**
 * Renders a input field for the user to fill in with Slack webhook url to get notifications to Slack
 */
 export default class Slack extends Component {
    constructor() {
        super()
        this.state = { webhook: '', input: '', added: false }
    }
     
    /**
    * Set input value to state
    */
    handleChange = (e) => {
        e.preventDefault()
        this.setState({...this.state.input, input: e.target.value})
    }

    /**
    * Posts input value and project id and sets state added to true to get confirmation message
    */
    async onSubmit(e) {
        // TODO: Remove form when user has clicked send
        e.preventDefault()
        await fetch('https://protected-depths-73018.herokuapp.com/slack', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify({ url: this.state.input, id: this.props.id }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true,
                    }
                })
                .then(res => res.json())
                .then(res => console.log(res))
                .then(this.setState({ added: true }))
    }
 
     render() { 
        if (this.props.message === '') {
            return(
                <div>
                    
                </div>
            )
        } else {
            return (
               <div>
                   <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Add Slack webhook url to get issue notifications</h4>
                   <form onSubmit={(e) => this.onSubmit(e)}>
                   <input type="text" name="url" placeholder="Slack url here" onChange={(e) => this.handleChange(e)}/><br/>
                   <button>Save</button>
                   </form>
                   <div>
                       <Confirmation message={this.state.added} />
                   </div>
               </div>
           )
        }
     }
 }
