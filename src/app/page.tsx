import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header>
                <nav className={`navbar-expand-lg navbar ${styles.navbarC}`} >
                    <div className="container-fluid">
                        <ul className="navbar-nav color-white">
                            <li className="nav-item">
                                <Link className={`nav-link text-white ${styles.navbarText}`} href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-white ${styles.navbarText}`} href="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-white ${styles.navbarText}`} href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-white ${styles.navbarText}`} href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <section className="bg-light py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold">
                                Solusi Perbankan Modern untuk Masa Depan Anda
                            </h1>
                            <p className="lead text-muted">
                                Nikmati kemudahan transaksi digital dengan keamanan terjamin
                                dan layanan 24/7
                            </p>
                            <div className="mt-4">
                                <Link href="/register" className={`btn btn-lg ${styles['custom-btn-primary']}`}>
                                    Buka Rekening Gratis
                                </Link>
                                <Link href="/products" className={`m-2 btn btn-lg ${styles['custom-btn-primary']}`}>
                                    Lihat Produk
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
