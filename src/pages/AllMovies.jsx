import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieCard from '../components/MovieCard'
import GenrePicker from '../components/GenrePicker'
import Pagination from '../components/Pagination'
import { useSearchParams } from 'react-router-dom'
import {
	Box,
	Heading,
} from '@chakra-ui/react'

const AllMovies = () => {
    const [page, setPage] = useState(1)
    const { data, error, isError, isLoading, isSuccess } = useQuery(['all-movies', {page}], () => MovieAPI.getAllLatest(page))
    const [searchParams, setSearchParams] = useSearchParams()

    const thePage = Number(searchParams.get('page'))

    useEffect(() => {
        if(thePage === 0) return
        setPage(thePage)
    }, [])

    useEffect(() => {
        setSearchParams({ page: page })
    }, [page])

  return (
    <Box>
        {isLoading && <LoadingSpinner />}

		{isError && error.message}

        {isSuccess && (
            <>
                <Box paddingBlock="clamp(3.75rem, 3.21rem + 2.68vw, 5.625rem)">
                    <Box 
                        marginInline="auto"
                        width="clamp(16rem, 95vw, 85rem)"
                        paddingInline="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"
                        position="relative"
                    >
                        <Heading marginBottom="3rem" fontSize="5xl">All Movies</Heading>

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
                    <Box 
                        marginInline="auto"
                        width="clamp(16rem, 95vw, 85rem)"
                        paddingInline="clamp(1.375rem, 1.2rem + 0.89vw, 2rem)"
                        position="relative"
                    >
                        <Pagination 
                            page={page}
                            numPages={data.total_pages}
                            hasPreviousPage={data.page - 1 !== 0}
                            hasNextPage={data.page + 1 < data.total_pages}
                            onPreviousPage={() => setPage(currentPage => currentPage - 1)}
                            onNextPage={() => setPage(currentPage => currentPage + 1)}
                        />
                    </Box>
                </Box>
            </>
        )}
    </Box>
  )
}

export default AllMovies