import React from 'react';

import {
    Container,
    ServicesComponents,
    ServicesHeaderText,
    ServicesCards,
    ServiceCardContainer,
    ServiceTitleText,
    ServiceImages,
    ServiceImage,
    ServiceDescription,
} from './styles';
import {usePageContext} from '../../Contexts/PageController'
import { services } from '../../data/service.json'

const completeServices = services.map((service) => {
    const { imagesTitle } = service
    const imagesUri = imagesTitle.map((imageTitle) => {
        const imageUri = require(`../../images/services/${imageTitle}`)
        return imageUri
    })
    return { ...service, imagesUri }
})


function Services() {


    return (
        <Container>
            <ServicesComponents>
                <ServicesHeaderText>Serviços</ServicesHeaderText>
                <ServicesCards>
                    {completeServices.map((service, key) => (
                        <ServiceCardContainer
                            key={key}
                            delay={(key+1)*200}
                        >
                            <ServiceTitleText>{service.title}</ServiceTitleText>
                            <ServiceImages>
                                {service.imagesUri.map((image) => (
                                    <ServiceImage
                                        src={image.default}
                                    />
                                ))}
                            </ServiceImages>
                            <ServiceDescription>{service.description}</ServiceDescription>
                        </ServiceCardContainer>
                    ))}
                </ServicesCards>
            </ServicesComponents>
        </Container>
    );
}

export default Services;