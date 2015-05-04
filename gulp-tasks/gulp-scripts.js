module.exports = function (gulp, plugins, map) {
	return function () {
		gulp.src(map.src.jsFile)
			.pipe(plugins.browserify())
			.pipe(plugins.uglify())
			.pipe(gulp.dest(map.dest.js))
			.pipe(plugins.livereload());
    };
};