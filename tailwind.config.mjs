/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	
		extend: {
			colors: {
				i: { // Dark Angels
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

				iii: { // Emperor's Children
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
				iv: {  // Iron Warriors
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
				v: { // White Scars
					100: '#FFFFFF',
					200: '#F5F5F5',
					300: '#EAEAEA',
					400: '#CCCCCC',
					500: '#B3B3B3',  // Color principal
					600: '#999999',
					700: '#7F7F7F',
					800: '#666666',
					900: '#4C4C4C',
					DEFAULT: '#B3B3B3',
				  },
				  vi: { // Space Wolves
					100: '#A5C6DA',
					200: '#7EA6BF',
					300: '#5D8FA8',
					400: '#3C7791',
					500: '#1A5F7A',  // Color principal
					600: '#154D63',
					700: '#103A4D',
					800: '#0B2736',
					900: '#06151F',
					DEFAULT: '#1A5F7A',
				  },
				  vii: { // Imperial Fists
					100: '#FCEFAF',
					200: '#FAE27E',
					300: '#F7D54E',
					400: '#F5C71D',
					500: '#D9A600',  // Color principal
					600: '#B38900',
					700: '#8D6C00',
					800: '#665000',
					900: '#403300',
					DEFAULT: '#D9A600',
				  },
				  viii: { // Night Lords
					100: '#23273A',
					200: '#2D324D',
					300: '#383D61',
					400: '#4B517D',
					500: '#5E6599',  // Color principal
					600: '#7F85B3',
					700: '#A0A5CC',
					800: '#C0C4E6',
					900: '#E0E2FF',
					DEFAULT: '#5E6599',
				  },
				  ix: { // Blood Angels
					100: '#FCD5D5',
					200: '#F9AAAA',
					300: '#F67F7F',
					400: '#F35555',
					500: '#E60000',  // Color principal
					600: '#B80000',
					700: '#8B0000',
					800: '#5E0000',
					900: '#300000',
					DEFAULT: '#E60000',
				  },
				  x: { // Iron Hands
					100: '#D4D4D4',
					200: '#A9A9A9',
					300: '#7F7F7F',
					400: '#545454',
					500: '#2A2A2A',  // Color principal
					600: '#212121',
					700: '#191919',
					800: '#101010',
					900: '#080808',
					DEFAULT: '#2A2A2A',
				  },
				  xii: { // World Eaters
					100: '#F2F2F2',
					200: '#E6E6E6',
					300: '#CCCCCC',
					400: '#B3B3B3',
					500: '#A40000',  // Color principal
					600: '#8C0000',
					700: '#730000',
					800: '#5A0000',
					900: '#420000',
					DEFAULT: '#A40000',
				  },
				  xiii: { // Ultramarines
					100: '#A5C9F4',
					200: '#7EB0EC',
					300: '#5898E4',
					400: '#317FDC',
					500: '#0057A8',  // Color principal
					600: '#00437F',
					700: '#003157',
					800: '#00202F',
					900: '#000F17',
					DEFAULT: '#0057A8',
				  },
				  xiv: { // Death Guard
					100: '#DFE5CC',
					200: '#C2C9A8',
					300: '#A6AD83',
					400: '#8A915F',
					500: '#6E753A',  // Color principal
					600: '#565D2F',
					700: '#3E4623',
					800: '#262E17',
					900: '#0E170B',
					DEFAULT: '#6E753A',
				  },
				  xv: { // Thousand Sons
					100: '#E5C2F4',
					200: '#C897E6',
					300: '#AC6CD8',
					400: '#8F41CA',
					500: '#7300B8',  // Color principal
					600: '#5C0093',
					700: '#45006E',
					800: '#2E004A',
					900: '#170025',
					DEFAULT: '#7300B8',
				  },
				  xvi: { // Sons of Horus
					100: '#98B4A1',
					200: '#789D81',
					300: '#5A8662',
					400: '#3C7042',
					500: '#205A23',  // Color principal
					600: '#1A481C',
					700: '#133715',
					800: '#0D250E',
					900: '#061308',
					DEFAULT: '#205A23',
				  },
				  xvii: { // Word Bearers
					100: '#E4C2C2',
					200: '#D29A9A',
					300: '#BF7373',
					400: '#AD4B4B',
					500: '#8A0000',  // Color principal
					600: '#6E0000',
					700: '#520000',
					800: '#360000',
					900: '#1A0000',
					DEFAULT: '#8A0000',
				  },
				  xviii: { // Salamanders
					100: '#A1C298',
					200: '#81A879',
					300: '#628E5B',
					400: '#42753C',
					500: '#205A23',  // Color principal
					600: '#1A481C',
					700: '#133715',
					800: '#0D250E',
					900: '#061308',
					DEFAULT: '#205A23',
				  },
				  xix: { // Raven Guard
					100: '#D4D4D4',
					200: '#A9A9A9',
					300: '#7F7F7F',
					400: '#545454',
					500: '#2A2A2A',  // Color principal
					600: '#212121',
					700: '#191919',
					800: '#101010',
					900: '#080808',
					DEFAULT: '#2A2A2A',
				  },
				  xx: { // Alpha Legion
					100: '#5FD3D3',
					200: '#48A9A9',
					300: '#308080',
					400: '#185656',
					500: '#003D3D',  // Color principal
					600: '#003232',
					700: '#002727',
					800: '#001C1C',
					900: '#001111',
					DEFAULT: '#003D3D',
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
		{
			pattern: /bg-(i|iii|iv|v|vi|vii|viii|ix|x|xii|xiii|xiv|xv|xvi|xvii|xviii|xix|xx)-(50|100|200|300|400|500|600|700|800|900)/,
		},		
	],
	plugins: [],
}
