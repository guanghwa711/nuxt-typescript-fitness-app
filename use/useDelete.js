import axios from 'axios'

export default async function useDelete(url) {
	const config = useRuntimeConfig()
	await axios.delete(`${config.API_URL}${url}`)
}