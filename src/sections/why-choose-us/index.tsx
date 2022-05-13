import { For, onMount, onCleanup } from 'solid-js'
import { Card } from '../../components/card'
import { Container } from '../../components/container'
import { Heading } from '../../components/heading'
import { WHY_CHOOSE_US_SECTION } from '../../constants/headings'
import { sectionIDs } from '../../constants/ids'
import { debounce } from '../../utils/debounce'
import { drawBackground } from './utils'

import styles from './why-choose-us.module.css'

const cards = [
    {
        id: '1',
        background: '1.',
        text: `
        From our very inception, we chose to do 
        things differently than our competitors 
        and continue improving our services with
        each passing day.
        `,
        action: 'Different',
    },
    {
        id: '2',
        background: '2.',
        text: `
        We strive to be a client obsessed company
        rather than focusing on competition. We 
        take utmost care for ensuring high standards.`,
        action: 'Commitment',
    },
    {
        id: '3',
        background: '3.',
        text: `
        We are a technology-first company and
        invested heavily in our R&D.`,
        action: 'Technology',
    },
    {
        id: '4',
        background: '4.',
        text: `
        We love what we do and we want to make
        you love what you do. We are passionate
        to work, for our clients
        `,
        action: 'Passionate',
    },
]

export const WhyChooseUs = () => {
    const debouncedDrawBackground = debounce(drawBackground, 60)

    onMount(() => {
        debouncedDrawBackground()
        window.addEventListener('resize', debouncedDrawBackground)
    })

    onCleanup(() =>
        window.removeEventListener('resize', debouncedDrawBackground)
    )
    return (
        <Container.Outer>
            <Container.Inner>
                <canvas class={styles.canvas} id="why-choose-us-canvas" />
                <Container.Section id={sectionIDs.whyChooseUs}>
                    <Heading.Section
                        id={sectionIDs.whyChooseUsHeading}
                        main={WHY_CHOOSE_US_SECTION.main}
                        sub={WHY_CHOOSE_US_SECTION.sub}
                    />
                    <div class={styles.cardContainer}>
                        <For each={cards}>
                            {(item) => (
                                <Card.Container class={styles.card}>
                                    <Card.Body class={styles.cardBody}>
                                        <div class={styles.cardNumber}>
                                            {item.background}
                                        </div>
                                        <div class={styles.cardText}>
                                            {item.text}
                                        </div>
                                    </Card.Body>
                                    <Card.Action>{item.action}</Card.Action>
                                </Card.Container>
                            )}
                        </For>
                    </div>
                </Container.Section>
            </Container.Inner>
        </Container.Outer>
    )
}
