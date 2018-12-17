const gulp = require('gulp')
const babel = require('gulp-babel')
const watch = require('gulp-watch')
const rollup = require('gulp-rollup')
const replace = require('rollup-plugin-replace')

gulp.task('builddev', () =>{
    // 实时监听
    return watch('./src/nodelayer/**/*.js',{
        ignoreInitial:false
    },()=>{
        gulp.src('src/nodelayer/**/*.js')
        .pipe(babel({
            babelrc:false,
            'plugins':['transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest('build'))
    })
});

gulp.task('buildprod', () =>{
        gulp.src(['src/nodelayer/**/*.js','!./src/nodelayer/config/index.js'])
        .pipe(babel({
            babelrc:false,
            'plugins':['transform-es2015-modules-commonjs']
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('buildconfig', () =>{
    gulp.src('src/nodelayer/config/*.js')
    // tree shaking 优化
    .pipe(rollup({
        format:'cjs',
        input:'./src/nodelayer/config/index.js',
        'plugins':[
            replace({
                'process.env.NODE_ENV':JSON.stringify('production')
            })
        ]
    }))
    .pipe(gulp.dest('build/config'))
});

let _task = ['builddev']
// 上线  需tree shaking  优化
if(process.env.NODE_ENV ==='production'){
    _task = ['buildprod','buildconfig']
}

gulp.task('default', _task);
