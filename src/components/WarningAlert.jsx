import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react'

const WarningAlert = ({ message }) => {
	const toast = useToast()
	const toastIdRef = React.useRef()

	useEffect(() => {
		toastIdRef.current = toast({
			title: 'Account created.',
			description: "We've created your account for you.",
			status: 'success',
			duration: 9000,
			isClosable: true,
	  	})
	}, [])

	return (
		<>lol</>
	)
}

export default WarningAlert
