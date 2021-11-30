import styled from 'styled-components'

const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;

    svg {
        color: rgb(27, 131, 223);
    }

    p {
        margin: 0;
        font-size: 15px;
        line-height: 1.5em;
        margin-bottom: 0;
    }
`

const SocialMediaContainer = styled.div`
    display: flex;
    a {
        margin-right: 6px;
    }

    svg {
        color: rgb(27, 131, 223);
    }
`

export { ContactContainer, ContactItem, SocialMediaContainer }
