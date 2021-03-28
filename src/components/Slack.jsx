/**
 * The Slack component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 import React, { Component } from 'react'
 import Confirmation from './Confirmation'
 
 /**
 * .
 */
 export default class Slack extends Component {
    constructor() {
        super()
        this.state = { webhook: '', input: '', added: false }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({...this.state.input, input: e.target.value})
    }

    async onSubmit(e) {
        e.preventDefault()
        console.log(this.state.input)
        await fetch('https://protected-depths-73018.herokuapp.com/slack', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        url: this.state.input,
                        'Access-Control-Allow-Credentials': true,
                    }
                })
                .then(res => res.json())
                .then(res => console.log(res))
                .then(this.setState({ added: true }))
                .then(console.log(this.state.added))
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