const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Define a task to concatenate and minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Define a default task
gulp.task('default', gulp.series('scripts'));
