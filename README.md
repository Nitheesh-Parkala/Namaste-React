
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
* we are creating the childern route to create this route we should import the packege called <Outlet> all the path will be filled inside the outlet what we given in the browser url.
* We are Creating the link using Link to {} instaed of <a> tag beacuse link tag will not reload the whole page.
* ## Routing in web app
* server side routing
* clinet side routing 
* here we using clinet side routing because we r not calling api and network call.
*/

/**
* Dynamic routing
* different page for different rest
*  To use dynamic id in this application we need to import { UseParams }
/

## Some error is fixed 
## Changelog

### Version X.X.X (Date)

#### User Fixes
- Resolved the "TypeError: Cannot destructure property 'name' of '(intermediate value)' as it is undefined" issue in the `RestaurantMenu` component.

#### Details
The error in the `RestaurantMenu` component indicates that the property `resInfo.cards[0].card.card.info` is undefined, leading to an attempt to destructure `name` and `cuisines` from it. To address this issue, it's crucial to check if each nested property exists before attempting to destructure it.

Here's an example of how to use optional chaining (?.) for destructuring, preventing the error by providing default values:

```jsx
const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info || {};



## Changelog

### Version X.X.X (Date)

#### Fixes
- Resolved the issue with the error "TypeError: Cannot read properties of undefined (reading 'map')".

### Details
The error "TypeError: Cannot read properties of undefined (reading 'map')" often occurs when trying to map over an array (`itemCards`) that is undefined. To prevent this error, it's crucial to ensure that `itemCards` is defined and is an array before attempting to use the `map` function.

You can utilize optional chaining (?.) to check if `itemCards` is defined before calling the `map` function. Below is an example implementation in JSX:

```jsx
{itemCards?.map((item) => (
  <li key={item?.card?.info?.id}>
    {item.card.info.name} Rs- {item.card.info.price}
  </li>
))}



