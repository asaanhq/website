import { createEffect, createSignal, For, onCleanup, onMount } from 'solid-js'
import { Portal } from 'solid-js/web'
import clsx from 'clsx'

import { Header } from '../header'
import { Container } from '../container'
import { debounce } from '../../utils/debounce'
import { sectionIDs } from '../../constants/ids'
import {
    CONTACT_SECTION,
    HERO,
    SERVICES_SECTION,
    WHY_CHOOSE_US_SECTION,
} from '../../constants/headings'
import { Heading } from '../heading'
import { Landing } from '../../sections/landing'
import { drawBackground } from './utils'

import styles from './menu-overlay.module.css'

export type TMenuOverlayProps = {
    isOpen: () => boolean
    toggle: () => void
}

type TMenuItem = {
    id: string
    text: string
    link: string
    target: string
    targetHeading: string
    heading: {
        main: string
        sub: string
    }
    isLanding: boolean
}

const defaultMenuItemSelected: TMenuItem = {
    heading: {
        main: '',
        sub: '',
    },
    id: '',
    isLanding: false,
    link: '',
    target: '',
    targetHeading: '',
    text: '',
}

const menuItems: TMenuItem[] = [
    {
        id: 'landing',
        text: 'Home',
        link: `#${sectionIDs.landing}`,
        target: sectionIDs.landing,
        targetHeading: sectionIDs.tagline,
        heading: HERO,
        isLanding: true,
    },
    {
        id: 'services',
        text: 'Services',
        link: `#${sectionIDs.services}`,
        target: sectionIDs.services,
        targetHeading: sectionIDs.servicesHeading,
        heading: SERVICES_SECTION,
        isLanding: false,
    },
    {
        id: 'why-us',
        text: 'Why choose us?',
        link: `#${sectionIDs.whyChooseUs}`,
        target: sectionIDs.whyChooseUs,
        targetHeading: sectionIDs.whyChooseUsHeading,
        isLanding: false,
        heading: WHY_CHOOSE_US_SECTION,
    },
    {
        id: 'contact',
        text: 'Get in touch',
        link: `#${sectionIDs.contact}`,
        target: sectionIDs.contact,
        targetHeading: sectionIDs.contactHeading,
        isLanding: false,
        heading: CONTACT_SECTION,
    },
]

type TMenuItemDescriptionsContainerProps = {
    item: TMenuItem
}

const MenuItemDescriptionContainer = (
    props: TMenuItemDescriptionsContainerProps
) => {
    const debouncedDrawBackground = debounce(drawBackground, 60)

    const positionTaglineReplica = () => {
        const tagline = document.querySelector('#' + props.item.targetHeading)
        const taglineReplica = document.querySelector(
            '#tagline-replica'
        ) as HTMLDivElement

        if (tagline && taglineReplica) {
            const rect = tagline.getBoundingClientRect()
            taglineReplica.style.position = 'fixed'
            taglineReplica.style.top = rect.top + window.pageYOffset + 'px'
            taglineReplica.style.left = rect.left + 'px'
        }
    }

    onMount(() => {
        debouncedDrawBackground()
        window.addEventListener('resize', debouncedDrawBackground)
    })

    onCleanup(() => {
        window.removeEventListener('resize', debouncedDrawBackground)
    })

    createEffect(() => {
        if (props.item.isLanding) {
            positionTaglineReplica()
        }
    })

    return (
        <div
            id="menu-item-description"
            class={styles.menuItemDescriptionContainer}
        >
            <canvas id="menu-canvas" style={{ position: 'fixed' }} />
            {props.item.isLanding && (
                <div id="tagline-replica">
                    <Landing.TaglineContainer
                        main={props.item.heading.main}
                        sub={props.item.heading.sub}
                    />
                </div>
            )}
            {!props.item.isLanding && (
                <Heading.Section
                    main={props.item.heading.main}
                    sub={props.item.heading.sub}
                />
            )}
        </div>
    )
}

export const MenuOverlay = (props: TMenuOverlayProps) => {
    const { isOpen, toggle } = props
    const [menuItemHovered, setMenuItemHovered] = createSignal<TMenuItem>(
        defaultMenuItemSelected
    )

    let menuOverlayRef: undefined | HTMLDivElement
    let menuSectionRef: undefined | HTMLDivElement
    let timeout: number | undefined

    const toggleMenuOverlay = () => {
        if (menuOverlayRef) {
            if (isOpen()) {
                menuOverlayRef.style.top = '0'
                menuOverlayRef.style.bottom = '0'
                menuOverlayRef.style.left = '0'
                menuOverlayRef.style.right = '0'
                menuOverlayRef.style.opacity = '1'
                document.body.style.overflow = 'hidden'
            } else {
                timeout = setTimeout(
                    (menuOverlayRef: HTMLDivElement) => {
                        menuOverlayRef.style.top = '100%'
                        menuOverlayRef.style.left = '100%'
                    },
                    300,
                    menuOverlayRef
                )
                menuOverlayRef.style.opacity = '0'
                document.body.style.overflow = 'auto'
            }
        }
    }

    const onMouseEnterLink = (item: TMenuItem) => {
        setMenuItemHovered(item)
    }

    const onMouseLeaveLink = () => {
        setMenuItemHovered(defaultMenuItemSelected)
    }

    const onMenuItemClick = () => {
        toggle()
    }

    const setMenuSectionHeight = () => {
        if (menuSectionRef) {
            menuSectionRef.style.height = `${window.innerHeight - 160}px`
        }
    }

    const debouncedSetMenuSectionHeight = debounce(setMenuSectionHeight, 60)

    createEffect(() => {
        clearInterval(timeout)
        toggleMenuOverlay()
    })

    onMount(() => {
        debouncedSetMenuSectionHeight()
        window.addEventListener('resize', debouncedSetMenuSectionHeight)
    })

    onCleanup(() => {
        window.removeEventListener('resize', debouncedSetMenuSectionHeight)
    })

    return (
        <Portal>
            <div ref={menuOverlayRef} class={clsx([styles.menuOverlay])}>
                <Header isForLightBg isFixed={false} hasBackground={false} />
                <Container.Outer>
                    <Container.Inner>
                        <div class={styles.menuSection} ref={menuSectionRef}>
                            <MenuItemDescriptionContainer
                                item={menuItemHovered()}
                            />
                            <div class={styles.menuItemContainer}>
                                <For each={menuItems}>
                                    {(item) => {
                                        return (
                                            <a
                                                class={styles.menuItemLink}
                                                href={item.link}
                                                onMouseEnter={() =>
                                                    onMouseEnterLink(item)
                                                }
                                                onMouseLeave={onMouseLeaveLink}
                                                onClick={onMenuItemClick}
                                            >
                                                {item.text}
                                            </a>
                                        )
                                    }}
                                </For>
                            </div>
                        </div>
                    </Container.Inner>
                </Container.Outer>
            </div>
        </Portal>
    )
}
