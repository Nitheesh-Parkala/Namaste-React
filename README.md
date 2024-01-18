# React
It is a library it will work independently at the smaller portion of the app and it is not a full fledged framework.

package.json is a configuration of npm

They are Two types of dependencies.
1. dev dependencies-It will require for development of app
2. normal dependencies-  It will used in the production
To install parcel we use 
## cmd:
 npm i -D parcel

 npx parcel index.html -> it will generate the server(http://localhost:1234)

 npm i react (we should not use CDN link)

 npx means it will execute the package
parcel is nothing but a beast
package-lock.json -> It will use exact version of the package
package.json it will -> keep track of the version.(It will keep the approximate version)

# parcel
Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start.

-Dev Build

-Local server

-HMR -Hot module replacement

-It will use file watching algorithm (It is developed in c++)

-caching -faster Builds

-It will also used in image optimization

-minification

-bundling

-compress the file (it will remove white spaces of the code)

-consistent hashing

-code Splitting

-Differential Bundling-to support older browser

-Diagnostic -error handling

-Tree Shaking

-Remove unused code

To more about parcel refer documentation:
https://parceljs.org/

Note: In package-lock.json file im removing  ("main": "app.js")  while running the command (npx parcel build index.html) other wise it will throw me error.


-BrowsersList: https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

## what is dist folder
The dist folder in React is a directory that contains the built version of your application. This includes the compiled JavaScript code, CSS, and other assets that are needed to run your application in a production environment.
The dist folder is typically created when you run the npm run build command. This command will compile your application's source code into a distributable format. The dist folder will also contain any other files that are needed to run your application, such as images, fonts, and manifest files.

Once your application is built, you can deploy the dist folder to a web server. This will make your application available to users over the internet.

Here are some of the benefits of using a dist folder:
It allows you to keep your source code separate from your built code. This makes it easier to develop and maintain your application.

## documentation
https://parceljs.org/features/production/ 