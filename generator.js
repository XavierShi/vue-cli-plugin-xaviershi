module.exports = (api, options, rootOptions) => {
	// 修改 `package.json` 里的字段
	api.extendPackage({
		dependencies: {
			'amfe-flexible': '^2.2.1',
			'animate.css': "^3.7.0",
			'axios': '^0.18.0',
			'dayjs': '^1.8.13',
			'fastclick': '^1.0.6',
			'number-precision': '^1.3.1',
			'@tweenjs/tween.js': '^16.6.0',
			'vconsole': '^3.3.0',
			'vue-i18n': '^8.11.2',
			'vue-router': '^3.0.6',
			'vuex': '^3.1.0'
		},
		devDependencies: {
			'less': '^3.9.0',
			'less-loader': '^5.0.0',
			'postcss-px2rem': '^0.3.0',
			'stylus': '^0.54.5',
			'stylus-loader': '^3.0.2'
		},
		postcss: {
			"plugins": {
				"autoprefixer": {},
				"postcss-px2rem": {
					"remUnit": 37.5
				}
			}
		},
		browserslist: [
			"> 1%",
			"last 2 versions",
			"not ie <= 11",
			"Android >= 4.0",
			"iOS >= 8"
		]
	})

	// 复制并用 ejs 渲染 `./template` 内所有的文件
	api.render('./template')

	if (options.foo) {
		// 有条件地生成文件
	}
}