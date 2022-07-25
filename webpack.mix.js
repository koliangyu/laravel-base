const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
 |--------------------------------------------------------------------------
 | 3rd JS & CSS
 |--------------------------------------------------------------------------
 */
mix.copy('node_modules/pace-progress/pace.min.js', 'public/vendor/pace-progress/pace.min.js');
mix.copy('node_modules/popper.js/dist/umd/popper.min.js', 'public/vendor/popper.js/popper.min.js');

mix.copyDirectory('node_modules/bootstrap/dist/js', 'public/vendor/bootstrap');
mix.copyDirectory('node_modules/bootstrap/dist/css', 'public/vendor/bootstrap');

mix.copyDirectory('node_modules/jquery/dist', 'public/vendor/jquery');

mix.copyDirectory('node_modules/font-awesome/css', 'public/vendor/font-awesome/css');
mix.copyDirectory('node_modules/font-awesome/fonts', 'public/vendor/font-awesome/fonts');

mix.copyDirectory('node_modules/simple-line-icons/css', 'public/vendor/simple-line-icons/css');
mix.copyDirectory('node_modules/simple-line-icons/fonts', 'public/vendor/simple-line-icons/fonts');

/*
 |--------------------------------------------------------------------------
 | Custom JS & CSS
 |--------------------------------------------------------------------------
 */
mix.js('resources/js/app.js', 'public/backend/js')
    .sass('resources/sass/style.scss', 'public/backend/css')
    .sass('resources/sass/vendors/pace-progress/pace.scss', 'public/vendor/pace-progress/css');

mix.browserSync({
    port: 8888,
    proxy: 'localhost:8000'
});