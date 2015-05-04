module.exports = function (gulp, plugins, map) {
	return function () {
		gulp.src('index.*')
			.pipe(plugins.jade())
			.pipe(gulp.dest(map.dest.root))
			.pipe(plugins.livereload());
	};
};