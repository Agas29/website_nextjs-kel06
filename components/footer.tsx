import styles from "../src/app/page.module.css";
export default function Footer() {
    return (
        <footer className="text-secondary text-center py-4 mt-5">
            <div className={`container ${styles['custom-text']}`}>
                <p className="mb-0">&copy; 2025 Perbankan Modern. Semua hak dilindungi.</p>
            </div>
        </footer>
    );
}