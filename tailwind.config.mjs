/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	
		extend: {
			colors: {
				i: { 
					50:  '#ecf4ef',
					100: '#dae9de',
					200: '#b5d2bd',
					300: '#91bc9b',
					400: '#6aa57a',
					500: '#032f0e', // Color base
					600: '#03290d',
					700: '#02230b',
					800: '#021d0a',
					900: '#021809',
					DEFAULT: '#032f0e',
				},

				iii: {
					50:  '#F3EBF6',
					100: '#E7D6ED',
					200: '#D2ADD9',
					300: '#BD85C5',
					400: '#A65BAF',
					500: '#672584',  // El color principal
					600: '#5F207C',
					700: '#551B71',
					800: '#4C1667',
					900: '#3D0D56',
					DEFAULT: '#672584'
				},
				iv: {
					50:  '#F5F5F3',
					100: '#EAEAE7',
					200: '#D5D4D0',
					300: '#C1BFB9',
					400: '#ACAAA3',
					500: '#363634', // Color principal (gris muy oscuro)
					600: '#2F2F2C',
					700: '#292927',
					800: '#232320',
					900: '#1D1D1A',
					DEFAULT: '#363634',
				},
				primary: {
					DEFAULT: '#252422',
					
				},
				secondary: {
					DEFAULT: '#eb5e28',
					
				}
		},
				},
	},
	safelist: [
		// Genera todas las clases bg-i-50..900, bg-iii-50..900, etc.
		{
		  pattern: /bg-(i|iii|iv)-(50|100|200|300|400|500|600|700|800|900)/,
		},
	  ],
	plugins: [],
}
