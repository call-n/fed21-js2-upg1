import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/NotFound'
import PopularMovies from './pages/PopularMovies'
import TopMovies from './pages/TopMovies'
import LatestMovies from './pages/LatestMovies'
import AllMovies from './pages/AllMovies'
import GenrePage from './pages/GenrePage'
import MovieDetails from './pages/MovieDetails'
import ActorDetails from './pages/ActorDetails'

import {
	Box,
} from '@chakra-ui/react'

function App() {
	return (
		<Box id="App" background="rgb(32, 33, 36)" color="rgb(248, 249, 250)">
			<Navigation />
			<GlobalFetchingSpinner />
			
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/movies" element={<AllMovies />} />

				<Route path="/popular" element={<PopularMovies />} />
				<Route path="/top" element={<TopMovies />} />
				<Route path="/latest" element={<LatestMovies />} />

				<Route path="/genre/:id" element={<GenrePage />} />
				<Route path="/movie/:id" element={<MovieDetails />} />
				<Route path="/actor/:id" element={<ActorDetails />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</Box>
	)
}

export default App
