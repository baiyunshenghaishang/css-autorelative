module.exports = {
    pages: {
        index: './test/index.js',
    },
    devServer: {
        open: true,
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue'],
        },
    },
}
