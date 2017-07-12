# PatternGrid

This project was created to provide a way to map out knitting patterns. It uses an Angular frontend, Node.js RESTful API, and a MySQL database.

## Development

Run `ng build --watch` from the root of the project in order to compile and watch for changes in the Angular code. Run `node server.js` to serve the node and angular code. Navigate to `http://localhost:3000`. Any changes to the Angular code will only require refreshing the browser once the build has completed, but changes to the node code will require stopping the terminal and running `node server.js` for the changes to take effect.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). (The unit tests are yet to be completed)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). (The end-to-end tests are yet to be completed)
Before running the tests make sure you are serving the app via `node server.js`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
