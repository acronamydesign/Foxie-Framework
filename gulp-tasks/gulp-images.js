module.exports = function (gulp, plugins, map) {
	return function () {
		gulp.src(map.src.img + '*')
			.pipe(plugins.imagemin({
				progressive: map.settings.imagemin.progresive,
				svgoPlugins: map.settings.imagemin.svgoPlugins
			}))
			.pipe(gulp.dest(map.dest.img));
    };
};