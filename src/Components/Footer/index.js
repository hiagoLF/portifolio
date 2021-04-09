import React from 'react';

import {
	Container,
	FooterElements,
	Element,
	ElementTitle,
	ElementItems,
	Item,
	Title,
	Value,
} from './styles';
import {footerElements} from '../../data/footer.json'


function Footer() {
	return (
		<Container>
			<FooterElements>
				{footerElements.map((element) => (
					<Element>
						<ElementTitle>{element.title}</ElementTitle>
						<ElementItems>
							{element.items.map((item) => (
								<Item>
									<Title>
										{item.itemTitle}
										{item.itemTitle != '' && (
											<>:&#160;</>
										)}
									</Title>
									<Value>{item.value}</Value>
								</Item>
							))}
						</ElementItems>
					</Element>
				))}
			</FooterElements>
		</Container>
	)
}

export default Footer;