import { BASE_DIR } from '@exam-cell-config';
import copy from 'gulp-copy';
import gulp from 'gulp';
import path from 'path';

const copyAssets = () => {
	const source = path.join(BASE_DIR, '/views/*');
	const destination = path.join(path.dirname(BASE_DIR), 'build', 'src','views');
	const compiled = gulp
		.src(source)
		.pipe(copy(destination, { prefix: 2 }));
		// .pipe(gulp.dest(destination));

	return compiled;
};

gulp.task('copy:views', copyAssets);