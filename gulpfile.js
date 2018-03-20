var autoprefixer = require('autoprefixer');
var cssnano = require("cssnano");
var del = require('del');
var gulp = require('gulp');
var postcss = require("gulp-postcss");
var rename = require('gulp-rename');
var sass = require("gulp-sass");

const destPath = "./dist/";
const name = "grid-deluxe";

gulp.task("clean", function () {
  return del([destPath])
});

gulp.task('default', ["clean"], function () {
  return gulp.src("./src/grid.scss")
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(rename(`${name}-without-prefixes.css`))
    .pipe(gulp.dest(destPath))
    .pipe(postcss([autoprefixer({
      browsers: [
        "ie >= 10",
        "safari >= 6.1"
      ]
    })]))
    .pipe(rename(`${name}.css`))
    .pipe(gulp.dest(destPath))
    .pipe(postcss([cssnano()]))
    .pipe(rename(`${name}.min.css`))
    .pipe(gulp.dest(destPath))
    .on('error', consumeError);
});

function consumeError(error) {
  console.error(error.toString());
  this.emit('end');
}