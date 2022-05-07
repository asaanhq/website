import styles from './header.module.css'

import AsaanLogo from '../../assets/logo/light/asaan_logo_small.png'

export const Header = () => {
    return (
        <header class={styles.header}>
            <img src={AsaanLogo} alt="Asaan's Logo" class={styles.logo} />
            <p class={styles.asaan}>Asaan Contracts Private Limited</p>
        </header>
    )
}
