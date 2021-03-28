/**
 * Component to return real-time issues if the user is logged in
 * and if the user has webhook(s) on projekt(s).
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */

/**
* Gets props from RealTimeIssues, with the data to return
* and data to determine if the user is loggeed in or not.
*/
const Projects = (props) => {  
    console.log(props.message)
    if (props.message) {
        return (
            <div>
                {props.message.map((project, i) => (
                    <div>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Project: {project.name}</h4>
                    </div>
             ))}
            </div>
        )
    }  else {
        return (
            <h3 style={{color: '#fff', fontWeight: 'lighter'}}>No projects</h3>
        )
    }
}

// Exports
export default Projects