import clsx from 'clsx'

import AsaanLogoLight from '../../assets/logo/light/asaan_logo_small.png'
import AsaanLogoDark from '../../assets/logo/dark/asaan_logo_small.png'

import styles from './header.module.css'

export type THeaderProps = {
    isForLightBg?: boolean
}

export const Header = (props: THeaderProps) => {
    const { isForLightBg = false } = props

    return (
        <header
            class={clsx([
                styles.header,
                {
                    [styles.light]: isForLightBg,
                    [styles.dark]: !isForLightBg,
                },
            ])}
        >
            <img
                src={isForLightBg ? AsaanLogoDark : AsaanLogoLight}
                alt="Asaan's Logo"
                class={styles.logo}
            />
            <p class={styles.asaan}>Asaan Contracts Private Limited</p>
        </header>
    )
}
