/**
 * Created by Hernan Y.Ke on 2016/2/26.
 */
    'use strict';
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    path = require('path'),
    fs = require('fs');


gulp.task('server',()=>{
    return gulp.src("./srcserver/**/*.js")
        .pipe($.cached("server"))
        .pipe($.babel())
    .pipe(gulp.dest("./build"));
});

gulp.task('client',()=>{
    const files = fs.readdirSync("./srcclient");
    for(let i=0;i<files.length;i++){
        const file = files[i]
        if(path.extname(file)!=='.js'){
            continue;
        }
        initBundlerWatch(path.join("srcclient",file))
    }
    return gulp.watch("./srcserver/**/*.js").on("change",initBundlerWatch);
})

gulp.task("watch",gulp.parallel("client","server"));

gulp.task("watch:server",()=>{
    return gulp.watch("./srcclient/**/*.js",gulp.series("server"));
})

let bundlers={};
function initBundlerWatch(file){
    if(bundlers.hasOwnProperty(file)){
        return;
    }
    const bundler = createBundler(file);

    bundlers[file] =bundler;
    const watcher = watchify(bundler);
    const filename = path.basename(file);

    //create a closure
    function bundle(){
        return bundler.bundle().on("error",error=>console.error(error))
        .pipe(source(filename))
        .pipe(gulp.dest("./public/build"))
    }

    watcher.on('update',bundle);
    watcher.on('time',time=>console.log(`build on ${time} ms` ));
    bundle();
}


function createBundler(file){
    const bundler = browserify(file);
    bundler.transform(babelify);
    return bundler;
}

