/**
 * The Slack component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

 import React, { Component } from 'react'
 
 /**
 * .
 */
 export default class Slack extends Component {
    constructor() {
        super()
        this.state = { webhook: '', input: '' }
    }
 
    /**
     * Fetching slack 
     */
    // componentDidMount() {
    //     fetch('https://protected-depths-73018.herokuapp.com/slack', {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Credentials': true,
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(json => this.setState({ data: json }))
    // }

    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.setState({input: e.target.value})
    }

    onSubmit (e) {
        e.preventDefault()
        console.log(this.state.input)
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
                   <form onSubmit={this.onSubmit}>
                   <input type="text" name="url" placeholder="Slack url here" onChange={this.handleChange}/><br/>
                   <button>Save</button>
                   </form>
               </div>
           )
        }
     }
 }