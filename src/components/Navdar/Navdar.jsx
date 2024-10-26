import React, { useState } from 'react'
import styles from './Navdar.module.css'
import { FaBars } from 'react-icons/fa6'
import { FaHeadSideVirus } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa6";

function Navbar() {

    const [isToggled, setToggled] = useState(false);

    function handleToggled() {
        setToggled(!isToggled)
    }

    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href="/">TAN</a>
                    </div>

                    <ul>
                        <li><a href="https://discord.com/users/878299249601814559"><FaRegAddressCard />Contact</a></li>
                    </ul>
                </div>

                {/* MOblie MEnnu */}
                <FaBars className={styles.bars} onClick={handleToggled} />
                {isToggled ? (
                    <>
                        <ul className={styles.mobile_menu}>
                            <li><a href="https://discord.com/users/878299249601814559"><FaRegAddressCard />Contact</a></li>
                        </ul>
                    </>
                ) : null}
            </div>
        </nav>
    )
}

export default Navbar