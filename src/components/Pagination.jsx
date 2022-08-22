import {
    Button,
    Flex,
    Box,
} from '@chakra-ui/react'

const Pagination = ({ page, numPages, hasPreviousPage, onPreviousPage, hasNextPage, onNextPage }) => {
	return (
		<Flex justifyContent="space-between" alignItems="center" marginTop="1rem" marginBottom="1rem">
			<Box>
				<Button
					disabled={!hasPreviousPage}
					onClick={onPreviousPage}
					variant="primary"
				>Previous Page</Button>
			</Box>

			<Box>Page {page}/{numPages}</Box>

			<Box>
				<Button
					disabled={!hasNextPage}
					onClick={onNextPage}
					variant="primary"
				>Next Page</Button>
			</Box>
		</Flex>
	)
}

export default Pagination