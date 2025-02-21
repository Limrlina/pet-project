import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
            <nav className={styles.navbar}>
                <ul>
                    <li><Link to="/catalog" className={`${styles.link} ${styles.element}`}>Каталог</Link></li>
                    <li><Link to="/" className={`${styles.link} ${styles.logo}`}>Элимканц</Link></li>
                    <li><Link to="/login" className={`${styles.link} ${styles.element}`}>Войти</Link></li>
                </ul>
            </nav>
    )
};

export default Header;