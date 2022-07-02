[![Node.js CI](https://github.com/schneidermichael/cloudia-ui/actions/workflows/node.yml/badge.svg)](https://github.com/schneidermichael/cloudia-ui/actions/workflows/node.yml)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![codecov](https://codecov.io/gh/schneidermichael/cloudia-ui/branch/main/graph/badge.svg?token=AZY7ANS2F4)](https://codecov.io/gh/schneidermichael/cloudia-ui)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=schneidermichael_cloudia-ui&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=schneidermichael_cloudia-ui)
[![Cloudia UI](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/7vjejq&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/7vjejq/runs)

# Cloudia-UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Docker

Run `npm run docker:build` to create a image. To create a container use `docker run -p 8093:80 -d --name cloudia-ui cloudia-ui:latest`. To start or stop the container manually we can use these commands: `docker start cloudia-ui` and `docker stop cloudia-ui`.
