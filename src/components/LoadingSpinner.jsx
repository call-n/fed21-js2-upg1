import BeatLoader from 'react-spinners/BeatLoader'

const LoadingSpinner = () => {
	return (
		<div className="d-flex justify-content-center py-5">
			<BeatLoader size={25} color="#c58af9" />
		</div>
	)
}

export default LoadingSpinner
