var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('views', function buildHTML() {
	return gulp.src('src/templates/*.pug')
		.pipe(pug({
			// Your options in here.
		}))
		.pipe(gulp.dest('./dist'))
});

gulp.task('views1', function buildCSS() {
	return gulp.src('src/styles/*.sass')
		.pipe(sass({
			// Your options in here.
		}))
		.pipe(gulp.dest('./dist/css'))
});

gulp.task('default', function () {
	gulp.start([
		'views',
		'views1'
	]);
});