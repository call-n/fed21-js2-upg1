import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useGenre = (id, page = 1) => {
	return useQuery(['genre-movie', {id, page}], () => MovieAPI.getGenre(id, page))
}

export default useGenre