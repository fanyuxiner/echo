var gulp=require('gulp');
gulp.task('hello', function () {
    console.log('hello');
});
cssmin = require('gulp-minify-css');
gulp.task('myminifycss', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
minifyHtml = require("gulp-minify-html");
gulp.task('myminifyhtml', function () {
    gulp.src('*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
.pipe(gulp.dest('dist/html'));
});
gulp.task('default',['hello','myminifycss','myminifyhtml']);