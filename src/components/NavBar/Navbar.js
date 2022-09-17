
import "./NavBar.css"
import { useState } from "react";

const NavBar = () => {

    const [active, setActive] = useState('#');



    return (
        <nav>
            <a
                className={active === '#' ? 'active' : ''}
                onClick={() => setActive('#')}
                href="/#">
                <i className="bi bi-house-door-fill" />
            </a>

            <a
                className={active === '#about' ? 'active' : ''}
                onClick={() => setActive('#about')}
                href="/#about">
                <i className="bi bi-person" />
            </a>
            <a
                className={active === '#skills' ? 'active' : ''}
                onClick={() => setActive('#skills')}
                href="/#skills">
                <i className="bi bi-mortarboard" />
            </a>
            <a
                className={active === '#contact' ? 'active' : ''}
                onClick={() => setActive('#contact')}
                href="/#contact">
                <i className="bi bi-person-lines-fill" />
            </a>
        </nav>
    )
}

export default NavBar;