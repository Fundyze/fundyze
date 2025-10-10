import { useTranslation } from 'react-i18next';

import styles from './Footer.module.css';

import fundyzeLogo from '../../../assets/fundyze_logo.svg';

export default function Footer() {
    const { t } = useTranslation();

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
                    <li><a href="#" className={styles.link}>{t('footer.about')}</a></li>
                    <li><a href="#" className={styles.link}>{t('footer.privacy')}</a></li>
                    <li><a href="#" className={styles.link}>{t('footer.terms')}</a></li>
                    <li><a href="#" className={styles.link}>{t('footer.cookie')}</a></li>
                    <li><a href="#" className={styles.link}>{t('footer.contact')}</a></li>
                </ul>
                <hr className={styles.divider} />
                {/* Copyright section */}
                <p className={styles.copy}>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
            </div>
        </footer>
    );
}
