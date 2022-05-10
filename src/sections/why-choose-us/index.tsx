import { Container } from '../../components/container'
import { Heading } from '../../components/heading'
import { WHY_CHOOSE_US_SECTION } from '../../constants/headings'
import { sectionIDs } from '../../constants/ids'

import styles from './why-choose-us.module.css'

export const WhyChooseUs = () => {
    return (
        <Container.Outer>
            <Container.Inner>
                <Container.Section id={sectionIDs.whyChooseUs}>
                    <Heading.Section
                        id={sectionIDs.whyChooseUsHeading}
                        main={WHY_CHOOSE_US_SECTION.main}
                        sub={WHY_CHOOSE_US_SECTION.sub}
                    />
                </Container.Section>
            </Container.Inner>
        </Container.Outer>
    )
}
