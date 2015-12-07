'use strict';

var gulp    = require('gulp'),
    $       = require('gulp-load-plugins')(),
    cssnano = require('cssnano'),
    yaml    = require('js-yaml'),
    fs      = require('fs'),
    cfg     = yaml.safeLoad(fs.readFileSync('_config.yml'));

require('shelljs/global');

var htmlMinifierOptions = {
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true
};

var dirs = {
  public: 'public',
  fonts: 'public/fonts',
  imgs: 'public/img',
  assetsDir:'public/assets'
};

gulp.task('useref', ['hexo'], function(){

  return gulp.src('public/**/*.html')
    .pipe($.useref({
        searchPath:'public',
        transformPath: function(filePath) {
            return filePath.replace(dirs.public + cfg.root, dirs.public + '/');
        }
    }))
    .pipe($.if('*.css', $.postcss([
      cssnano()
    ])))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.html', $.htmlMinifier(htmlMinifierOptions)))
    .pipe(gulp.dest('public'));
});

gulp.task('rev:media', function(){

    return gulp.src([dirs.fonts + '/**/*', dirs.imgs + '/**/*'], {base: dirs.public})
        .pipe($.rev())
        .pipe(gulp.dest(dirs.assetsDir))
        .pipe($.rev.manifest('rev-media.json'))
        .pipe(gulp.dest(dirs.assetsDir));

});

gulp.task('rev:scripts', ['useref', 'rev:media'], function(){
    var manifest = gulp.src(dirs.assetsDir + '/rev-media.json');

    return gulp.src([dirs.public + '/css/dist*.css', dirs.public + '/js/dist*.js'], {base: dirs.public})
        .pipe($.rev())
        .pipe($.revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(dirs.assetsDir))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(dirs.assetsDir));

});

gulp.task('img:min', ['rev:media'], function(){

    var pngquant = require('imagemin-pngquant');

    return gulp.src(dirs.assetsDir + '/img/**/*', {base: dirs.assetsDir})
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox:false}],
            use:[pngquant()]
        }))
        .pipe(gulp.dest(dirs.assetsDir))
});

gulp.task("rev:replace", ["rev:scripts"], function(){
    var manifest = gulp.src([dirs.assetsDir + '/rev-*.json']);

    return gulp.src([ dirs.public + "/**/*.html"])
        .pipe($.revReplace({
            manifest: manifest,
            modifyReved:function(fileName){
                if(fileName.indexOf('/dist') > -1){
                    //special files proccessed by gulp-useref
                    fileName = cfg.root + 'assets/' + fileName;
                }else {
                    fileName = 'assets/' + fileName; 
                }
                return fileName;
            }
        }))
        .pipe(gulp.dest(dirs.public));
});

gulp.task('hexo', function(){
   
   exec('hexo g');

});

gulp.task('img', ['img:min']);
gulp.task('default', ['rev:replace', 'img']);
