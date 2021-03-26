import React from 'react'
import { MenuItemsLogin, MenuItemsLogout } from './MenuItems'
import './Navbar.css'

const Navbar = (props) => {
    if (props.message) {
        return (
            <nav className='navbarItems'>
                {MenuItemsLogout.map((item, index) => {
                    return (
                        <ul key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </ul>
                    )
                })}
            </nav>
        )
    } else {
        return (
            <nav className='navbarItems'>
                {MenuItemsLogin.map((item, index) => {
                    return (
                        <ul key={index}>
                            <a className={item.cName} href={item.url}>{item.title}</a>
                        </ul>
                    )
                })}
            </nav>
        )
    }
}

export default Navbar

// export default class Navbar extends Component {
//     render() {
//         return(
//             <nav className='navbarItems'>
//                 {MenuItems.map((item, index) => {
//                     return (
//                         <ul key={index}>
//                             <a className={item.cName} href={item.url}>{item.title}</a>
//                         </ul>
//                     )
//                 })}
//             </nav>
//         )
//     }
// }
