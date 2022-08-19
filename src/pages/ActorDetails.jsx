import React from 'react'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import MovieAPI from '../services/MovieAPI'
import MoviesPlayed from '../components/MoviesPlayed'
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
} from '@chakra-ui/react'

const MovieDetails = () => {
    const { id } = useParams()
    const { data, error, isError, isLoading, isSuccess } = useQuery(['actor', {id}], () => MovieAPI.getActor(id))

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
            {isSuccess && (
                <>
                    <Flex flexDirection={{lg: 'row', base: 'column'}}>
                        <Flex overflow="hidden" position="relative" zIndex="1" justifyContent="center">
                            <Box>
                                <img 
                                    src={MovieAPI.movieImagesEndpoint + '/' + data.profile_path}
                                    style={{borderRadius: '10px', height: 'auto', maxWidth: '100%'}}
                                />
                            </Box>
                        </Flex>
                        
                        <Flex justifyContent="center">
                            <Flex flexDirection="column" maxWidth="40rem" paddingLeft={{lg: "3rem", md: "0rem"}}>
                                <Heading marginTop="2rem" marginBottom="1rem" fontSize="4xl">{data.name}</Heading>

                                <Wrap gap="3" fontWeight="600" marginBottom="1rem">
                                    <Text color="#c58af9">
                                        {data.birthday} ({data.place_of_birth})
                                    </Text>
                                </Wrap>

                                <Text fontSize="18px" color="gray.300">
                                    Know for: {data.known_for_department}
                                </Text>

                                <Heading marginTop="2rem" marginBottom="1rem" fontSize="2xl">
                                    Overview
                                </Heading>

                                <Text fontSize="18px">
                                    {data.biography}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>

                    <Heading marginTop="2rem" marginBottom="1rem" fontSize="2xl">
                        Movies that {data.name} has acted in
                    </Heading>

                    <Flex overflowY="hidden" overflowX="scroll">
                        <MoviesPlayed />
                    </Flex>
                </>
            )}
            </Box>
        </Box>

    </Box>
  )
}

function ActorProfile({props}) {
	const { name, character, id, profile_path, popularity } = props;
	return (
        <Center 
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
                src={MovieAPI.movieImagesEndpoint + '/' + profile_path}
                objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                <Avatar
                    size={'xl'}
                    src={MovieAPI.movieImagesEndpoint + '/' + profile_path}
                    alt={'Actor'}
                    css={{
                    border: '2px solid white',
                    }}
                />
                </Flex>

                <Flex p={4} flexDirection="column" minWidth="260px">
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                        {name}
                        </Heading>
                        <Text color={'gray.500'}>{character}</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{id}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            id
                        </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>{popularity}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            popularity
                        </Text>
                        </Stack>
                    </Stack>

                    <Link to={'/actor/' + id}>
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
	);
}

export default MovieDetails