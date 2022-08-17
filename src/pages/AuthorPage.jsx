import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import WarningAlert from '../components/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import BOOKS from '../services/BookAPI'
import BookCard from '../components/BookCard'

const AuthorPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading, isSuccess } = useQuery(['Author', {id}], BOOKS.getAuthor)
	const navigate = useNavigate()

	return (
		<Container className="py-3">

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{isSuccess && (
                <>
                    <Card>
                        <Card.Header className="h5">{data.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>Attributes</Card.Title>
                            <dl className="row">
                                <dt className="col-sm-3">Date of Birth</dt>
                                <dd className="col-sm-9">{data.date_of_birth}</dd>
                            </dl>

                            <dl className="row">
                                <dt className="col-sm-3">Book{data.books.length > 1 && 's'} by {data.name}</dt>
                                <dd className="col-sm-9">
                                    {data.books.map((book, i) => (
                                        <div key={i}>{book.title}</div>
                                    ))}
                                </dd>
                            </dl>

                            <Button variant="secondary" onClick={() => navigate(-1)}>&laquo; Back</Button>
                        </Card.Body>
                    </Card>
                </>
			)}
		</Container>
	)
}

export default AuthorPage
