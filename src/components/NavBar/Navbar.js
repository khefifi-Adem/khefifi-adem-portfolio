import { AiOutlineContacts, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
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
                <AiOutlineHome />
            </a>

            <a
                className={active === '#about' ? 'active' : ''}
                onClick={() => setActive('#about')}
                href="/#about">
                <AiOutlineUser />
            </a>
            <a
                className={active === '#skills' ? 'active' : ''}
                onClick={() => setActive('#skills')}
                href="/#skills">
                <GiSkills />
            </a>
            <a
                className={active === '#contact' ? 'active' : ''}
                onClick={() => setActive('#contact')}
                href="/#contact">
                <AiOutlineContacts />
            </a>
        </nav>
    )
}

export default NavBar;