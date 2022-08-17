import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {

	return (
		<Card className="mb-3">
			<Card.Header>{book.title}</Card.Header>
			<Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<strong>Author</strong> {book.author.name}
					</ListGroup.Item>
					<ListGroup.Item>
						<strong>Published</strong> {book.published}
					</ListGroup.Item>
					<ListGroup.Item>
						<strong>Pages</strong> {book.pages}
					</ListGroup.Item>
				</ListGroup>
				<div className="mt-3">
					<Button as={Link} to={`/books/${book.id}`} variant="primary">Read more</Button>
				</div>
			</Card.Body>
		</Card>
	)
}

export default BookCard
