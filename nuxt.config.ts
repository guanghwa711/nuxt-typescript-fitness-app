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

	typescript: {
		strict: true
	},

	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
	},

	publicRuntimeConfig: {
		API_URL: process.env.API_URL
	},

	buildModules: ['@nuxtjs/strapi'],
	strapi: {
		url: process.env.API_URL || 'http://localhost:1337',
	}
})
