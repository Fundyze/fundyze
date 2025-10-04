import styles from './Footer.module.css';

import fundyzeLogo from '../../../assets/fundyze_logo.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                {/* Logo section */}
                <div className={styles.logoContainer}>
                    <img src={fundyzeLogo} alt="Fundyze Logo" className={styles.logo} />
                    <h1 className={styles.title}>Fundyze</h1>
                </div>
                <hr className={styles.divider} />
                {/* Footer links */}
                <ul className={styles.links}>
                    <li><a href="#" className={styles.link}>About</a></li>
                    <li><a href="#" className={styles.link}>Privacy Policy</a></li>
                    <li><a href="#" className={styles.link}>Terms of Service</a></li>
                    <li><a href="#" className={styles.link}>Cookie Policy</a></li>
                    <li><a href="#" className={styles.link}>Contact Us</a></li>
                </ul>
                <hr className={styles.divider} />
                {/* Copyright section */}
                <p className={styles.copy}>&copy; {new Date().getFullYear()} Fundyze. All rights reserved.</p>
            </div>
        </footer>
    );
}
