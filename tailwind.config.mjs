import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg': {
					primary: '#FFFFFF',
					secondary: '#1f1f1f',
				},
				'tatum-dark-blue': '#1c1e4f',
				'tatum-green': '#2ccd9a',
				'tatum-purple': '#4f37fd',
			}
		},
	},
	plugins: [daisyui],
}
