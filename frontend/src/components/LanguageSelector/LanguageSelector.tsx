import { useTranslation } from 'react-i18next';
import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className={styles.languageSelector}>
      <button
        className={`${styles.langButton} ${i18n.language === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.langButton} ${i18n.language === 'fr' ? styles.active : ''}`}
        onClick={() => changeLanguage('fr')}
        aria-label="Passer en français"
      >
        FR
      </button>
    </div>
  );
}
