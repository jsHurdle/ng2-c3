# Ng2-c3 Documentation

ng2-c3 is an **Angular2** component for consuming **C3** charts in a more generic way.
This let's you specify various configuration as allowed by C3.

This also includes,

- Usage manual
- A demo application that can be directly cloned and tested
- Uses webpack for building and serving the application
- Uses NPM for bundling the packages necessary
- References
- Demo [Link](https://jshurdle.github.io/ng2-c3/)

All you have to do is follow these simple steps:

1. npm install
- First navigate to any empty directory where you want to download the contents.
```sh
git clone https://github.com/jsHurdle/ng2-c3.git
```
In case you are using ssh for cloning, do this instead
```sh
git@github.com:jsHurdle/ng2-c3.git
```
- From your desired terminal, do
```sh
cd ng2-c3
```
to navigate into the folder. This is the root folder of the application, you can see package.json, webpack.config, ...
> Before starting your application, you need to install all the dependencies required for running the project, which can include angular2, c3, webpack, ...
For achieving that, do the following step.

```sh
npm install
```
This installs all the required dependencies and developement's dependencies.

2. Now that your dependencies are installed and in place, you can build and start your application by the following command.
```sh
npm start
```
This internally builds and starts your application. The build is taken care by webpack. You can learn more about that here [link](https://webpack.github.io/)
Now, your server should be started and the webpack bundle should be valid.

> Navigate to http://localhost:8080/webpack-dev-server/  to see your application running. 

### Examples
- For creating a line chart, in your component's template you have to provide somthing like this,

```sh
<ng2-c3 [data]="dataVariable"></ng2-c3>
```

### References
- [C3Js.org](http://c3js.org)
- [Angular 2](https://angular.io/)

### Tech

This uses a number of open source projects to work properly:

* [node.js] - For installing and using NPM modules
* [SystemJS] - AMD
* [Npm] - Packaging
* [Webpack] - the streaming build system, task running and bundling


### Todos

 - Update Readme with more information

**Free Software**
