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

const services = [
    {
        "title": "Aplicativos para Celular",
        "imagesTitle": [
            "android.png",
            "ios.png",
        ],
        "description": "Desenvolvimento de aplicativos móveis compatíves tanto com os sistemas android quanto ios."
    },
    {
        "title": "Sites para Internet",
        "imagesTitle": [
            "web.png",
            "chrome.png",
        ],
        "description": "Desenvolvimento de páginas web responsivas com performace otimizada e compatível com os principais navegadores da atualidade"
    },
    {
        "title": "Programas Desktop",
        "imagesTitle": [
            "windows.png",
            "mac.png",
            "linux.png",
        ],
        "description": "Desenvolvimento de programas para computador compatíveis com Windows, Mac e Linux."
    },
    {
        "title": "Serviços Back-End",
        "imagesTitle": [
            "server.png",
        ],
        "description": "Desenvolvimento de servidores remotos para processar e armazenar os dados de suas aplicações"
    },
]

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