var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');


gulp.task('sass',(done)=> {
   gulp.src('./dev/scss/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./assets/css'));
   done();
   console.log("done scss!")
});


gulp.task('clear', (done) => {
  return gulp.src('./assets/css/style.css', {read: false})
  .pipe(clean());
  done();
  console.log('done clear!');
});

gulp.task('default',

gulp.series('clear','sass')
,

(done) => {
  console.log("teste!!!")
  done()
  console.log("done!")
});
