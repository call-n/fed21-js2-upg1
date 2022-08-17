import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const AuthorCard = ({ author }) => {

	return (
		<Card className="mb-3">
			<Card.Header>{author.name}</Card.Header>
			<Card.Body>
				<ListGroup variant="flush">
					<ListGroup.Item>
						<strong>Date of birth</strong> {author.date_of_birth}
					</ListGroup.Item>
				</ListGroup>

				<div className="mt-3">
					<Link to={`/authors/${author.id}`} className="btn btn-primary" role="button">Read more</Link>
				</div>
			</Card.Body>
		</Card>
	)
}

export default AuthorCard
