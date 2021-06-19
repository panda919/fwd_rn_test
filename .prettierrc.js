module.exports = {
    printWidth: 100,
    semi: true,
    bracketSpacing: true,
    jsxBracketSameLine: true,
    singleQuote: true,
    trailingComma: 'all',
    endOfLine: 'auto',
    overrides: [
        {
            files: '*.{js,jsx,ts,tsx}',
            options: {
                tabWidth: 4,
            },
        },
    ],
};
