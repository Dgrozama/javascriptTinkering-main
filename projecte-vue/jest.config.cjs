module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: ['**/tests/**/*.spec.[jt]s?(x)'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest'
    },
    transformIgnorePatterns: [
        '/node_modules/(?!@vue/test-utils|vue-router)'
    ]
}