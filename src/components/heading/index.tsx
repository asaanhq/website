import styles from './heading.module.css'

export type TSectionHeadingProps = {
    main: string
    sub: string
    id?: string
}

const Section = (props: TSectionHeadingProps) => {
    return (
        <div class={styles.container}>
            <h1 id={props.id} class={styles.main}>
                {props.main}
            </h1>
            <h4 class={styles.sub}>{props.sub}</h4>
        </div>
    )
}

export const Heading = {
    Section,
}
