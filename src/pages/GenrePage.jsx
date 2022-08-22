import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieCard from '../components/MovieCard'
import GenrePicker from '../components/GenrePicker'
import genres from '../helpers/genres'
import useGenre from '../hooks/useGenre'
import Pagination from '../components/Pagination'
import { useSearchParams } from 'react-router-dom'
import {
	Box,
	Heading
} from '@chakra-ui/react'

const GenrePage = () => {
    const { id } = useParams()
    const [page, setPage] = useState(1)
    const { data, error, isError, isLoading, isSuccess } = useGenre(id, page)
    const [searchParams, setSearchParams] = useSearchParams()

    const thePage = Number(searchParams.get('page'))

    useEffect(() => {
        if(thePage === 1 || !thePage) return
        setPage(thePage)
    }, [])

    // resets the pagecount on changing genre
    useEffect(() => {
        if( !thePage ){
            setPage(1)
        }
    }, [id])

    useEffect(() => {
        setSearchParams({ page: page })
    }, [page])

    // found this too be the fastest way to get the genre without sending another api call
    const genreName = genres.filter(genre => genre.id === Number(id))

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
                    All Movies in {genreName[0].name}
                </Heading>

                <Heading marginBottom="2rem">Genres</Heading>

                <GenrePicker />
            </Box>
        </Box>

        {isSuccess &&
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
                {data.results.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
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
        }
    </Box>
  )
}

export default GenrePage