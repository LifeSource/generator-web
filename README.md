# Generator-Web
This is a simple yeoman generator for me to practices the foundational pieces of the web that is HTML, CSS and JavaScript. Its purpose is allow you to setup a sandbox environment without all the extra bells and whistles of unit testing, code linting and other plugins.

### Software Requirements
```
1. Node	  - http://www.nodejs.org
2. NPM	  - should come bundle with node onced its installed
3. Yoeman - npm install yo -g
4. Git	  - get it from the git website.
```

### Technology Stack
1. Node, NPM
2. JavaScript
3. SaSS (.SCSS) - Node-Sass
4. Git

### Installation Instructions
```
1. git clone <repository url>
2. cd <repo>
3. npm install
4. npm link
```
### Scaffolding out a basic web application
Once you have installed the appropriate components and tools. You can simply scaffold out a simple static web app. Follow the instruction below:

```
1. mkdir <project name>
2. cd <project name>
3. yo web
4. npm start
```
This should fire up your web browser using browser-sync and watch the files in the current directory for any changes and reloads the browser.

### Application Structure
```
App
 |
 package.json - this is the node entry file for your app, contains the dependencies and setup information.
 |
 index.html - the default landing page where the magic happens.
 |
 scripts/ - javascripts are stored here. (app.js)
 |
 styles/ - stylus files are stored in this folder, the CSS will be generated from the NPM tasks when you run ```npm start```
 |
 images/ - images are stored in this folder.
```
### Enjoy and Good Luck!
