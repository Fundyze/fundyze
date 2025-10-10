import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.css';

import Button from '../../../components/Button/Button';
import LanguageSelector from '../../../components/LanguageSelector/LanguageSelector';

import fundyzeLogo from '../../../assets/fundyze_logo.svg';

export default function Header() {
    const [isLoggedIn] = useState(false); // Example state for user authentication
    const { t } = useTranslation();

  return (
    <header className={styles.header}>
      {/* Logo section */}
      <a href='/' className={styles.logoContainer}>
          <img src={fundyzeLogo} alt="Fundyze Logo" className={styles.logo} />
          <h1 className={styles.title}>Fundyze</h1>
      </a>
      {/* Content section */}
      <div className={styles.content}>
        <ul className={styles.navList}>
          <li><a className={styles.navLink} href="#">{t('header.nav.sciSimulator')}</a></li>
        </ul>
      </div>
      {/* Actions section */}
      <div className={styles.actions}>
        <LanguageSelector />
        {!isLoggedIn ? (
          <>
            <Button disabled={true} variant="primary" size="sm">{t('header.actions.login')}</Button>
            <Button disabled={true} variant="primary" size="sm">{t('header.actions.signUp')}</Button>
          </>
        ) : (
          <Button variant="tertiary" size="sm">{t('header.actions.upgrade')}</Button>
        )}
      </div>
    </header>
  );
}