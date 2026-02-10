const gulp = require("gulp");
const fileInclude = require("gulp-file-include");

function html() {
  return gulp
    .src("src/pages/**/*.html")
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "src/partials",
      }),
    )
    .pipe(gulp.dest("build"));
}

function watch() {
  gulp.watch("src/**/*.html", html);
}

exports.default = gulp.series(html, watch);
