import { JSX } from 'solid-js'

import { Container } from '../../components/container'
import { Heading } from '../../components/heading'
import { sectionIDs } from '../../constants/ids'
import { CONTACT_SECTION } from '../../constants/headings'

import styles from './contact.module.css'
import { Icon } from '../../components/icons'

export const IconText = (props: {
    icon: JSX.Element
    text: string | string[]
}) => {
    const address = Array.isArray(props.text) ? (
        props.text.map((t) => <div>{t}</div>)
    ) : (
        <div>{props.text}</div>
    )

    return (
        <div class={styles.iconText}>
            <div class={styles.icon}>{props.icon}</div>
            <div class={styles.text}>{address}</div>
        </div>
    )
}

export const Contact = () => {
    return (
        <Container.Outer id={sectionIDs.contact}>
            <Container.Inner class={styles.outerContainer}>
                <Container.Section class={styles.section}>
                    <div class={styles.section1}>
                        <Heading.Section
                            id={sectionIDs.contactHeading}
                            main={CONTACT_SECTION.main}
                            sub={CONTACT_SECTION.sub}
                        />
                        <div class={styles.detailsContainer}>
                            <IconText
                                icon={<Icon.Phone />}
                                text="+91-9038851114"
                            />
                            <IconText
                                icon={<Icon.Email />}
                                text="contact@asaan.xyz"
                            />
                            <IconText
                                icon={<Icon.Address />}
                                text={[
                                    'Asaan Contracts Private Limited',
                                    'S.N.Singh Ln, Ramjaipal Nagar',
                                    'Danapur Nizamat, Patna, Bihar - 801503',
                                    'India',
                                ]}
                            />
                        </div>
                    </div>
                    <div class={styles.section2}>
                        <iframe
                            class={styles.maps}
                            // eslint-disable-next-line max-len
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6410.245277745235!2d85.05545328613636!3d25.617260726560456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7772c2352c6a745b!2sAsaan%20Contracts%20Private%20Limited!5e0!3m2!1sen!2sin!4v1652275487630!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style="border:0;"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Container.Section>
            </Container.Inner>
        </Container.Outer>
    )
}
