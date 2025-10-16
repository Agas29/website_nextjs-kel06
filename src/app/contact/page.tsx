import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            {/* 🔹 Navbar */}
            <header>
                <nav className={`navbar-expand-lg navbar ${styles.navbarC}`}>
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

            {/* 🔹 Banner Section */}
            <section className="position-relative text-center">
                <Image
                    src="/images/background.png"
                    alt="Hubungi Kami"
                    width={1920}
                    height={600}
                    className="img-fluid w-100"
                    style={{ objectFit: "cover", maxHeight: "400px" }}
                />
            </section>

            {/* 🔹 Contact Info Section */}
            <section
                className="py-5"
                style={{ backgroundColor: '#1B3C53', color: '#D2C1B6' }}
            >
                {/* Judul di bawah gambar */}
                <div
                    className="text-center mb-5 fw-bold"
                    style={{
                        fontSize: "2.5rem",
                        textShadow: "2px 2px 10px rgba(0,0,0,0.6)"
                    }}
                >
                    Hubungi Kami Sekarang
                </div>

                {/* Kontak Cards */}
                <div className="container-fluid px-5">
                    <div className="row g-4 justify-content-center">
                        {/* Kantor Pusat */}
                        <div className="col-md-4">
                            <div
                                className="card h-100 border-0 shadow-sm"
                                style={{ backgroundColor: '#234C6A', color: '#D2C1B6' }}
                            >
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-semibold">Kantor Pusat</h5>
                                    <p className="card-text">
                                        Jalan Gaharu Blok F3, Delta Silicon II, Cibatu, Cikarang Selatan, Bekasi 17530
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-4">
                            <div
                                className="card h-100 border-0 shadow-sm"
                                style={{ backgroundColor: '#456882', color: '#D2C1B6' }}
                            >
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-semibold">Email</h5>
                                    <p className="card-text mb-0">support@bankmodern.co.id</p>
                                    <p className="card-text">info@bankmodern.co.id</p>
                                </div>
                            </div>
                        </div>

                        {/* Telepon */}
                        <div className="col-md-4">
                            <div
                                className="card h-100 border-0 shadow-sm"
                                style={{ backgroundColor: '#234C6A', color: '#D2C1B6' }}
                            >
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-semibold">Telepon / WhatsApp</h5>
                                    <p className="card-text mb-0">+62 21 555 1234</p>
                                    <p className="card-text">+62 812 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Penjelasan Sebelum Map */}
            <section
                className="py-5 text-center"
                style={{ backgroundColor: '#FFFFFF', color: '#1B3C53' }}
            >
                <div className="container">
                    <h3 className="fw-bold mb-3">Temukan Kami di Peta</h3>
                    <p className="mb-0" style={{ maxWidth: "700px", margin: "0 auto" }}>
                        Kami berlokasi strategis di kawasan industri Delta Silicon II, Cikarang.
                        Silakan kunjungi kantor pusat kami untuk mendapatkan informasi lebih lanjut
                        atau berdiskusi langsung mengenai layanan perbankan yang Anda butuhkan.
                    </p>
                </div>
            </section>

            {/* 🔹 Google Map Section */}
            <section
                className="py-5 text-center"
                style={{ backgroundColor: '#456882' }}
            >
                <div className="container-fluid px-5">
                    <div
                        style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            border: '3px solid #D2C1B6'
                        }}
                    >
                        <iframe
                            title="Lokasi Kantor Pusat"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.354598698941!2d107.14572727475165!3d-6.348110693641745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b896d7fc649%3A0xe0a940b1f200d008!2sPoliteknik%20Astra!5e0!3m2!1sen!2sid!4v1760602429563!5m2!1sen!2sid"
                            width="100%"
                            height="400"
                            style={{
                                border: 0,
                                display: 'block'
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}
