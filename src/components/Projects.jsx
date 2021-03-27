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
    console.log(props)
    if (props) {
        return (
            <div>
              
              
            </div>
        )
    }  else {
        return (
            <div>No props</div>
        )
    }
}

// Exports
export default Projects