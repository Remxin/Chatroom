import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const logout = async () => {
        try {
            const res = await fetch('http://localhost:5000/logout', {
                credentials: 'include'
            });
            const data = res.json();
            console.log(`logout data: ${data}`)
            setUser(null);

        } catch (err) {
            console.log(err)
        }
    }
    const menu = user ? <SignedInMenu logout={logout}/> : <SignedOutMenu/>;
    return (
        <>
            <nav className="blue">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">Chat app</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                       {menu}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                {menu}
            </ul>
        </>

    )
}

export default Navbar
