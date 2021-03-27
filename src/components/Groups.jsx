/**
 * Component to return real-time issues if the user is logged in
 * and if the user has webhook(s) on projekt(s).
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

import Projects from './Projects'
/**
* Gets props from RealTimeIssues, with the data to return
* and data to determine if the user is loggeed in or not.
*/
const Groups = (props) => {  

    const handleClick = async (id) => {
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
        .then(res => {
            if (res) {
                return (
                    <Projects message={res} />
                )
            }
        })
    }
        


    if (props.message) {
        return (
            <div>
                {props.message.map((group, i) => (
                    <div>

{/* {this.state.data.map((group, i) => (
                    <h4 key={i} onClick={() => this.handleClick(group.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ group.name }</h4>
                ))} */}

<h4 key={i} onClick={() => handleClick(group.id)} style={{cursor: 'pointer', color: '#fff', fontWeight: 'lighter'}}>{ group.name }</h4>
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
}

// Exports
export default Groups
