import { Portal } from 'solid-js/web'
import clsx from 'clsx'

import { Header } from '../header'
import { Container } from '../container'

import styles from './menu-overlay.module.css'
import { createEffect } from 'solid-js'

export type TMenuOverlayProps = {
    isOpen: () => boolean
}

export const MenuOverlay = (props: TMenuOverlayProps) => {
    const { isOpen } = props

    let menuOverlayRef: undefined | HTMLDivElement
    let timeout: number | undefined

    const toggleMenuOverlay = () => {
        if (menuOverlayRef) {
            if (isOpen()) {
                menuOverlayRef.style.top = '0'
                menuOverlayRef.style.bottom = '0'
                menuOverlayRef.style.left = '0'
                menuOverlayRef.style.right = '0'
                menuOverlayRef.style.opacity = '1'
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
            }
        }
    }

    createEffect(() => {
        clearInterval(timeout)
        toggleMenuOverlay()
    })

    return (
        <Portal>
            <div ref={menuOverlayRef} class={clsx([styles.menuOverlay])}>
                <Container.Outer>
                    <Container.Inner>
                        <Header isForLightBg />
                    </Container.Inner>
                </Container.Outer>
            </div>
        </Portal>
    )
}
