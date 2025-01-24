/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	
		extend: {
			colors: {
				primary: {
					DEFAULT: '#252422',
					
				},
				secondary: {
					DEFAULT: '#eb5e28',
					
				}
		},
				},
	},
	plugins: [],
}
