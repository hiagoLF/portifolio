// Node Modules
import React from 'react';

// Local Modules
import { usePageContext } from '../../Contexts/PageController'
import {
    Container,
    Icon,
} from './styles';

// Image Modules
import nextIcon from '../../images/icons/next.svg'

function NextPageButton() {

    const [nextPage] = usePageContext()

    return (
        <Container>
            <a href={`#${nextPage}`}>
                <Icon src={nextIcon} />
            </a>
        </Container>
    )
}

export default NextPageButton;