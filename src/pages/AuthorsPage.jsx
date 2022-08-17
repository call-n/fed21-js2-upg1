import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import BOOKS from '../services/BookAPI'
import AuthorCard from '../components/AuthorCard'
import LoadingSpinner from '../components/LoadingSpinner'

const BooksPage = () => {
	const { data, error, isError, isLoading, isSuccess } = useQuery('Authors', BOOKS.getAuthors)

	return (
		<Container className="py-3">
			<h1 className="mb-3">Authors</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			<div>
				{isSuccess && (
					<>
						<Row>
							{data.map((author, i) => (
								<Col lg={4} md={6} sm={12} key={i}>
									<AuthorCard author={author} />
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
