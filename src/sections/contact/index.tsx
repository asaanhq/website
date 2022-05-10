import { Container } from '../../components/container'
import { Heading } from '../../components/heading'
import { sectionIDs } from '../../constants/ids'
import { CONTACT_SECTION } from '../../constants/headings'

import styles from './contact.module.css'

export const Contact = () => {
    return (
        <Container.Outer class={styles.outerContainer} id={sectionIDs.contact}>
            <Container.Inner>
                <Container.Section>
                    <Heading.Section
                        id={sectionIDs.contactHeading}
                        main={CONTACT_SECTION.main}
                        sub={CONTACT_SECTION.sub}
                    />
                </Container.Section>
            </Container.Inner>
        </Container.Outer>
    )
}
