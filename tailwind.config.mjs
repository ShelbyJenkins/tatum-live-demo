import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'tatum-dark-blue': 'oklch(26.56% 0.088 276.79 / <alpha-value>)',
				'tatum-green': 'oklch(75.67% 0.148 165.86 / <alpha-value>)',
				'tatum-purple': 'oklch(51.51% 0.271 276.51 / <alpha-value>)',
			}
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
		  {
			mytheme: {
			  "primary": 'oklch(26.56% 0.088 276.79)',
			  "secondary": 'oklch(75.67% 0.148 165.86)',
			  "accent": 'oklch(51.51% 0.271 276.51)',
			  "neutral": "#3d4451",
			  "base-100": "#E1E2F4",
			},
		  },
		],
	  },
}
