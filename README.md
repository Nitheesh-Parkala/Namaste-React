# Namaste-React
# content delivery network
A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network.

# CORS 
(Cross Origin Resource Sharing) is an HTTP feature that enables a web application running under one domain to access resources in another domain.

# CDN Link: 
https://legacy.reactjs.org/docs/cdn-links.html


# React.element
it is nothing but a object.

# render
it will take the object and it will render or convert that object and give the html tag element which browser understand

react will only work within the div id root only.

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