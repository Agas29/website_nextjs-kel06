    import 'bootstrap/dist/css/bootstrap.min.css';
    import Link from "next/link";
    import styles from "../page.module.css"; 
    

    export default function Service() {
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

                {/* ✅ BAGIAN SERVICE */}
                <section
                    id="service"
                    className="text-light d-flex align-items-center"
                    style={{
                        height: '100vh',
                        backgroundColor: '#1B3C53',
                        backgroundImage: 'url(/images/RohoBank.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        color: '#D2C1B6',
                        paddingTop: '300px',
                    }}
                >
                    <div className="container text-center">
                        <div
                            className="card border-0 shadow-sm mx-auto p-4"
                            style={{ backgroundColor: '#1B3C53', color: '#D2C1B6', maxWidth: '1200px' }}
                        >
                            <div className="card-body">
                                <h2 className="fw-bold mb-4">
                                    Solusi Perbankan Modern untuk Masa Depan Anda
                                </h2>
                                <p className="mb-5">
                                    Kami menghadirkan berbagai layanan inovatif untuk membantu Anda mengelola keuangan dengan mudah, cepat, dan aman.
                                </p>

                                <div className="row g-4 justify-content-center">
                                    {/* Service 1 */}
                                    <div className="col-md-4">
                                        <div
                                            className="card h-100 border-0 shadow-sm"
                                            style={{ backgroundColor: '#234C6A', color: '#D2C1B6' }}
                                        >
                                            <div className="card-body">
                                                <h5 className="card-title fw-semibold">Digital Banking</h5>
                                                <p className="card-text">
                                                    Akses layanan perbankan kapan saja dan di mana saja melalui aplikasi kami yang aman dan mudah digunakan.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service 2 */}
                                    <div className="col-md-4">
                                        <div
                                            className="card h-100 border-0 shadow-sm"
                                            style={{ backgroundColor: '#456882', color: '#D2C1B6' }}
                                        >
                                            <div className="card-body">
                                                <h5 className="card-title fw-semibold">Kredit & Pembiayaan</h5>
                                                <p className="card-text">
                                                    Dapatkan kemudahan akses pinjaman dan pembiayaan dengan suku bunga kompetitif untuk kebutuhan Anda.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service 3 */}
                                    <div className="col-md-4">
                                        <div
                                            className="card h-100 border-0 shadow-sm"
                                            style={{ backgroundColor: '#234C6A', color: '#D2C1B6' }}
                                        >
                                            <div className="card-body">
                                                <h5 className="card-title fw-semibold">Investasi Aman</h5>
                                                <p className="card-text">
                                                    Nikmati layanan investasi yang memberikan keuntungan optimal dengan perlindungan dana terbaik.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </>
        );
    }
