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
mix.copyDirectory('node_modules/@coreui/icons/sprites', 'public/vendor/@coreui/icons/sprites');

mix.copy('node_modules/simplebar/dist/simplebar.min.js', 'public/vendor/simplebar/dist');
mix.copy('node_modules/simplebar/dist/simplebar.min.css', 'public/vendor/simplebar/dist');

/*
 |--------------------------------------------------------------------------
 | Custom JS & CSS
 |--------------------------------------------------------------------------
 */
mix.js('resources/js/app.js', 'public/backend/js')
    .sass('resources/scss/style.scss', 'public/backend/css')
    .sass('resources/scss/vendors/simplebar.scss', 'public/backend/css/vendors');

mix.browserSync({
    port: 8888,
    proxy: 'localhost:8000'
});