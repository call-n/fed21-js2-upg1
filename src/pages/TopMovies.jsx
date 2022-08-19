import React from 'react'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieCard from '../components/MovieCard'
import {
	Box,
	Heading
} from '@chakra-ui/react'

const TopMovies = () => {
    const { data, error, isError, isLoading, isSuccess } = useQuery('top-movies', MovieAPI.getAllTop)

  return (
    <Box>
        <Heading marginTop="2rem" textAlign="center" fontSize="5xl">TopMovies</Heading>

        {isLoading && <LoadingSpinner />}

		{isError && error.message}

        <Box paddingBlock="clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem)">
            <Box 
                marginInline="auto"
                width="clamp(16rem, 95vw, 85rem)"
                paddingInline="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"
                position="relative"
                display="grid" 
                gridTemplateColumns={{ base: 'repeat(auto-fit, minmax(16rem, 1fr))', md: 'repeat(auto-fill, minmax(22rem, 1fr))', }} 
                gridGap="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"
            >
            {isSuccess && 
                data.results.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))
            }
            </Box>
        </Box>
    </Box>
  )
}

export default TopMovies