import {
	Box,
	Flex,
	Text,
	HStack,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'

const items = [
	{ label: 'Movies', href: '/movies' },
];

function NavItem(props) {
	const { children, href, large } = props;
	return (
		<NavLink to={href}>
		<HStack
			spacing="2"
			paddingX="3"
			paddingY={large ? '5' : '2.5'}
			rounded="lg"
			_hover={{ color: 'sage.base' }}
			_activeLink={{ bg: 'maincolor.midbg', border: '1px solid', borderColor: 'maincolor.bordergray' }}
		>
			<Text fontFamily="heading">{children}</Text>
		</HStack>
		</NavLink>
	);
}

function DesktopNavItemGroup(props) {
	return (
		<HStack as="nav" aria-label="Main navigation" spacing="8" {...props}>
		{items.map((item) => (
			<NavItem
			key={item.label}
			href={item.href}
			>
			{item.label}
			</NavItem>
		))}
		</HStack>
	);
}

function Headshot() {
	return (
		<Flex flexWrap="nowrap" gap="5px" justifyContent="flex-start" alignItems="center" fontSize="25px" fontWeight="600">
			<Link to="/">
				Dababy movies
			</Link>
		</Flex>
	);
}

export default function Navigation() {
  return (
    <Box as="header" display="flex" justifyContent="space-between" alignContent="center" minHeight="73px" fontSize="18px" color="rgb(210, 211, 215)" backgroundColor="rgb(32, 33, 36)" padding="0 clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" borderBottom="1px solid" borderColor="rgb(88, 91, 99)" lineHeight="1">
		<Headshot />
		<DesktopNavItemGroup />
    </Box>
  );
}
