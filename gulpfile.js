var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function() {
    gulp.src('./src/index.html')
        .pipe(inject(gulp.src(['./template.md']), {
            starttag: '/* inject:template.md */',
            endtag: '/* endinject */',
            transform: function (filePath, file) {
                return "\'" + file.contents.toString('utf8').split('\n').map(function (str) {
                    return str.replace(/(')/g, '\\$1').replace(/"/g, '&quot;');
                }).join('\\n') + "\';";
            }
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/index.html', 'template.md'], ['default']);
});
