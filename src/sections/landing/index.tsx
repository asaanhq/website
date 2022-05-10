import { onMount } from 'solid-js'

import { Container } from '../../components/container'
import { Header } from '../../components/header'

import { debounce } from '../../utils/debounce'

import HeroImg from '../../assets/png/business-deal.png'
import styles from './landing.module.css'

export const Landing = () => {
    let heroBoxRef: undefined | HTMLDivElement

    const setHeroBoxMaxHeight = () => {
        if (heroBoxRef) {
            const windowHeight = window.innerHeight
            const headerHeight = 80
            const navHeight = 50
            const padding = 50

            heroBoxRef.style.maxHeight = `${
                windowHeight - headerHeight - navHeight - padding
            }px`
        }
    }

    const debouncedSetHeroBox = debounce(setHeroBoxMaxHeight, 60)

    onMount(() => {
        setHeroBoxMaxHeight()
        window.addEventListener('resize', debouncedSetHeroBox)
    })

    return (
        <Container.Section class={styles.hero}>
            <Header />
            <div class={styles.heroBox} ref={heroBoxRef}>
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
                    <img
                        src={HeroImg}
                        class={styles.heroImg}
                        alt="Asaan's Making business deal easily."
                    />
                </div>
            </div>
        </Container.Section>
    )
}
