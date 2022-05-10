import styles from './heading.module.css'

export type TSectionHeadingProps = {
    main: string
    sub: string
    id?: string
}

const Section = (props: TSectionHeadingProps) => {
    const { main, sub, id } = props

    return (
        <div class={styles.container}>
            <h1 id={id} class={styles.main}>
                {main}
            </h1>
            <h4 class={styles.sub}>{sub}</h4>
        </div>
    )
}

export const Heading = {
    Section,
}
