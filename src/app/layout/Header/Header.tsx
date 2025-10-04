import { useState } from 'react';

import styles from './Header.module.css';

import Button from '../../../components/Button/Button';

import fundyzeLogo from '../../../assets/fundyze_logo.svg';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Example state for user authentication
  
  return (
    <header className={styles.header}>
      {/* Logo section */}
      <div className={styles.logoContainer}>
          <img src={fundyzeLogo} alt="Fundyze Logo" className={styles.logo} />
          <h1 className={styles.title}>Fundyze</h1>
      </div>
      {/* Content section */}
      <div className={styles.content}>
          {/* Future content such as navigation links or user profile can go here */}
      </div>
      {/* Actions section */}
      <div className={styles.actions}>
        {!isLoggedIn ? (
          <>
            <Button variant="primary" size="sm">Login</Button>
            <Button variant="secondary" size="sm">Sign Up</Button>
          </>
        ) : (
          <Button variant="tertiary" size="sm">Upgrade to the Pro plan</Button>
        )}
      </div>
    </header>
  );
}