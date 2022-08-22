import React from 'react'
import { Box, Wrap } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import genres from '../helpers/genres'

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