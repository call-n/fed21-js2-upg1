import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useLatest = (page = 1) => {
	return useQuery(['all-movies', {page}], () => MovieAPI.getAllLatest(page))
}

export default useLatest