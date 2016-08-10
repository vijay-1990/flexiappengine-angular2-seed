"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const connect = require('gulp-connect');
const webpack = require('gulp-webpack');

// bundling task using webpack
gulp.task('webpack', function () {
  var webpackConfig = require('./webpack.prod.js');
  return gulp.src('./angular/app/main.ts')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./src/main/webapp/'));
});

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    //return del(["src/main/webapp/","!src/main/webapp/WEB-INF","!src/main/webapp/*.jsp"], cb);
    return del(['src/main/webapp/app/','src/main/webapp/lib/','src/main/webapp/css/',
        'src/main/webapp/images/','src/main/webapp/fonts/',
        'src/main/webapp/*.js','src/main/webapp/*.html'], cb);
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", [], () => {
    let tsResult = gulp.src("angular/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("src/main/webapp"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["angular/**/*", "!**/*.ts"])
        .pipe(gulp.dest("src/main/webapp"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("src/main/webapp/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["angular/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["angular/**/*.html", "angular/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs'], () => {
    console.log("Building the project ...");
});

gulp.task('serve', function() {
    connect.server({
        port: '8080',
        root: './src/main/webapp',
        fallback: './src/main/webapp/index.html',
        livereload: true
    });
});