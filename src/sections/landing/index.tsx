import { Container } from '../../components/container'
import { Header } from '../../components/header'

import HeroImg from '../../assets/png/hero-img.png'
import styles from './landing.module.css'

export const Landing = () => {
    return (
        <Container.Section class={styles.hero}>
            <Header />
            <div class={styles.heroBox}>
                <div class={styles.heroMsgC}>
                    <div class={styles.taglineC}>
                        <div class={styles.tagline}>Business Made Easy.</div>
                        <div class={styles.taglinePara}>
                            We strive to be a client obsessed company rather
                            than focusing on competition.
                        </div>
                    </div>
                </div>
                <div class={styles.heroImgC}>
                    <img src={HeroImg} class={styles.heroImg} alt="Asaan's" />
                </div>
            </div>
        </Container.Section>
    )
}
