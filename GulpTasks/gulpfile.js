/// <binding BeforeBuild='debug' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

var gulp = require('gulp');
var gutil = require('gulp-util');


var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

var dest = 'www';

gulp.task('bundle-components-js', function () {

    return gulp.src(plugins.mainBowerFiles())
      .pipe(plugins.filter('*.js'))
      .pipe(plugins.concat('components.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest(dest + "/scripts/"));
});

gulp.task('bundle-components-css', function () {
    gulp.src(plugins.mainBowerFiles())
		.pipe(plugins.filter(['*.css', '*.less']))
        .pipe(plugins.if(/\.less$/, plugins.less()))
        .pipe(plugins.concat('components.css'))
        .pipe(plugins.minifyCss())
		.pipe(gulp.dest(dest + "/css/"));
});

gulp.task('bundle-components-fonts', function () {
    gulp.src(plugins.mainBowerFiles())
		.pipe(plugins.filter(['*.eot', '*.woff', '*.svg', '*.ttf']))
		.pipe(gulp.dest(dest + "/fonts/"));
});

gulp.task('bundle-app-js', function () {
    var assets = plugins.useref.assets();
    return gulp.src('www/index.html')
        .pipe(assets)
        .pipe(gulp.dest(dest));
});

gulp.task('bundle-app-production-js', function () {
    var assets = plugins.useref.assets();
    return gulp.src('www/index.html')
        .pipe(assets)
        .pipe(plugins.ngAnnotate({ single_quotes: true }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dest));
});


gulp.task('bundle-template-cache', function () {
    return gulp.src('app/*/*/*.html')
        .pipe(plugins.angularTemplatecache('templates.js', { module: 'gulpTasksApp.templates', standalone: true }))
        .pipe(gulp.dest(dest + "/scripts/"));
});

gulp.task('debug', ['template-cache', 'bundle-app-js', 'bundle-components-fonts', 'bundle-components-js', 'bundle-components-css']);
gulp.task('production', ['template-cache', 'bundle-app-production-js', 'bundle-components-fonts', 'bundle-components-js', 'bundle-components-css']);