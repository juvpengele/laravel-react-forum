# Laravel and React SPA Forum

This application can be used as **starter kit** if you want to get started building an single page application with **Laravel** 
and **React JS**. 
This is a classic forum using features like registration and signing in,  managing threads, commenting, searching threads, like threads and replies, mark replies as best and many other feature which can be found in most web applications.

## Technologies

### Frontend

* [React JS](https://fr.reactjs.org) - A JavaScript Library for building great user interfaces.
* [Bootstrap 4](https://getbootstrap.com) - Bootstrap is the most used CSS framework.
* [Redux](https://redux.js.org) - A state management library for front-end applications and serves as a central
store for the application.

### Backend

* PHP 7.2
* SQLite3 for development and MySQL for production.
* [Laravel](http://www.laravel.com) - A PHP Full stack framework
* [Tymon/Jwt-auth](https://jwt-auth.readthedocs.io/en/develop/) - A library used in laravel for Json Web Token authentication

## Features

* CRUD (create / read / update / delete) on threads.
* CRUD (create / read / update / delete ) on replies.
* Mark replies as best by the thread's owner.
* Like threads for authenticated users
* Favorite replies for authenticated users
* Pagination on threads listing
* Searching on threads
* Registration

## Prerequisites

* PHP 7.2
* SQLite3
* Git
* Composer
* Npm (or Yarn)

## Getting Started

* Clone the project from Github

          $ git clone https://github.com/juvpengele/laravel-react-forum.git
          $ cd laravel-react-forum
          laravel-react-forum$
          
### Server


* Install the packages for laravel:

         laravel-react-forum$ cd server
         laravel-react-forum/server$ composer install

* Create the sqlite database file:

          laravel-react-forum/server$ touch database/database.sqlite
          
* Create the .env file :

          laravel-react-forum/server$ cp .env.example .env
        
* Generate the encryption key for Laravel :

          laravel-react-forum/server$ php artisan key:generate
        
* Add database information :

          laravel-react-forum/server$ vim .env  

* Load sample records:

          laravel-react-forum/server$ php artisan migrate --seed
          
          
* Generate JWT secret key:

        laravel-react-forum/server$  php artisan jwt:secret
        


* Run the Laravel Server in development mode:

          laravel-react-forum/serve$ php artisan serve



* Start server in development mode. You should be able to go to `http://localhost:8000/api` and see `Application running`

          
### Client


* Install the packages for laravel:

         laravel-react-forum$ cd client
          
* Install React dependencies (if you use npm, npm install):

          laravel-react-forum/client$ yarn
        
* Start react development server (if you use npm, run npm run start):

          laravel-react-forum/client$ yarn start
      

* Start client in development mode. You should be able to go to `http://localhost:3000`



## State of the project

 The project is still in development

## License

MIT © 
