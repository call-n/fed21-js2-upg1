import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import MovieAPI from '../services/MovieAPI'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieCard from '../components/MovieCard'
import GenrePicker from '../components/GenrePicker'
import {
	Box,
	Heading
} from '@chakra-ui/react'

const GenrePage = () => {
    const { id } = useParams()
    const { data, error, isError, isLoading, isSuccess } = useQuery(['genre-movie', {id}], () => MovieAPI.getGenre(id))

  return (
    <Box>
        {isLoading && <LoadingSpinner />}

		{isError && error.message}

        <Box paddingBlock="clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem)">
            <Box 
                marginInline="auto"
                width="clamp(16rem, 95vw, 85rem)"
                paddingInline="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"
                position="relative"
            >
                <Heading marginBottom="3rem" fontSize="5xl">
                    All Movies in     
                </Heading>

                <Heading marginBottom="2rem">Genres</Heading>

                <GenrePicker />
            </Box>
        </Box>

        <Box>
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

export default GenrePage