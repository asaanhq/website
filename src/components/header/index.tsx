import clsx from 'clsx'

import AsaanLogoLight from '../../assets/logo/light/asaan_logo_small.png'
import AsaanLogoDark from '../../assets/logo/dark/asaan_logo_small.png'

import styles from './header.module.css'
import { Container } from '../container'

export type THeaderProps = {
    isForLightBg?: boolean
    isFixed?: boolean
    hasBackground?: boolean
}

export const Header = (props: THeaderProps) => {
    const { isForLightBg = false, isFixed = true, hasBackground = true } = props

    const LogoImg = isForLightBg ? AsaanLogoDark : AsaanLogoLight

    return (
        <Container.Outer
            class={clsx([
                styles.container,
                {
                    [styles.fixed]: isFixed,
                    [styles.background]: hasBackground,
                    [styles.light]: isForLightBg,
                    [styles.dark]: !isForLightBg,
                },
            ])}
        >
            <Container.Inner
                class={clsx(styles.header, {
                    [styles.light]: isForLightBg,
                    [styles.dark]: !isForLightBg,
                })}
            >
                <img src={LogoImg} alt="Asaan's Logo" class={styles.logo} />
                <p class={styles.asaan}>Asaan Contracts Private Limited</p>
            </Container.Inner>
        </Container.Outer>
    )
}
