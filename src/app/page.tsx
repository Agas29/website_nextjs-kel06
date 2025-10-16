import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PromoCard from "../../components/promoCard";

export default function Home() {
    return (
        <>
            <Header />
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
            <section className={`py-5 ${styles['background-primary']}`}>
                <div className="container">
                    <h2 className="mb-4 text-white">Promo Terbaru</h2>

                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <PromoCard
                                image="/images/promo1.png"
                                title="Voucher untuk nasabah baru"
                                periode="17 Okt 2025 - 30 Nov 2025"
                            />
                            <span className="text-white"></span>
                            <small className="text-white">* Syarat dan ketentuan berlaku</small>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-4">
                            <PromoCard
                                image="/images/promo2.jpg"
                                title="Voucher untuk nasabah baru"
                                periode="17 Okt 2025 - 30 Nov 2025"
                            />
                            <span className="text-white"></span>
                            <small className="text-white">* Syarat dan ketentuan berlaku</small>

                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <PromoCard
                                image="/images/promo3.jpg"
                                title="Voucher untuk nasabah baru"
                                periode="17 Okt 2025 - 30 Nov 2025"
                            />
                            <span className="text-white"></span>
                            <small className="text-white">* Syarat dan ketentuan berlaku</small>

                        </div>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
