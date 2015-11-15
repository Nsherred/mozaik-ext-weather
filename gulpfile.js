var gulp   = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function () {

    return gulp.src(['**/*.js','**/*.jsx','!node_modules/**'])
        .pipe(eslint({'fix': true}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {
    // This will only run if the lint task is successful...
});