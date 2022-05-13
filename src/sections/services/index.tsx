import { For, onCleanup, onMount } from 'solid-js'

import { Card } from '../../components/card'
import { Container } from '../../components/container'
import { Heading } from '../../components/heading'
import { SERVICES_SECTION } from '../../constants/headings'
import { sectionIDs } from '../../constants/ids'
import { debounce } from '../../utils/debounce'
import { drawBackground } from './utils'

import styles from './services.module.css'
import WorkersImg from '../../assets/png/workers.png'
import FireExtinguisherImg from '../../assets/png/fire-extinguisher.png'
import CCTVImg from '../../assets/png/security-camera.png'

const cards = [
    {
        id: 'manpower',
        img: WorkersImg,
        alt: 'Manpower',
        text: `
        We provide world class manpower workforce for
        you. Lorem ipsum text. This is filler text
        please don’t take it seriously. Proived few
        lines by yourself.
        `,
        action: 'Manpower',
    },
    {
        id: 'fire',
        img: FireExtinguisherImg,
        alt: 'Fire and Safety',
        text: `
        We provide world class manpower workforce for
        you. Lorem ipsum text. This is filler text
        please don’t take it seriously. Proived few
        lines by yourself.
        `,
        action: 'Manpower',
    },
    {
        id: 'security',
        img: CCTVImg,
        alt: 'Security',
        text: `
        We provide world class manpower workforce for
        you. Lorem ipsum text. This is filler text
        please don’t take it seriously. Proived few
        lines by yourself.
        `,
        action: 'Security',
    },
]

export const Services = () => {
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
                <canvas class={styles.canvas} id="services-canvas" />
                <Container.Section
                    id={sectionIDs.services}
                    class={styles.container}
                >
                    <Heading.Section
                        id={sectionIDs.servicesHeading}
                        main={SERVICES_SECTION.main}
                        sub={SERVICES_SECTION.sub}
                    />
                    <div class={styles.cardContainer}>
                        <For each={cards}>
                            {(item, idx) => (
                                <Card.Container
                                    style={{
                                        transform: `translateY(${
                                            5 * idx()
                                        }rem)`,
                                    }}
                                    class={styles.card}
                                >
                                    <Card.Avatar
                                        src={item.img}
                                        alt={item.alt}
                                    />
                                    <Card.Body>{item.text}</Card.Body>
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
