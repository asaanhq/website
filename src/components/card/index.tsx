import clsx from 'clsx'
import { splitProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'

import styles from './card.module.css'

export type TContainerProps = JSX.IntrinsicElements['div']
export type TBodyProps = JSX.IntrinsicElements['div']
export type TActionProps = JSX.IntrinsicElements['div']
export type TAvatarProps = JSX.IntrinsicElements['img']

export type TCard = {
    Container: (props: TContainerProps) => JSX.Element
    Body: (props: TBodyProps) => JSX.Element
    Action: (props: TActionProps) => JSX.Element
    Avatar: (props: TAvatarProps) => JSX.Element
}

const Container = (props: TContainerProps) => {
    const [local, others] = splitProps(props, ['children', 'class'])

    return (
        <div class={clsx(styles.container, local.class)} {...others}>
            {local.children}
        </div>
    )
}

const Body = (props: TBodyProps) => {
    const [local, others] = splitProps(props, ['children', 'class'])

    return (
        <div class={clsx(styles.body, local.class)} {...others}>
            {local.children}
        </div>
    )
}

const Action = (props: TActionProps) => {
    const [local, others] = splitProps(props, ['children', 'class'])

    return (
        <div class={clsx(styles.action, local.class)} {...others}>
            {local.children}
        </div>
    )
}

const Avatar = (props: TAvatarProps) => {
    const [local, others] = splitProps(props, ['class'])

    return <img class={clsx(styles.avatar, local.class)} {...others} />
}

export const Card: TCard = { Container, Body, Action, Avatar }
