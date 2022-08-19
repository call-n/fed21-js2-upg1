import { Link, useParams } from 'react-router-dom'
import MovieAPI from '../services/MovieAPI'
import { useQuery } from 'react-query'
import { 
    Box,
	Heading,
    Flex,
    Text,
    Image,
    Wrap,
    Stack,
    Button,
    Center,
    Avatar,
 } from '@chakra-ui/react';
import LoadingSpinner from '../components/LoadingSpinner'

const MoviesPlayed = () => {
    const { id } = useParams()
    const { data, error, isError, isLoading, isSuccess } = useQuery(['actor-movies', {id}], () => MovieAPI.getActorMovies(id))

  return (
      <Box>
            {isLoading && <LoadingSpinner />}

            {isError && error.message}

            {isSuccess && (
                <Flex>
                    {data.results.map((movie, i) => (
                        <Center 
                            key={i}
                            py={2} 
                        >
                            <Box
                                maxW={'270px'}
                                w={'full'}
                                bg={'gray.800'}
                                boxShadow={'2xl'}
                                rounded={'md'}
                                margin="0.5rem"
                                border="1px solid #585b63"
                                overflow={'hidden'}>
                                <Image
                                h={'120px'}
                                w={'full'}
                                src={MovieAPI.movieImagesEndpoint + '/' + movie.poster_path}
                                objectFit={'cover'}
                                />
                                <Flex p={4} flexDirection="column" minWidth="260px">
                                    <Stack spacing={0} align={'center'} mb={5}>
                                        <Heading fontSize={'1xl'} fontWeight={500} fontFamily={'body'}>
                                        {movie.original_title}
                                        </Heading>
                                    </Stack>

                                    <Stack direction={'row'} justify={'center'} spacing={6}>
                                        <Stack spacing={0} align={'center'}>
                                        <Text fontWeight={600}>{movie.release_date}</Text>
                                        <Text fontSize={'sm'} color={'gray.500'}>
                                            Released
                                        </Text>
                                        </Stack>
                                        <Stack spacing={0} align={'center'}>
                                        <Text fontWeight={600}>{movie.vote_average}</Text>
                                        <Text fontSize={'sm'} color={'gray.500'}>
                                            Rating
                                        </Text>
                                        </Stack>
                                    </Stack>

                                    <Link to={'/movie/' + movie.id}>
                                        <Button
                                            w={'full'}
                                            mt={8}
                                            bg={'gray.900'}
                                            color={'white'}
                                            rounded={'md'}
                                            _hover={{
                                            transform: 'translateY(-2px)',
                                            boxShadow: 'lg',
                                            }}>
                                            Read more
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>
                        </Center>
                    ))}
                </Flex>
            )}
      </Box>
  )
}

export default MoviesPlayed