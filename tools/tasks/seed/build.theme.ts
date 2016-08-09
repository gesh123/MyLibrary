import * as gulp from 'gulp';
import {PRIMEUI_SRC, PRIMEUI_THEME, CSS_DEST} from '../../config';

//TO DO - no hardcoded paths but parameters from config
export = () => {
return gulp.src(PRIMEUI_SRC + '/themes/' + PRIMEUI_THEME + '/**')
      .pipe(gulp.dest(CSS_DEST + '/' + PRIMEUI_THEME))
      && 
      gulp.src(PRIMEUI_SRC + '/primeui-ng-all.min.css')
      .pipe(gulp.dest(CSS_DEST))
      && 
      gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
      .pipe(gulp.dest(CSS_DEST));
};
