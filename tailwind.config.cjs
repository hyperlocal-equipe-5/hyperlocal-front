/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				mobile: { max: '540px' },
				tablet: { min: '541px', max: '1024px' },
			},
		},
	},
	plugins: [],
};
