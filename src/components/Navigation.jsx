import {
	Box,
	Flex,
	Text,
	HStack,
	useDisclosure,
	useBreakpointValue,
	Center,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	Stack,
	StackDivider
} from '@chakra-ui/react'
import {
	CloseIcon,
	HamburgerMenuIcon,
} from './nav-icons';
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const items = [
	{ label: 'Movies', href: '/movies' },
	{ label: 'Popular', href: '/popular' },
	{ label: 'Latest', href: '/latest' },
	{ label: 'Top', href: '/top' },
];

function NavItem(props) {
	const { children, href, large } = props;
	return (
		<NavLink to={href}>
		<HStack
			color="rgb(210, 211, 215)"
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

function MobileNavItemGroup(props) {
	return (
	  <Stack
		divider={<StackDivider borderColor="whiteAlpha.300" />}
		as="nav"
		aria-label="Main navigation"
		spacing="0"
		{...props}
	  >
		{items.map((item) => (
		  <NavItem key={item.label} href={item.href} large>
			{item.label}
		  </NavItem>
		))}
	  </Stack>
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


function MobileNavMenu() {
	const menu = useDisclosure();
  
	const breakpoint = useBreakpointValue({ base: true, md: false });
  
	useEffect(() => {
	  if (menu.isOpen && !breakpoint) {
		menu.onClose();
	  }
	}, [breakpoint, menu]);
  
	return (
	  <Flex flexWrap="nowrap" gap="5px" justifyContent="flex-start" alignItems="center">
		<Center
		  width="10"
		  height="10"
		  display={{ base: 'flex', md: 'none' }}
		  as="button"
		  aria-haspopup="true"
		  aria-expanded={menu.isOpen}
		  aria-controls="nav-menu"
		  id="nav-menu--trigger"
		  type="button"
		  onClick={menu.onOpen}
		>
		  {menu.isOpen ? <CloseIcon /> : <HamburgerMenuIcon />}
		</Center>
		<Drawer isOpen={menu.isOpen} onClose={menu.onClose} placement="bottom">
		  <DrawerOverlay />
		  <DrawerContent id="nav-menu" bg="rgba(32, 33, 36, 0.9)" padding="6">
			<MobileNavItemGroup />
		  </DrawerContent>
		</Drawer>
	  </Flex>
	);
}

export default function Navigation() {
  return (
    <Box as="header" display="flex" justifyContent="space-between" alignContent="center" minHeight="73px" fontSize="18px" color="rgb(210, 211, 215)" backgroundColor="rgb(32, 33, 36)" padding="0 clamp(1.375rem, 1.2rem + 0.89vw, 2rem)" borderBottom="1px solid" borderColor="rgb(88, 91, 99)" lineHeight="1">
		<Headshot />
		<MobileNavMenu />
		<DesktopNavItemGroup display={{ base: 'none', md: 'flex' }} />
    </Box>
  );
}
