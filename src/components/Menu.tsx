/* eslint-disable react/react-in-jsx-scope */
import { NavLink } from 'react-router-dom'

import styles from './Menu.module.css'

export function Menu () {
    return(
        <>
            <nav className={styles.menu}>
                <NavLink to='/' title='Home'>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/trabalhos' title='meus trabalho'>
                    <span>Meus trabalhos</span>
                </NavLink>
                <NavLink to='/contato' title='contato'>
                    <span>Contato</span>
                </NavLink>
            </nav>
        </>
    )
}
