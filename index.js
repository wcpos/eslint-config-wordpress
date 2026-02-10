module.exports = {
	extends: ['eslint-config-universe/web'],
	plugins: ['@typescript-eslint'],
	rules: {
		// Disable rules incompatible with ESLint 9 (context.getScope removed)
		'node/handle-callback-err': 'off',
		'node/no-callback-literal': 'off',
		// Removed in @typescript-eslint v6+, replaced by @typescript-eslint/no-restricted-types
		'@typescript-eslint/ban-types': 'off',
		// Prefer function declarations for named components
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'function-declaration',
				unnamedComponents: 'arrow-function',
			},
		],
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				singleQuote: true,
				trailingComma: 'es5',
				printWidth: 100,
			},
		],
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '@wcpos/**',
						group: 'external',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				groups: ['builtin', 'external', ['parent', 'sibling', 'index'], 'type'],
				'newlines-between': 'always',
			},
		],
	},
};
