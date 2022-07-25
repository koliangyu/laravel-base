# Laravel Base

### The base for CoreUI Bootstrap Admin Template

Laravel Base is a Laravel application that adds Core UI Bootstrap management templates to customize the project.
Created with Laravel 9.x.

## Features

- [Core UI](https://coreui.io/) Template

## Installation

``` bash
# clone the repo
$ git clone https://github.com/koliangyu/laravel-base.git

# go into app's directory
$ cd laravel-base

# install app's dependencies
$ composer install

# install app's dependencies
$ npm install

```
### If you choice to use MySQL

Copy file ".env.example", and change its name to ".env".
Then in file ".env" complete this database configuration:
* DB_CONNECTION=mysql
* DB_HOST=127.0.0.1
* DB_PORT=3306
* DB_DATABASE=laravel
* DB_USERNAME=root
* DB_PASSWORD=

### Next step

``` bash
# in your app directory
# generate laravel APP_KEY
$ php artisan key:generate

# run database migration and seed (optional)
$ php artisan migrate:refresh --seed

# generate mixing
$ npm run dev
```

## Usage

``` bash
# start local server
$ php artisan serve

# or to developer mode
$ npm run watch
```

Open your browser with address: [localhost:8000](localhost:8000)  
