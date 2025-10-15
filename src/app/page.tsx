import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
        <header>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/portofolio">Portofolio</Link>
                </li>
                <li>
                    <Link href="/team">Team</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </header>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        </>
    );
}
