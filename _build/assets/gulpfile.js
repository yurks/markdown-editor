'use strict';
var fs = require('fs');
var gulp = require('gulp');
var del = require('del');

fs.readdirSync(__dirname + '/gulp').forEach(function (module) {
    require(__dirname + '/gulp/' + module)
});

gulp.task('clean-tmp', function(){
     return del('../../.tmp/**/*', {force:true});
});

gulp.task('clean-assets', function(){
     return del('../../assets/**/*', {force:true});
});

gulp.task('build', ['clean-assets'], function () {
    gulp.start('_build');
});
gulp.task('_build', ['js', 'libjs', 'acethemes', 'js-highlight', 'css', 'libcss', 'github-md', 'noembed-css', 'cards-css', 'css-highlight']);


gulp.task('pack', ['clean-tmp'], function () {
  gulp.start('_pack');
});
gulp.task('_pack', ['pack-bootstrap', 'pack-copy-assets', 'pack-copy-core'], function () {
  gulp.start('pack-zip');
});

gulp.task('default', ['js:watch', 'css:watch']);
