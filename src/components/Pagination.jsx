import {
    Button,
    Flex,
    Box,
} from '@chakra-ui/react'

const Pagination = ({ page, totPages, onChangePage }) => {
	return (
		<Flex justifyContent="space-between" alignItems="center" marginTop="1rem" marginBottom="1rem">
			<Box>
				<Button
					disabled={page -1 === 0}
					onClick={() => onChangePage({page: Number(page) - 1}) }
					variant="primary"
				>Previous Page</Button>
			</Box>

			<Box>Page {page}/{totPages}</Box>

			<Box>
				<Button
					disabled={page >= totPages }
					onClick={() => onChangePage({page: Number(page) + 1}) }
					variant="primary"
				>Next Page</Button>
			</Box>
		</Flex>
	)
}

export default Pagination