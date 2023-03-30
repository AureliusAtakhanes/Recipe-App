import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <Link className={styles.left}>
                    Atakan's Recipes
                </Link>
                <ul className={styles.center}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>About</li>
                    <li className={styles.listItem}>Contacts</li>
                    <li className={styles.listItem}>Services</li>
                </ul>
                <div className={styles.right}>
                    <input type="text" placeholder='Search...' />
                    <AiOutlineSearch />
                </div>
            </div>

        </div>
    )
}

export default Navbar
