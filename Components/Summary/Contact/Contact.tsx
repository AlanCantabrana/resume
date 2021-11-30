import React from 'react'
import Link from 'next/link'
import {
    ContactContainer,
    ContactItem,
    SocialMediaContainer,
} from './Contact.styles'

export interface IContactProps {
    contact: IContact
}

export interface IContact {
    title: string
    list: IField[]
    contactInfo: IField[]
}

interface IField {
    field: string
    text: string
    url?: string
    icon: React.ReactNode
}

const Contact = ({ contact }: IContactProps) => {
    return (
        <ContactContainer>
            {contact.list.map(({ field, icon, text }: IField) => (
                <ContactItem key={field}>
                    {icon} &nbsp; <p>{text}</p>
                </ContactItem>
            ))}
            <SocialMediaContainer>
                {contact.contactInfo.map((item: IField) => (
                    <Link key={item.field} href={item.url || '/'}>
                        <a target="_blank">{item.icon}</a>
                    </Link>
                ))}
            </SocialMediaContainer>
        </ContactContainer>
    )
}

export default Contact
