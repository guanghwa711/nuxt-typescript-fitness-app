import axios from 'axios'

export default async function useGet(url) {
	const config = useRuntimeConfig()
	const data = (await axios.get(`${config.API_URL}${url}`)).data.data
	return data
}