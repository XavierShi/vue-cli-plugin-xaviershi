module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    api.extendPackage({
        dependencies: {
            'animate.css': "^3.7.0",
            'axios': '^0.18.0',
            'dayjs': '^1.8.13',
            'number-precision': '^1.3.1',
            'tween.js': '^16.6.0',
            'vue-i18n': '^8.11.2'
        },
        devDependencies: {
            'node-sass': '^4.12.0',
            'sass-loader': '^7.1.0',
            'less': '^3.9.0',
            'less-loader': '^5.0.0',
        },
        browserslist: [
            "> 1%",
            "last 2 versions",
            "not ie <= 8"
        ]
    })

    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('./template')

    if (options.foo) {
        // 有条件地生成文件
    }
}