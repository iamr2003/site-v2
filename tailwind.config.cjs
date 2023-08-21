/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': '#f1ede9',
				'background': '#1c1712',
				'primary': '#f78b2b',
				'secondary': '#faf5f5',
				'accent': '#a12edb',
			},
			fontFamily:{
				sans:['Poppins','sans-serif']
			},


		},
	},
	plugins: [],
}
