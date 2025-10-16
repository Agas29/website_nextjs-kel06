import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../page.module.css";
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

            <section className={`${styles.aboutSection}`}>
                <div className="container text-center text-black py-5">
                    <h1 className="display-4 fw-bold" style={{ color: "#1B3C53" }}>
                        Tentang RohoBank
                    </h1>
                    <p className="lead mt-3">RohoBank adalah lembaga keuangan yang berkomitmen untuk memberikan layanan terbaik dengan teknologi terkini, demi mendukung masa depan finansial Anda.</p>
                    <a href="#visi" className={`btn ${styles.aboutButton}`}>Pelajari Lebih Lanjut</a>
                </div>
            </section>

            <section id="visi" className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4 text-dark">Visi & Misi Kami</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className={`p-4 h-100 shadow-sm rounded-4 ${styles.cardHover}`}>
                                <h4 className="fw-bold" style={{
                                    color: "#456882"} }>Visi</h4>
                                <p className="text-muted mt-3 text-start list-unstyled">Menjadi bank digital terpercaya yang memberikan solusi finansial inovatif bagi seluruh masyarakat.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`p-4 h-100 shadow-sm rounded-4 ${styles.cardHover}`}>
                                <h4 className="fw-bold" style={{
                                    color: "#456882"
                                }}>Misi</h4>
                                <ul className="text-muted mt-3 text-start list-unstyled">
                                    <li>✔ Memberikan pelayanan cepat dan aman</li>
                                    <li>✔ Mengutamakan transparansi dan kepercayaan</li>
                                    <li>✔ Menghadirkan solusi finansial berbasis teknologi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="fw-bold mb-5" style={{ color: "#1B3C53" }}>
                        Our Team
                    </h2>

                    <div className="row justify-content-center g-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <img
                                    src="/OrangNgantriDiRohoBank.png"
                                    alt="Gorow's Team"
                                    className="img-fluid rounded-3 mb-3"
                                    style={{ height: "250px", objectFit: "cover", width: "100%" }}
                                />
                                <h5 className="fw-bold" style={{ color: "#234C6A" }}>
                                    Gorow's Team.
                                </h5>
                                <p className="text-muted">Chief Executive Officer</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <img
                                    src="/aca's team.jpg"
                                    alt="Aca's Team"
                                    className="img-fluid rounded-3 mb-3"
                                    style={{ height: "250px", objectFit: "cover", width: "100%" }}
                                />
                                <h5 className="fw-bold" style={{ color: "#234C6A" }}>
                                    Aca's Team
                                </h5>
                                <p className="text-muted">Finance Manager</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <img
                                    src="/team3.jpg"
                                    alt="Gyumelar's Team"
                                    className="img-fluid rounded-3 mb-3"
                                    style={{ height: "250px", objectFit: "cover", width: "100%" }}
                                />
                                <h5 className="fw-bold" style={{ color: "#234C6A" }}>
                                    Gyumelar's Team
                                </h5>
                                <p className="text-muted">Technology Lead</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

