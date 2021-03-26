/**
 * Component to render database data.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
 const Database = (props) => { 
    
    if (props.message.data) {
        return ( 
            <div>
                <br />
                {props.message.data.map((issue, i) => (
                    <div>
                        <h3 style={{color: '#7FFF00', fontWeight: 'lighter'}}>New issue since last time:</h3>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Project: {issue.project}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Issue: {issue.title}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Action: {issue.action}</h4>
                        <h4 style={{color: '#fff', fontWeight: 'lighter'}}>Description: {issue.description}</h4>
                    </div>
                ))}
            </div>
        )
    } else {
        return (<h3>Nothing has happend since last time!</h3>)
    }
}

export default Database