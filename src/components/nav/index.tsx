import { Container } from '../container'
import { Menu } from './menu'
import styles from './nav.module.css'

export const Nav = () => {
    return (
        <nav class={styles.nav}>
            <Container.Outer>
                <Container.Inner class={styles.navWrapper}>
                    <Menu />
                </Container.Inner>
            </Container.Outer>
        </nav>
    )
}
