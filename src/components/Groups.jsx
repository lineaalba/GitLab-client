/**
 * Component to return real-time issues if the user is logged in
 * and if the user has webhook(s) on projekt(s).
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
 import React, { Component } from 'react'
 import Projects from './Projects'
 import Notifications from './Notifications'
 
 export default class Groups extends Component {
    constructor() {
        super()
        this.state = { response: '' }
    }

    async handleClick (id) {
        await fetch(`https://protected-depths-73018.herokuapp.com/projects`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                id: id,
                'Access-Control-Allow-Credentials': true,
            }
        })
        .then(res => res.json())
        .then(json => this.setState({ response: json }))
    }

    renderGroups() {
        return (
            <div>
                {this.props.message.map((project, i) => (
                    <div>
                        <h4 key={i} onClick={() => this.handleClick(project.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ project.name }</h4>
                    </div>
                ))}
            </div>
        )
    }

    renderProjects() {
        return (
            <div>
                <h3>Projects</h3>
                <p>Click on a project to add a webhook</p>
                <Projects message={this.state.response} />
                <br />
                {this.renderGroups()}
                <br />
                <Notifications />
            </div>
        )
    }

     render() { 
        if (!this.state.response) {
            return (  
            (this.renderGroups())
            )
        } else {
            return (
                (this.renderProjects())
            )
        }
     }
 }
 

// import Projects from './Projects'
/**
* Gets props from RealTimeIssues, with the data to return
* and data to determine if the user is loggeed in or not.
*/
// const Groups = (props) => {  
//     const handleClick = async (id) => {
//         await fetch(`https://protected-depths-73018.herokuapp.com/projects`, {
//             method: 'GET',
//             credentials: 'include',
//             headers: {
//                 'Content-Type': 'application/json',
//                 id: id,
//                 'Access-Control-Allow-Credentials': true,
//             }
//         })
//         .then(res => res.json())
//         .then(res => {
//             if (res) {
//                 res.forEach(element => {
//                     return (
//                         <div>
//   <Projects message={element} />
//                         </div>
                      
//                     )
//                 });
               
//             }
//         })
//     }
        



// <h4 key={i} onClick={() => handleClick(group.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ group.name }</h4>
//                        tyle={{color: '#fff', fontWeight: 'lighter'}}>Description: {issue.description}</h4> */}
//                     </div>
//                 ))}
//             </div>
//         )
//     }  else {
//         return (
//             <div>No props</div>
//         )
//     }
// }

// Exports
// export default Groups
