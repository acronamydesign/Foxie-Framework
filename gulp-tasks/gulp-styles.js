module.exports = function (gulp, plugins, map, foxieFramework) {
	return function () {
		gulp.src(map.src.stylFile)
			.pipe(plugins.stylus({define:{"foxieFramework":foxieFramework.entry}}))
			.pipe(gulp.dest(map.dest.css))
			.pipe(plugins.livereload());
    };
};