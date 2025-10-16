import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../src/app/page.module.css";
import LINK from "next/link";

export default function Header() {
    return (
        <header>
            <nav className={`navbar-expand-lg navbar ${styles['background-primary']}`} >
                <div className="container-fluid">
                    <ul className="navbar-nav color-white">
                        <li className="nav-item">
                            <LINK className={`nav-link text-white ${styles.navbarText}`} href="/">Home</LINK>
                        </li>
                        <li className="nav-item">
                            <LINK className={`nav-link text-white ${styles.navbarText}`} href="/services">Services</LINK>
                        </li>
                        <li className="nav-item">
                            <LINK className={`nav-link text-white ${styles.navbarText}`} href="/about">About</LINK>
                        </li>
                        <li className="nav-item">
                            <LINK className={`nav-link text-white ${styles.navbarText}`} href="/contact">Contact</LINK>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}