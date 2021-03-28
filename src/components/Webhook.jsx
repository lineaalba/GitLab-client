/**
 * Component to render new webhooks.
 *
 * @author Filippa Jakobsson
 * @version 1.0.0
 */
 const Webhook = (props) => {
     console.log(props.message)
     if (props.message.length > 0) {
         return(
            <div>
            <h4 style={{color: '#7FFF00', fontWeight: 'lighter'}}>Webhook successfully added!</h4>
        </div>
             
         )
     } else {
         return (
            <div>
                 
             </div>
        )
     }
}

export default Webhook