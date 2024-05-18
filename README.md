# Avrillo Api

An api to fetch 5 random Kanye quotes.

## Requirements

php8.2 or greater

## Installation

Run the following command in the root directory.

```bash
composer install
```

## Usage
#### Start dev server
start the dev server by running the following command.
```bash
php artisan serve
```

#### Authentication
The auth endpoint accepts an email/password combo. It returns a token to use with the api. A demo user has been setup to test with. Demo user: {email: "test@email.com", password: "test" }
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