import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Well Fitnes',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: '' },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [
				{ rel: 'shortcut icon', type: 'image/x-icon', href: '/static/favicon.ico' },
			]
		},
	},

	css: [
		'mdi/css/materialdesignicons.min.css',
		'vuetify/lib/styles/main.sass',
		'/assets/styles/index.scss'
	],

	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},
})
