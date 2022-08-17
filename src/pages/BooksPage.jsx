import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import BOOKS from '../services/BookAPI'
import BookCard from '../components/BookCard'
import LoadingSpinner from '../components/LoadingSpinner'

const BooksPage = () => {
	const [page, setPage] = useState(1)
	const { data, error, isError, isLoading, isSuccess } = useQuery('Books', BOOKS.getBooks)

	return (
		<Container className="py-3">
			<h1 className="mb-3">Books</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			<div>
				{isSuccess && (
					<>
						<Row>
							{data.map((book, i) => (
								<Col lg={4} md={6} sm={12} key={i}>
									<BookCard book={book} />
								</Col>
							))}
						</Row>
					</>
				)}
			</div>
		</Container>
	)
}

export default BooksPage
