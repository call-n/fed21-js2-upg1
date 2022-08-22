import {
	Box,
	Heading,
	Image
} from '@chakra-ui/react'
import dababy from '../dababy.webp'

const HomePage = () => {
	return (
		<Box paddingBlock="clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem)">
            <Box 
                marginInline="auto"
                width="clamp(16rem, 95vw, 85rem)"
                paddingInline="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"
                position="relative"
            >
				<Image src={dababy} />
			</Box>
		</Box>
	)
}

export default HomePage
