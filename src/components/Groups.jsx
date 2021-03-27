/**
 * Component to return real-time issues if the user is logged in
 * and if the user has webhook(s) on projekt(s).
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

import HandleClick from './HandleClick'
/**
* Gets props from RealTimeIssues, with the data to return
* and data to determine if the user is loggeed in or not.
*/
const Groups = (props) => {  
    if (props.message) {
        return (
            <div>
                {props.message.map((group, i) => (
                    <div>

{/* {this.state.data.map((group, i) => (
                    <h4 key={i} onClick={() => this.handleClick(group.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ group.name }</h4>
                ))} */}

<h4 key={i} onClick={() => HandleClick(group.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ group.name }</h4>
                        {/* <h3 style={{color: '#7FFF00', fontWeight: 'lighter'}}>New issue since last time:</h3> */}
                        {/* <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Name: {data.name}</h4> */}
                        {/* <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Issue: {issue.title}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Action: {issue.action}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Description: {issue.description}</h4> */}
                    </div>
                ))}
            </div>
        )
    }  else {
        return (
            <div>No props</div>
        )
    }
    // TODO: view a list of issues if more than one issue,
    // only the newest issue is returned right now.
    // if ((props.message.object_kind === 'issue') && (props.isLoggedIn)) {
    //     return ( 
    //         <div>
    //             <h3 style={{color: '#7FFF00', fontWeight: 'lighter'}}>New issue notification!</h3>
    //             <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Project: {props.message.project.name}</h4>
    //             <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Issue: {props.message.object_attributes.title}</h4>
    //             <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Action: {props.message.object_attributes.action}</h4>
    //             <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Description: {props.message.object_attributes.description}</h4>
    //         </div>
    //     )
    // } else if (!props.isLoggedIn) {
    //     return (
    //         <h3>Login to get real-time issues</h3>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h3>No issue notifications to show, right now</h3>
    //             <h4 style={{color: '#fff', fontWeight: 'lighter'}}>If you have webhooks on projects, you will get real-time issues here</h4>
    //         </div>
    //     )
    // }
}

// Exports
export default Groups
