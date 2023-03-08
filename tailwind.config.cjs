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
// Criar formulário com 3 medidas( 360largura, 540 largura, acima de 1024 largura).
// o formulário tem que conter um evento de submit.

// Atenção criar componente dentro da respectiva branch
