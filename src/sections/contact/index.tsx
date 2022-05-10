import { Container } from '../../components/container'
import { Heading } from '../../components/heading'

import styles from './contact.module.css'

export const Contact = () => {
    return (
        <Container.Section id="contact-section">
            <Heading.Section main="Get in touch" sub="Just say, Hi!" />
        </Container.Section>
    )
}
