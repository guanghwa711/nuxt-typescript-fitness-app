import axios from 'axios'

export default async function usePut(url, data) {
	const config = useRuntimeConfig()
	await axios.put(`${config.API_URL}${url}`, {
		data: data
	})
}