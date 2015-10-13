// ////////////////////////////////////////////////
// Required taskes
// gulp build
// bulp build:serve
// // /////////////////////////////////////////////

var gulp = require('gulp'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
	path = require('path'),
	less = require('gulp-less'),
	webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});


// ////////////////////////////////////////////////
// Log Errors
// // /////////////////////////////////////////////

function errorlog(err){
	console.log(err.message);
	this.emit('end');
}

// ////////////////////////////////////////////////
// PHP Tasks
// ///////////////////////////////////////////////

gulp.task('html', function(){
    gulp
    .src('*.html')
    .pipe(livereload());
});

// ////////////////////////////////////////////////
// Styles Tasks
// ///////////////////////////////////////////////

gulp.task('styles', function() {
	return gulp
		.src('style.less')
		.pipe(less({
		    paths: [ path.join(__dirname, 'less', 'includes') ]
		  }))
		.pipe(rename("style.css"))
		.pipe(gulp.dest(''))
        .pipe(livereload());
});

// ////////////////////////////////////////////////
// Watch Tasks
// ///////////////////////////////////////////////

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['*.less', 'base/*.less', 'header_standard/*.less', 'footer_standard/*.less', 'footer_developer/*.less', 'body_standard/*.less'], ['styles']);
    gulp.watch(['*.html'], ['html']);
});

gulp.task('default', ['styles']);