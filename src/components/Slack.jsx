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
        console.log('e: ' + e)
        this.setState({input: e.target.value})
    }

    onSubmit () {
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
                   <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Slack form</h4>
                   <form onSubmit={this.onSubmit}>
                   <input type="text" name="url" placeholder="Slack url here" onChange={this.handleChange}/><br/>
                   <button>Submit</button>
                   </form>
               </div>
           )
        }
     }
 }