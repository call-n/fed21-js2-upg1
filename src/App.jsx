import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/NotFound'

function App() {
	return (
		<div id="App">
			<Navigation />
			<GlobalFetchingSpinner />
			
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
