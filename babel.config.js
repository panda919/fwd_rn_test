module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.js', '.jsx'],
                alias: {
                    '@src': './src',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@containers': './src/containers',
                    '@modules': './src/modules',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@utils': './src/utils',
                    '@theme': './src/theme',
                    '@common': './src/common',
                },
            },
        ],
        [
            'babel-plugin-inline-import',
            {
                extensions: ['.svg'],
            },
        ],
        'babel-plugin-styled-components',
    ],
};
