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

            <section className="py-5 bg-light">
                <div className="container text-center">
                    <div className="mb-4">
                        <h1 className="display-4 fw-bold" style={{ color: "#1B3C53" }}>Tentang RohoBank </h1>
                    </div>

                    <p className="lead text-muted mt-4 px-md-5">
                        RohoBank adalah lembaga keuangan modern yang berkomitmen menghadirkan layanan terbaik
                        melalui teknologi mutakhir. Kami mendukung Anda membangu.n masa depan finansial yang lebih cerdas, aman, dan terjangkau.
                    </p>

                    <a href="#visi" className={`btn mt-4 px-4 py-2 ${styles.aboutButton}`} style={{ backgroundColor: "#1B3C53", color: "#fff", borderRadius: "25px"}}>
                        Pelajari Lebih Lanjut
                    </a>
                </div>
            </section>


            <section id="visi" className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4" style={{ color: "#1B3C53" }}>Visi & Misi Kami</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="p-4 h-100 shadow-sm rounded-4 bg-white">
                                <h4 className="fw-bold" style={{color: "#1B3C53" }}>Visi</h4>
                                <p className="text-muted mt-3 text-start list-unstyled">Menjadi bank digital terpercaya yang memberikan solusi finansial inovatif bagi seluruh masyarakat.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-4 h-100 shadow-sm rounded-4 bg-white">
                                <h4 className="fw-bold" style={{ color: "#1B3C53" }}>Misi</h4>
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
                    <h2 className="fw-bold mb-5" style={{ color: "#1B3C53" }}>Take a look at our team!</h2>
                    <div className="row justify-content-center g-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <img
                                    src="/goro.jpg"
                                    className="img-fluid rounded-3 mb-3"
                                    style={{ height: "250px", objectFit: "cover", width: "100%" }}
                                />
                                <h5 className="fw-bold" style={{ color: "#234C6A" }}>Goro's Team</h5>
                                <p className="text-muted">Chief Executive Officer</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <img
                                    src="/aca's team.jpg"
                                    className="img-fluid rounded-3 mb-3"
                                    style={{ height: "250px", objectFit: "cover", width: "100%" }}
                                />
                                <h5 className="fw-bold" style={{ color: "#234C6A" }}>Aca's Team</h5>
                                <p className="text-muted">Finance Manager</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm p-3">
                                <img
                                    src="/agum.jpg"
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

            <section id="message" className="py-5 bg-light" style={{ color: "#456882" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 text-center">
                            <img
                                src="/roho.jpg"
                                alt="CEO"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }} 
                            />
                        </div>
                        <div className="col-md-7 mt-4 mt-md-0">
                            <h2 className="fw-bold mb-5" style={{ color: "#1B3C53" }}>CEO Roho</h2>
                            <p className="mt-3">
                                Roho – Sang legendaris di balik berdirinya RohoBank, yang didirikan dengan semangat untuk menghadirkan
                                solusi keuangan digital yang inklusif, aman, dan inovatif bagi seluruh masyarakat.
                                Kami percaya bahwa teknologi dapat menjadi jembatan menuju masa depan finansial
                                yang lebih cerah dan setara bagi semua orang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={`py-5 ${styles.footerCustom}`}> 
                <div className="container">
                    <div className="row">
                        {/* Alamat */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h5 className="fw-bold">Alamat</h5>
                            <p className="mb-2">
                                <strong>RohoBank :</strong><br />
                                Jl. Lembah Hijau Blok F3 Delta Silicon II<br />
                                Jakarta Selatan, Jawa Barat 17530
                            </p>
                            <p className="mb-0">
                                <strong>RohoBank :</strong><br />
                                Komplek RohoBank Pondok Indah<br />
                                Gedung B Lt 5 Jl. Gaya Motor Raya No 8, Sunter II<br />
                                Jakarta Selatan 14330
                            </p>
                        </div>

                        <div className="col-md-6">
                            <h5 className="fw-bold">Kontak</h5>
                            <p className="mb-1">+62 55 9904 5333</p>
                            <p className="mb-1">+62 25 7777 0983</p>
                            <p className="mb-1">+62 125 8826 9873 (WhatsApp)</p>
                            <p className="mb-3">RohoBank@office.ac.id</p>
                        </div>
                    </div>

                    <div className="text-center mt-4 pt-4 border-top">
                        <p className="mb-0 small">RohoBank's Official Website. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

