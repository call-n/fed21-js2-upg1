import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import Navigation from './components/Navigation'
import BooksPage from './pages/BooksPage'
import BookPage from './pages/BookPage'
import AuthorsPage from './pages/AuthorsPage'
import AuthorPage from './pages/AuthorPage'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/NotFound'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />
			<GlobalFetchingSpinner />
			
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/books" element={<BooksPage />} />
				<Route path="/books/:id" element={<BookPage />} />

				<Route path="/authors" element={<AuthorsPage />} />
				<Route path="/authors/:id" element={<AuthorPage />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
