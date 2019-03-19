'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var sourcemaps = require('gulp-sourcemaps');
var replace = require('gulp-replace');
var zip = require('gulp-vinyl-zip');
var pkg = require('../package.json');

gulp.task('libjs', function () {
        return gulp.src([
                'bower_components/ace-builds/src/ace.js',
                'bower_components/remarkable/dist/remarkable.js',
                'bower_components/ace-builds/src/mode-markdown.js',
                'src/custom_ace/mode-markdowneditor.js',
                'src/custom_ace/gutter_toolbar.js',
                'bower_components/ace-builds/src/ext-language_tools.js',
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/cropper/dist/cropper.min.js',
                'bower_components/diff-dom/browser/diffDOM.js',
                'src/vendor/appender.js'
            ])
            .pipe(plumber())
            .pipe(replace(/(font:[^']*)('Monaco'.*)(monospace;)/, '$1$3')) // bug with editor in windows: wrong cursor position for tags like [[!chunkName]]
            .pipe(concat('dependencies.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('../../assets/components/markdowneditor/js/mgr'));
});

gulp.task('acethemes', function () {
        return gulp.src([
                'bower_components/ace-builds/src/theme-*.js'
            ])
            .pipe(plumber())
            .pipe(concat('acethemes.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('../../assets/components/markdowneditor/js/mgr'));
});

gulp.task('js-highlight', function () {
        return gulp.src([
            'src/vendor/highlight/highlight.pack.js'
            ])
            .pipe(plumber())
            .pipe(concat('highlight.pack.js'))
            .pipe(gulp.dest('../../assets/components/markdowneditor/js'));
});

gulp.task('js', function () {

    return gulp.src(['src/*.js'])
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe(concat('app.js'))
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('../../assets/components/markdowneditor/js/mgr'));
});



var VERSION = pkg.version;
var NAME = 'markdowneditor-' + VERSION + '-pl';

gulp.task('pack-bootstrap', function () {

    return zip.src('../markdowneditor-dummy-bootstrap.zip')
            .pipe(plumber())
            .pipe(replace('$$VER$$', VERSION))
            .pipe(gulp.dest('../../.tmp/' + NAME));
});

gulp.task('pack-copy-assets', function () {

    return gulp.src(['../../assets/components/**/*'])
            .pipe(plumber())
            .pipe(gulp.dest('../../.tmp/' + NAME + '/modCategory/c9dd06ff5ec932c3c7269af8b7aaa866/0'))
});


gulp.task('pack-copy-core', function () {

    return gulp.src(['../../core/components/**/*'])
            .pipe(plumber())
            .pipe(gulp.dest('../../.tmp/' + NAME + '/modCategory/c9dd06ff5ec932c3c7269af8b7aaa866/1'))
});


gulp.task('pack-zip', function () {
    return gulp.src(['../../.tmp/**/*'])
            .pipe(zip.dest('../../_packages/' + NAME + '.transport.zip'));
});


gulp.task('js:watch', ['js'], function () {
    gulp.watch('src/*.js', ['js'])
});
