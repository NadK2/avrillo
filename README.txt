# Avrillo Api

An api to fetch 5 random Kanye quotes.

#REQUIREMENTS

php8.2 or greater

#INSTALLATION

Run the following command in the root directory.
> composer install

#USAGE

Start the dev server by running the following command.
> php artisan serve


#DATABASE

A sqlite database is bundled with this project. All migrations have been run 
and the db is ready for use. It is located at database/database.sqlte


#AUTHENTICATION

The auth endpoint accepts an email/password combo. It returns a bearer token to
use with the api. A demo user has been setup to test with. 
Demo user: {email: "test@email.com", password: "test" }

route
----------------------------------------------------
    Post : http://localhost:8000/auth

    Headers : [
        'Accept': 'application/json'
    ]

    Body : [ 
         email: "string|required",
         password: "string|required"
    ]

    Response : [ 
         time: "string",
         token: "string"
    ]
----------------------------------------------------


#FETCHING QUOTES

To fetch quotes from the api, add the bearer token from above to the
request headers. A list of quotes will be returned.

route
----------------------------------------------------
    Get : http://localhost:8000/quotes

    Headers : [
        'Accept': 'application/json',
        'Authorization': 'Bearer <TOKEN_HERE>'
    ]

    Response : [ 
         quotes: [
             "quote 1",
             "quote 2",
              ....
         ]
    ]
-----------------------------------------------------

#TESTING

You can run the predefined tests with the following command
> php artisan test

