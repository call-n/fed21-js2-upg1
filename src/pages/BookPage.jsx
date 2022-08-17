import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import WarningAlert from '../components/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import BOOKS from '../services/BookAPI'

const BookPage = () => {
	const { id } = useParams()
	const { data, error, isError, isLoading, isSuccess } = useQuery(['Book', {id}], BOOKS.getBook)
	const navigate = useNavigate()

	return (
		<Container className="py-3">

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{isSuccess && (
				<Card>
					<Card.Header className="h5">{data.title}</Card.Header>
					<Card.Body>
						<Card.Title>Attributes</Card.Title>
						<dl className="row">
							<dt className="col-sm-3">Author</dt>
							<dd className="col-sm-9">{data.author.name}</dd>
						</dl>
                        <dl className="row">
							<dt className="col-sm-3">Pages</dt>
							<dd className="col-sm-9">{data.pages}</dd>
						</dl>
                        <dl className="row">
							<dt className="col-sm-3">Pulished</dt>
							<dd className="col-sm-9">{data.published}</dd>
						</dl>

						<Button variant="secondary" onClick={() => navigate(-1)}>&laquo; Back</Button>
					</Card.Body>
				</Card>
			)}
		</Container>
	)
}

export default BookPage
