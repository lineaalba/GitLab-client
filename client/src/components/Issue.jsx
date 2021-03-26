/**
 * Component to render socket data.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
const Issue = (props) => {
    if ((props.message.object_kind === 'issue') && (props.isLoggedIn)) {
        return ( 
            <div>
                <h3 style={{color: '#7FFF00', fontWeight: 'lighter'}}>New issue notification!</h3>
                <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Project: {props.message.project.name}</h4>
                <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Issue: {props.message.object_attributes.title}</h4>
                <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Action: {props.message.object_attributes.action}</h4>
                <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Description: {props.message.object_attributes.description}</h4>
            </div>
        )
    } else {
        return (
            <h3>No issue notifications to show</h3>
        )
    }
}

export default Issue