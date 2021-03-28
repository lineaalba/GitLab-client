/**
 * The Groups component.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
 import React, { Component } from 'react'
 import Projects from './Projects'
 import Notifications from './Notifications'

/**
* Renders groups and projects if the user is logged in.
* It also renders issue notifications that is not yet viewed.
*/
 export default class Groups extends Component {
    constructor() {
        super()
        this.state = { response: '' }
    }

    /**
    * If the user clicks on a group, fetch projects of that group
    */
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

    /**
    * Returns the user's groups, with the possibility to click to get 
    * projects of that group
    */
    renderGroups() {
        console.log(this.props.message)
        if (this.props.message.length > 0) {
            return (
                <div>
                    <h3>Groups</h3>
                    <p>Click on a group to view projects</p>
                    {this.props.message.map((project, i) => (
                        <div>
                            <h4 key={i} onClick={() => this.handleClick(project.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ project.name }</h4>
                        </div>
                    ))}
                </div>
            )
        } else {
            return <h3>You need to login to view your groups, project and issues</h3>
        }

        
    }

    /**
    * Returns the projects of a specific group, if the user has clicked the group and if the group has projects
    * It also returns all the groups and issue notifications that the user has not viewed before
    */
    renderProjects() {
        return (
            <div>
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
