# Appengine sample for Google App Engine Flexible Environment - with Angular 2.4 as UI framework
This sample demonstrates how to deploy an application on Google App Engine

## Installing Packages
	$ npm install

## Running Application using Webpack dev server
	$ npm start
This will make the server up on port number 8080, http://localhost:8080

## Running locally using jetty server
	$ gulp clean
	$ gulp webpack
    $ mvn jetty:run
This runs on localhost:8080

## Deploying the app to the cloud
	$ gulp clean
	$ gulp webpack
    $ mvn gcloud:deploy

## Testing it on local
