## Optimizing our App

* Here i created a septate hook for fetching api in RestaurantMenu and body 
* i used useRestaurantMenu and useBody  in Utils folder so that it is easy to testing the app if we got the error in the fetching data or menu 
## for more example i created a online and offline feature 
i have used window.eventlistner to create this function also i called this in header and body.
to got offline i used browser network .

## optimizing our app even more
we are herring break downing the js file into smaller pieces using 
* chunking,
* code splitting,
* lazy loading, 
* dynamic bundling
* we r using lazy loading (it also called on demand loading)
* we are also using suspense <Suspense fallback={ <h1> we can add shimmer ui </h1> }> </Grocery> </suspense>

