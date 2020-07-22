# CoffeeJournalClient

## Description
A web application that lets you log thoughts about coffee and all the fun variables related to it

### Features 
- Log coffee you've tried :coffee:
- Log how you made it :man_cook:
- Rate it and describe it :thought_balloon:

## Built With
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)

## Installation
### Local Development
```
npm install
ng serve
```

The development server will start on `http://localhost:4200/`.

### Docker

```
docker build -t coffee-journal-client .
docker run -it -p 8081:80 angularcoffee:test
```

The local nginx server will be available on localhost:8081

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
