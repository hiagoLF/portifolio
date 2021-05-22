import React, { useState } from "react";

// Local Modules
import {
  Container,
  LogoContainer,
  LogoImage,
  LogoText,
  LogoTitle,
  LogoSlogan,
  OptionsContainer,
  OptionPressable,
  HiddenMenuButton,
  HamburguerIcon,
  HiddenMenu,
  MenuOption,
  MenuOptionText,
} from "./styles";

// Image Modules
import logo from "../../images/logo.png";
import hamburguerIcon from "../../images/icons/hamburguer-menu.svg";
import closeIcon from "../../images/icons/close.svg";

const menuOptions = ["Home", "Sobre", "Serviços", "Projetos", "Contato"];

function Header() {
  // States
  // const [selectedOption, setSelectedOption] = useState(0)
  const [hiddenMenuOppened, setHiddenMenuOppened] = useState(false);

  return (
    <>
      <Container>
        {/* Logo */}
        <LogoContainer>
          <LogoImage src={logo} />
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
              // selected={selectedOption === key}
              // onClick={() => setSelectedOption(key)}
              href={`#${option}`}
            >
              {option}
            </OptionPressable>
          ))}
        </OptionsContainer>

        {/* Botão Para abrir menu contrátil */}
        <HiddenMenuButton
          onClick={() => setHiddenMenuOppened(!hiddenMenuOppened)}
        >
          <HamburguerIcon
            src={hiddenMenuOppened ? closeIcon : hamburguerIcon}
          />
        </HiddenMenuButton>

        {/* Menu Contrátil */}
        {hiddenMenuOppened && (
          <HiddenMenu>
            {menuOptions.map((option, key) => (
              <MenuOption
                key={key}
                // selected={selectedOption === key}
                onClick={() => setHiddenMenuOppened(false)}
                href={`#${option}`}
              >
                <MenuOptionText>{option}</MenuOptionText>
              </MenuOption>
            ))}
          </HiddenMenu>
        )}
      </Container>
    </>
  );
}

export default Header;
