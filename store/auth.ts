import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
	state: () => {
		return {
			user: null
		}
	},
	actions: {
		login(user: any) {
			this.user = user
		},
		logout() {
			this.user = null
		}
	}
})
