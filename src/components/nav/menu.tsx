import { createSignal } from 'solid-js'
import clsx from 'clsx'

import { MenuOverlay } from './menu-overlay'

import styles from './menu.module.css'

export const Menu = () => {
    const [isOverlayOpen, setIsOverlayOpen] = createSignal(false)

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
