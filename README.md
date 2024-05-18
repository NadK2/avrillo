# Avrillo Api

An api to fetch 5 random Kanye quotes.

## Requirements

php 8.2 or greater\
node 18 or greater\
npm 10 or greater

## Installation

clone the git repo
```
git clone https://github.com/NadK2/avrillo.git
```

Run the following commands in the root directory.
```bash
> composer install
> npm i
> php artisan migrate
> php artisan db:seed
> npm run build
```

## Usage
#### Start dev server
start the dev server by running the following command.
```bash
php artisan serve
```
## UI Consuming Api
A basic UI consuming the api can be accessed at the following url.\
Demo user:\
email: test@email.com\
password: test
```
http://locahost:8000/
```

## API
#### Authentication
The auth endpoint accepts an email/password combo. It returns a token to use with the api. A demo user has been setup to test with.\
Demo user: {email: "test@email.com", password: "test" }
```bash
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
```

#### Fetching quotes
To fetch quotes from the api, add the bearer token from above to the request headers. A list of quotes will be returned.
```bash
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
```


## Testing
You can run the predefined tests with the following command
```bash
php artisan test
```
