import React from 'react'
import { Box, Wrap } from '@chakra-ui/react';
import { Link } from 'react-router-dom'


const genres = [
    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]

const GenrePicker = () => {
  return (
    <Wrap spacing="3">
        {genres.map((genre, i) => (
            <Link to={'/genre/' + genre.id} key={i}>
                <Box 
                    key={i}
                    px="4"
                    py="2"
                    rounded="lg"
                    border="1px solid"
                    borderColor="rgb(88, 91, 99)"
                    fontWeight="bold"
                    fontFamily="heading"
                    cursor="pointer"
                    _hover={{ borderColor: 'rgb(197, 138, 249)', bg: 'rgb(48, 49, 54)' }}
                >
                    {genre.name}
                </Box>
            </Link>
        ))}
    </Wrap>
  )
}

export default GenrePicker