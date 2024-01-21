import React from "react"
import ReactDOM from "react-dom/client"



const Header = ()=>{
     return (
       <div className="header">
         <div className="logo-container">
           <img
             className="logo"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTeCjHOeaBtOLYRJ0LdiG2-B49dfnEULULA&usqp=CAU"
           />
         </div>
         <div className="nav-items">
           <ul>
             <li>Home</li>
             <li>About US</li>
             <li>Contact Us</li>
             <li>Cart</li>
           </ul>
         </div>
       </div>
     );
}
const RestaurantCard =(props)=>{
     const{resData} = props;
     return (
       <div
         className="res-card"
         style={{
           backgroundColor: "#f0f0f0",
         }}
       >
         <img
           className="res-img"
           src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
         />
         <h3>{resData.card.card.info.name}</h3>
         <h4>{resData.card.card.info.cuisines}</h4>
         <h4>{resData.card.card.info.avgRating}</h4>
         <h4>26 minutes</h4>
       </div>
     );
}
 
const resObj ={
           "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "176267",
              "name": "Srinidhi Upachar",
              "cloudinaryImageId": "bhb7vveh3vlufijbgkfb",
              "locality": "Sarvagna Nagar",
              "areaName": "Banaswadi",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "South Indian"
              ],
              "avgRating": 4.4,
              "veg": true,
              "parentId": "20160",
              "avgRatingString": "4.4",
              "totalRatingsString": "5K+",
              "promoted": true,
              "adTrackingId": "cid=10759719~p=5~eid=0000018d-2cd5-cd28-70a8-d13e0092052a~srvts=1705854225704~83645",
              "sla": {
                "deliveryTime": 38,
                "lastMileTravel": 5.9,
                "serviceability": "SERVICEABLE",
                "slaString": "38 mins",
                "lastMileTravelString": "5.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-01-21 22:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                ]
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              
}
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=176267&source=collection&query=North%20Indian",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
const Body = ()=>{
     return (
       <div className="body">
         <div className="searchBar">SerachBar</div>
         <div className="res-container">
           {/* Restru component we have to do separte. */}
           <RestaurantCard  resData ={resObj} />
         </div>
       </div>
     );
}


const AppLayOut = ()=>{
    return (
      <div className="app">
        <Header />
        <Body/>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
