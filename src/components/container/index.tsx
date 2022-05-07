import { JSX } from 'solid-js'
import clsx from 'clsx'

import styles from './container.module.css'

const Outer = (props: JSX.IntrinsicElements['div']) => {
    return (
        <div
            {...props}
            class={clsx(styles.outer, props.class, props.className)}
        />
    )
}

const Inner = (props: JSX.IntrinsicElements['div']) => {
    return (
        <div
            {...props}
            class={clsx(styles.inner, props.class, props.className)}
        />
    )
}

const Section = (props: JSX.IntrinsicElements['div']) => {
    return (
        <div
            {...props}
            class={clsx(styles.section, props.class, props.className)}
        />
    )
}

export const Container = {
    Inner,
    Outer,
    Section,
}
