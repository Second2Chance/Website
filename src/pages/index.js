import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section, GoogleMap, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward, MdLabelOutline } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Second Chance
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:title"} content={"Second Chance"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"} />
		</Helmet>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			background="#7878B6"
			sm-align-items="center"
			quarkly-title="Logo"
		>
			<Override slot="SectionContent" sm-align-items="center" sm-position="static" />
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" sm-justify-content="center" sm-align-items="center" />
					<Image
						width="200px"
						height="200px"
						src="https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Logo%20v0.4%20-%20No%20background.png?v=2021-01-31T14:54:30.094Z"
						sm-display="inline-block"
						sm-height="200px"
						sm-width="200px"
					/>
					<Text
						as="h1"
						font="--headline1"
						md-font="--headline2"
						margin="10px 0"
						sm-border-color="--color-light"
					>
						Second Chance
					</Text>
					<Text
						color="--lightD2"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
						sm-border-color="--color-light"
					>
						Te ayudamos. Paga lo que quieras.
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					QUienes somos?
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="--color-light"
			quarkly-title="Nosotros"
		>
			<Stack>
				<StackItem width="50%" lg-width="100%" lg-order="2">
					<Override slot="StackItemContent" text-align="center" />
					<Stack>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Steve%20Jobs%20contento%20-%20Dondo.png?v=2021-01-31T21:54:43.708Z) 50% 0/cover no-repeat"
								border-radius="50%"
								sm-background="url(https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Steve%20Jobs%20contento%20-%20Dondo.png?v=2021-01-31T21:54:43.708Z) 50% 0/cover no-repeat"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Lucas
							</Text>
							<Text color="--grey" margin="0">
								Dondo
							</Text>
						</StackItem>
						<StackItem width="50%" sm-width="100%">
							<Override slot="StackItemContent" background="--color-lightD1" padding="20px" flex-direction="column" />
							<Box
								width="170px"
								height="170px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Steve%20Jobs%20contento%20-%20Gruden.png?v=2021-01-31T21:55:03.954Z) 50% 0/cover no-repeat"
								border-radius="50%"
								sm-background="url(https://uploads.quarkly.io/60025714e84d4f001e3925cd/images/Steve%20Jobs%20contento%20-%20Gruden.png?v=2021-01-31T21:55:03.954Z) 50% 0/cover no-repeat"
							/>
							<Text as="h3" font="--headline3" margin="20px 0 5px 0">
								Lucas
							</Text>
							<Text color="--grey" margin="0">
								Gruden
							</Text>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" />
					<Text as="h2" font="--headline2" md-font="--headline3" margin="0">
						Somos Lucas y Lucas, y te queremos ayudar en lo que necesites sobre tecnología, y que vos pongas el precio según la calidad de nuestro servicio.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="#7878B6"
			display="flex"
			flex-direction="column"
			sm-color="--light"
			sm-border-color="--color-light"
			quarkly-title="Zona"
		>
			<Override slot="SectionContent" color="--light" border-color="--color-light" />
			<Text
				as="h1"
				margin="0px"
				font="--headline1"
				md-font="--headline2"
				color="--light"
				max-width="1000px"
				sm-border-color="--color-light"
				sm-color="--light"
				border-color="--color-light"
			>
				En que zona nos encontramos?
			</Text>
			<GoogleMap query="san isidro" />
		</Section>
		<Section color="--dark" background="--color-light" quarkly-title="Servicios">
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Algunos servicios
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="8px"
					left="6px"
					size="36px"
					color="--primary"
					category="md"
					icon={MdLabelOutline}
					sm-top="61px"
					sm-left="-37px"
					sm-right="auto"
					sm-bottom="auto"
					sm-width="36px"
					sm-height="36px"
					right="auto"
					bottom="auto"
					width="36px"
					height="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					SC Transfer
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Celular nuevo? Queres pasar tus fotos, videos, recuerdos, aplicaciones, datos, chats y contactos? Este es el servicio que buscas!
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="8px"
					left="6px"
					size="36px"
					color="--primary"
					category="md"
					icon={MdLabelOutline}
					sm-top="61px"
					sm-left="-37px"
					sm-right="auto"
					sm-bottom="auto"
					sm-width="36px"
					sm-height="36px"
					right="auto"
					bottom="auto"
					width="36px"
					height="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					SC Optimization
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Te anda lento el celular? Ya no lo aguantas mas? Nosotros tenemos la solución.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="8px"
					left="6px"
					size="36px"
					color="--primary"
					category="md"
					icon={MdLabelOutline}
					sm-top="61px"
					sm-left="-37px"
					sm-right="auto"
					sm-bottom="auto"
					sm-width="36px"
					sm-height="36px"
					right="auto"
					bottom="auto"
					width="36px"
					height="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					SC Activation
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Nescesitas activar Windows, Office o algun producto que requiera una activacion? Nosotros lo hacemos!
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
			>
				<Icon
					position="absolute"
					top="8px"
					left="6px"
					size="36px"
					color="--primary"
					category="md"
					icon={MdLabelOutline}
					sm-top="61px"
					sm-left="-37px"
					sm-right="auto"
					sm-bottom="auto"
					sm-width="36px"
					sm-height="36px"
					right="auto"
					bottom="auto"
					width="36px"
					height="36px"
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					SC Recovery
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					Borraste un archivo que no querias de tu computadora o celular? No te preocupes nosotros los recuperamos!
				</Text>
			</Box>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			background="#7878B6"
			quarkly-title="Cafecito"
		>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Dónde pagarnos?
			</Text>
			<Components.EmbedHTML />
		</Section>
		<Section padding="60px 0" sm-padding="40px 0">
			<SocialMedia telegram="https://t.me/SecondChance_TecnoAyuda" instagram="https://www.instagram.com/secondchance.tecnoayuda/" whatsapp="https://wa.me/message/ITNHZVQCOJ2IH1)">
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});