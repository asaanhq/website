import clsx from 'clsx'

import styles from './icons.module.css'

export type TIconProps = {
    children?: any[]
    class?: string
}

export const Icon = (props: TIconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class={clsx([props.class, styles.icon])}
        >
            {props.children}
        </svg>
    )
}

const Phone = (props: { class?: string }) => {
    return (
        <Icon class={props.class}>
            <path fill="none" d="M0 0h24v24H0z" />
            {/* eslint-disable-next-line max-len */}
            <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" />
        </Icon>
    )
}

const Email = (props: { class?: string }) => {
    return (
        <Icon class={props.class}>
            <path fill="none" d="M0 0h24v24H0z" />
            {/* eslint-disable-next-line max-len */}
            <path d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z" />
        </Icon>
    )
}
const Address = (props: { class?: string }) => {
    return (
        <Icon class={props.class}>
            <path fill="none" d="M0 0h24v24H0z" />
            {/* eslint-disable-next-line max-len */}
            <path d="M2.9 2.3l18.805 6.268a.5.5 0 0 1 .028.939L13 13l-4.425 8.85a.5.5 0 0 1-.928-.086L2.26 2.911A.5.5 0 0 1 2.9 2.3z" />
        </Icon>
    )
}

Icon.Phone = Phone
Icon.Email = Email
Icon.Address = Address
