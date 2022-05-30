import { BASE_DIR } from '@exam-cell-config';
import copy from 'gulp-copy';
import gulp from 'gulp';
import path from 'path';

const copyFavicon = () => {
	const source = path.join(BASE_DIR, '/favicon/*');
	const destination = path.join(path.dirname(BASE_DIR), 'build', 'src','favicon');
	const compiled = gulp
		.src(source)
		.pipe(copy(destination, { prefix: 2 }));
		// .pipe(gulp.dest(destination));

	return compiled;
};

export default gulp.task('copy:favicon', copyFavicon);