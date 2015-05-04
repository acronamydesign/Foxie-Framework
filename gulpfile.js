var gulp = require('gulp'),
		plugins = require('gulp-load-plugins')(),
		uglify = require('gulp-uglify'),
		stylus = require('gulp-stylus'),
		livereload = require('gulp-livereload'),
		jade = require('gulp-jade'),
		browserify = require('gulp-browserify'),
		imagemin = require('gulp-imagemin'),
		foxieFramework = require('foxie-framework'),
		path = require('path'),
		dirSync = require('gulp-dir-sync'),
		map = require('./map.js');

//E R R O R S
function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}

gulp.task('html', require('./gulp-tasks/gulp-markup.js')(gulp, plugins, map));
gulp.task('minimg', require('./gulp-tasks/gulp-images.js')(gulp, plugins, map));
gulp.task('scripts', require('./gulp-tasks/gulp-scripts.js')(gulp, plugins, map));
gulp.task('styles', require('./gulp-tasks/gulp-styles.js')(gulp, plugins, map, foxieFramework));

gulp.task("foxie-styles", foxieFramework.styles());
gulp.task("foxie-scripts", foxieFramework.scripts());
gulp.task("foxie-sync", foxieFramework.sync());

// W A T C H
gulp.task('watch', function(){

	livereload.listen();
	gulp.watch(["index.*","templates/**/*"], ['html']);
	gulp.watch(map.src.img, ['minimg']);
	gulp.watch(map.src.jsFile, ['scripts']);
	gulp.watch(map.src.stylFile, ['styles']);
	gulp.watch(foxieFramework.watch().styles, ['foxie-styles','styles']);
	gulp.watch(foxieFramework.watch().scripts, ['foxie-scripts','scripts']);
	gulp.watch(foxieFramework.watch().settings, ['foxie-styles','styles','foxie-sync']);

});

gulp.task('default', ['scripts','styles','html','minimg','watch','foxie-styles','foxie-scripts','foxie-sync']);