import { Container } from '../container'
import AsaanFullLogo from '../../assets/logo/light/asaan_logo.png'

import styles from './footer.module.css'

export const Footer = () => {
    return (
        <Container.Outer>
            <Container.Inner class={styles.inner}>
                <div class={styles.container}>
                    <img
                        src={AsaanFullLogo}
                        alt="Asaan Contracts Private Limited"
                        class={styles.logo}
                    />
                    <p>Made in India</p>
                </div>
            </Container.Inner>
        </Container.Outer>
    )
}
