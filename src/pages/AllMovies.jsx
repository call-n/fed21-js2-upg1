import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieCard from '../components/MovieCard'
import GenrePicker from '../components/GenrePicker'
import Pagination from '../components/Pagination'
import useLatest from '../hooks/useLatest'
import { useSearchParams } from 'react-router-dom'
import {
	Box,
	Heading,
} from '@chakra-ui/react'

const AllMovies = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page')
    const { data, error, isError, isLoading, isSuccess } = useLatest(page)

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
                            totPages={data.total_pages}
                            onChangePage={setSearchParams}
                        />
                    </Box>
                </Box>
            </>
        )}
    </Box>
  )
}

export default AllMovies