import React from 'react'
import { SummaryContainer, Fullname, SummaryContent } from './Summary.styles'
import Contact from './Contact/Contact'
import { IContact } from './Contact/Contact'

interface ISummary {
    summary: {
        fullname: string
        text: string
    }
    contact: IContact
}

const Summary = ({ summary, contact }: ISummary) => {
    return (
        <SummaryContainer>
            <Fullname>{summary.fullname}</Fullname>
            <SummaryContent>{summary.text}</SummaryContent>
            <Contact contact={contact} />
        </SummaryContainer>
    )
}

export default Summary
