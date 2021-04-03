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

const footerElements = [
	{
		"title": "Contato",
		"items": [
			{
				"itemTitle": "Watsapp",
				"value": "(77) 98865 - 5327"
			},
			{
				"itemTitle": "Instagram",
				"value": "@hiagoleaof"
			},
			{
				"itemTitle": "Gmail",
				"value": "hiagolof@gmail.com"
			},
			
		]
	},


	{
		"title": "Meus Outros Projetos",
		"items": [
			{
				"itemTitle": "GitHub",
				"value": "HiagoLF"
			},
			{
				"itemTitle": "LinkedIn",
				"value": "Hiago Leão Ferreira"
			},
			
		]
	},


	{
		"title": "Conhecimentos",
		"items": [
			{
				"itemTitle": "",
				"value": "JavaScripts"
			},
			{
				"itemTitle": "",
				"value": "Node.js"
			},
			{
				"itemTitle": "",
				"value": "ReactJs"
			},
			{
				"itemTitle": "",
				"value": "ReactNative"
			},
			{
				"itemTitle": "",
				"value": "HTML"
			},			{
				"itemTitle": "",
				"value": "CSS"
			},
		]
	}
]

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