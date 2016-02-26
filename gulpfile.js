/**
 * Created by Hernan Y.Ke on 2016/2/26.
 */
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify');


gulp.task('server',()=>{
    return gulp.src("./srcserver/**/*.js")
    .pipe(gulp.dest("./build"));
});


gulp.task("watch:server",()=>{
    return gulp.watch("./srcserver/**/*.js",gulp.series("server"));
})