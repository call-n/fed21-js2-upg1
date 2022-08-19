import React from 'react'
import { Link } from 'react-router-dom'
import MovieAPI from '../services/MovieAPI'
import { Box, Heading, HStack, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

const MovieCard = ({ movie }) => {
  return (
    <Link to={'/movie/' + movie.id}>
        <Box
            display="flex"
            flexDirection="column"  
            alignItems="flex-start"
            position="relative"
            padding="1.25rem"
            border="1px solid"
            borderColor="rgb(88, 91, 99)"
            borderRadius="10px"
            maxWidth="37rem"
            textDecoration="none"
            wordBreak="break-word"
            bg="rgb(32, 33, 36)"
            _hover={{ bg: 'rgb(48, 49, 54)', borderColor: '#c58af9' }}
        >
            <Box overflow="hidden" position="relative" zIndex="1">
                <img 
                    src={MovieAPI.movieImagesEndpoint + '/' + movie.poster_path}
                    style={{borderRadius: '3px', height: 'auto', maxWidth: '100%'}}
                />
            </Box>
            <Box flex="1" mt="5">
                <HStack spacing="5" fontSize="sm">
                <HStack spacing="2" color="sage.base">
                    <Box as="time">
                        {movie.release_date}
                    </Box>
                    <span aria-hidden>•</span>
                    <Box>{movie.id}</Box>
                </HStack>
                </HStack>

                <Heading size="md" fontWeight="semibold" marginY="4">
                    {movie.original_title}
                </Heading>
                <Text marginTop="1em">
                    Rating : {movie.vote_average} 
                </Text>
            </Box>
        </Box>
    </Link>
  )
}

export default MovieCard