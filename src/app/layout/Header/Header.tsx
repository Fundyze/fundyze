import { useState } from 'react';

import styles from './Header.module.css';

import Button from '../../../components/Button/Button';

import fundyzeLogo from '../../../assets/fundyze_logo.svg';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for user authentication
  
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
          <li><a className={styles.navLink} href="#">SCI Profitability Simulator</a></li>
        </ul>
      </div>
      {/* Actions section */}
      <div className={styles.actions}>
        {!isLoggedIn ? (
          <>
            <Button disabled={true} variant="primary" size="sm">Login</Button>
            <Button disabled={true} variant="primary" size="sm">Sign Up</Button>
          </>
        ) : (
          <Button variant="tertiary" size="sm">Upgrade to the Pro plan</Button>
        )}
      </div>
    </header>
  );
}