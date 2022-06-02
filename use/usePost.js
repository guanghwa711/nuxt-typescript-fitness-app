import axios from 'axios'

export default async function usePost(url, data) {
	const config = useRuntimeConfig()
	await axios.post(`${config.API_URL}${url}`, {
		data: data
	})
}