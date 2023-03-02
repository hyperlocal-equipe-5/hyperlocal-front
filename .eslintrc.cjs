module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		
	},
};
