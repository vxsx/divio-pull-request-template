var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('default', function() {
    gulp.src('./src/bookmarklet.js')
        .pipe(inject(gulp.src(['./template.md']), {
            starttag: '/* inject:template.md */',
            endtag: '/* endinject */',
            transform: function (filePath, file) {
                return '[' + file.contents.toString('utf8').split('\n').map(function (str) {
                    return '"' + str.replace('"', '\"') + '",';
                }).join('\n') + '""];';
            }
        }))
        .pipe(gulp.dest('.'));
});
