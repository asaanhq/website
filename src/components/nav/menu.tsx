import clsx from 'clsx'

import styles from './menu.module.css'
import { Header } from '../header'
import { Container } from '../container'
import { createSignal, onMount } from 'solid-js'
import { MenuOverlay } from './menu-overlay'

export const Menu = () => {
    const [isOverlayOpen, setIsOverlayOpen] = createSignal(false)

    let menuOverlayRef: undefined | HTMLDivElement

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen())
    }

    return (
        <>
            <button
                class={clsx([
                    { [styles.menuCExpand]: isOverlayOpen() },
                    styles.menuC,
                ])}
                onClick={toggleOverlay}
            >
                {isOverlayOpen() ? 'Close' : 'Menu'}
            </button>

            <MenuOverlay isOpen={isOverlayOpen} />
        </>
    )
}
