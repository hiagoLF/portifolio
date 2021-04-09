// Node Modules
import React, { useState } from 'react';
import Typist from 'react-typist';

// Local Modules
import {
    Container,
    ContactBox,
    ContactHeaderText,
    ContactInvitation,
    InvitationParagraphText,
    ContactInformations,
    WatsappBox,
    InstagramBox,
    Icon,
    ContactInfoText
} from './styles';
import {contactInvitation, watsappNum, instagramName} from '../../data/contact.json'

// Image Modules
import watsappIcon from '../../images/watsapp-icon.png'
import instagramIcon from '../../images/instagram-icon.png'

function Contact() {

    // States
    const [invitationShow, setInvitationShow] = useState(false)
    const [contactBoxOppen, setContactBoxOppen] = useState(false)

    return (
        <Container>


            <ContactBox>
                <ContactHeaderText
                    afterAnimatedIn={() => setInvitationShow(true)}
                >Contato</ContactHeaderText>

                <ContactInvitation>
                    {invitationShow && (
                        <Typist
                            cursor={{
                                show: true,
                                blink: true,
                                element: '_____',
                                hideWhenDone: true,
                                hideWhenDoneDelay: 500,
                            }}
                            avgTypingDelay={15}
                            stdTypingDelay={10}
                            onTypingDone={() => setContactBoxOppen(true)}
                        >
                            {contactInvitation.map((paragraph) => (
                                <InvitationParagraphText>
                                    {paragraph}
                                    <Typist.Delay ms={500} />
                                </InvitationParagraphText>
                            ))}
                        </Typist>
                    )}
                </ContactInvitation>

                <ContactInformations>
                    {contactBoxOppen && (
                        <>
                            <WatsappBox>
                                <Icon src={watsappIcon} />
                                <ContactInfoText>{watsappNum}</ContactInfoText>
                            </WatsappBox>
                            <InstagramBox>
                                <ContactInfoText>{instagramName}</ContactInfoText>
                                <Icon src={instagramIcon} />
                            </InstagramBox>
                        </>
                    )}
                </ContactInformations>

            </ContactBox>
        </Container>
    )
}

export default Contact;