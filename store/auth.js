import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
	state: () => {
		return {
			user: null
		}
	},
	actions: {
		login(user) {
			this.user = user
		},
		logout() {
			this.user = null
		}
	}
})
