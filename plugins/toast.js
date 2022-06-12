import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin(nuxtApp => {
	const options = {
		timeout: 5000,
		closeOnClick: false,
		pauseOnFocusLoss: true,
		pauseOnHover: true,
		draggable: true,
		draggablePercent: 0.6,
		showCloseButtonOnHover: true,
		hideProgressBar: true,
		closeButton: "button",
		icon: true,
		rtl: false
	}

	nuxtApp.vueApp.use(Toast, options)
})