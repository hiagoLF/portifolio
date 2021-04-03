import React, { useState } from 'react';

// Local Modules
import {
    Container,
    LogoContainer,
    LogoImage,
    LogoText,
    LogoTitle,
    LogoSlogan,
    OptionsContainer,
    OptionPressable
} from './styles';

// Image Modules
import logo from '../../images/logo.png'

const menuOptions = [
    'Home', 'Sobre', 'Serviços', 'Projetos', 'Contato'
]

function Header() {

    // States
    const [selectedOption, setSelectedOption] = useState(0)

    return (
        <Container>

            {/* Logo */}
            <LogoContainer>
                <LogoImage
                    src={logo}
                />
                <LogoText>
                    <LogoTitle>Hiago Leão</LogoTitle>
                    <LogoSlogan>Desenvolvedor Web e Mobile</LogoSlogan>
                </LogoText>
            </LogoContainer>

            {/* Menu */}
            <OptionsContainer>
                {menuOptions.map((option, key) => (
                    <OptionPressable
                        key={key}
                        selected={selectedOption === key}
                        onClick={() => setSelectedOption(key)}
                        href={`#${option}`}
                    >{option}</OptionPressable>
                ))}
            </OptionsContainer>

        </Container>
    )
}

export default Header;