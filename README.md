
### (means we will load a fake page until website will shown to the user)-Shimmer.


### use state vs use effect
https://blog.stackademic.com/understanding-the-differences-between-usestate-and-useeffect-in-react-b61cad91df3c

### updated 
 Here i wrote the Api in the Utils folder because it should be secure.
 
 ## routing
 before we start Routing we r going deeper inside the hooks.

 # useEffect()
   /**
 *  useEffect is called every time the component render
 * dependency array changes the behavior of the  render->[]
 * If No dependency array => useEffect is called on every render.
 * if there is empty [] dependency => useEffect is called on initial render
 * (just once when the component called one time if it render once again but useEffect is not called again and again)
 * if there something on the dependency array is [btnNameReact] => useEffect is called everytime it's updated
 */

 # UseState()
   /**
   * UseState Should not be written outside the body component
   * We should write on the Top because js is synchronous language
   * We should use  state variable inside the If condition it will give inconsistency to the program
   * we should use state variable inside the for loop and function also
   */

# Router
/**
* To install this package npm i react-router-dom
* we have to create a configuration it is nothing but what should happened on the specific route.
* when ever we create a configuration we should need ton provide this configuration to render the route so we to add               RouterProvider. =>import { createBrowserRouter, RouterProvider }
* 
*/