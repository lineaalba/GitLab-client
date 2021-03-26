/**
 * Component to render new webhooks.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
 const Webhook = (props) => {
     if (props.message === '') {
         return(
             <div>
                 
             </div>
         )
     } else {
         return (
            <div>
                <h4 style={{color: '#7FFF00', fontWeight: 'lighter'}}>Webhook successfully added!</h4>
            </div>
        )
     }
}

export default Webhook