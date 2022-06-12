import axios from 'axios'

export default async function useUploadFile(file, ref, field) {
	const config = useRuntimeConfig()

	const brandImg = new FormData()
	brandImg.append('files', file)
	brandImg.append('ref', `api::${ref}.${ref}`)
	brandImg.append('field', field)
	
	return await axios.post(`${config.API_URL}/api/upload`, brandImg)
}