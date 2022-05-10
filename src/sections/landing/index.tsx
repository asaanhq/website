import { onCleanup, onMount } from 'solid-js'

import { Container } from '../../components/container'

import { debounce } from '../../utils/debounce'

import HeroImgPNG from '../../assets/png/business-deal.png'

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
        debouncedSetHeroBox()
        window.addEventListener('resize', debouncedSetHeroBox)
    })

    onCleanup(() => {
        window.removeEventListener('resize', debouncedSetHeroBox)
    })

    return (
        <Container.Section class={styles.hero} id="landing-section">
            <div class={styles.heroBox} ref={heroBoxRef}>
                <div class={styles.heroMsgC}>
                    <div class={styles.taglineC}>
                        <div id="home-tagline" class={styles.tagline}>
                            Business Made Easy.
                        </div>
                        <div class={styles.taglinePara}>
                            We strive to be a client obsessed company rather
                            than focusing on competition.
                        </div>
                    </div>
                </div>
                <img
                    src={HeroImgPNG}
                    class={styles.heroImg}
                    alt="Asaan's Making business deal easily."
                />
            </div>
        </Container.Section>
    )
}
