/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				mobile: { max: '540px' },
				tablet: { min: '541px', max: '1024px' },
			},
			colors: {
				textColor: '#fefbff',
				bg: '#010000',
				details: '#75ba12',
				box: '#979393',
			},
		},
	},
	plugins: [],
};
