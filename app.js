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
     const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}= resData?.info;
     return (
       <div
         className="res-card"
         style={{
           backgroundColor: "#f0f0f0",
         }}
       >
         <img
           className="res-img"
           src={
             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId
           }
         />
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{resData.info.sla.deliveryTime}</h4>
       </div>
     );
}
 
const resList =   [
                  {
                    "info": {
                      "id": "280216",
                      "name": "Lavonne",
                      "cloudinaryImageId": "udzufnegmtvimdypnfbk",
                      "locality": "Indiranagar",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹1000 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "10530",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 22:40:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                            "description": "OnlyOnSwiggy"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "263261",
                      "name": "Toit",
                      "cloudinaryImageId": "gvlu8pqongufuvaplc6z",
                      "locality": "Indiranagar",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹1000 for two",
                      "cuisines": [
                        "American",
                        "Italian",
                        "Pastas",
                        "Pizzas"
                      ],
                      "avgRating": 4.4,
                      "parentId": "21013",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 11:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/toit-indiranagar-bangalore-263261",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "38721",
                      "name": "Sri Udupi Park",
                      "cloudinaryImageId": "doebubaa0vo8tkrd8cz7",
                      "locality": "Murgesh Pallya",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "South Indian",
                        "Chinese",
                        "Chaat",
                        "North Indian"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "4284",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 22:15:00",
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
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/sri-udupi-park-murgesh-pallya-indiranagar-bangalore-38721",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "444178",
                      "name": "Magnolia Bakery",
                      "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
                      "locality": "JK Plaza",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.6,
                      "parentId": "267303",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 19,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "19 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 00:30:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                            "shortDescription": "Perfect Cake Delivery",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                  "shortDescription": "Perfect Cake Delivery"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/magnolia-bakery-jk-plaza-indiranagar-bangalore-444178",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "50840",
                      "name": "Third Wave Coffee",
                      "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
                      "locality": "Indiranagar",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Beverages",
                        "Bakery",
                        "Continental"
                      ],
                      "avgRating": 4.4,
                      "parentId": "274773",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 24,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "24 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/third-wave-coffee-indiranagar-bangalore-50840",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "223964",
                      "name": "Flax - Healthy Living",
                      "cloudinaryImageId": "d17ef449a6ef26cfd930406e0462d4ee",
                      "locality": "HAL 3rd Stage",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Salads",
                        "Healthy Food"
                      ],
                      "avgRating": 4.5,
                      "parentId": "80553",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 33,
                        "lastMileTravel": 2.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "33 mins",
                        "lastMileTravelString": "2.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/flax-healthy-living-hal-3rd-stage-indiranagar-bangalore-223964",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "17377",
                      "name": "Glen's Bakehouse",
                      "cloudinaryImageId": "xeb9pnx0vz6kaz4minjd",
                      "locality": "2nd stage",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Beverages",
                        "Continental",
                        "Italian"
                      ],
                      "avgRating": 4.5,
                      "parentId": "3220",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 00:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/glens-bakehouse-2nd-stage-indiranagar-bangalore-17377",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "42149",
                      "name": "Asha Sweet Center - Since 1951",
                      "cloudinaryImageId": "zkqpwids2gbvhyufilja",
                      "locality": "Binnamangala",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Sweets",
                        "Snacks",
                        "Fast Food",
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Thalis",
                        "North Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "472555",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "0.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 21:45:00",
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
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/asha-sweet-center-since-1951-binnamangala-indiranagar-bangalore-42149",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "10239",
                      "name": "Smoke House Deli",
                      "cloudinaryImageId": "kq0vnaoiadoufmrcneol",
                      "locality": "Indiranagar",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹800 for two",
                      "cuisines": [
                        "Italian",
                        "Continental",
                        "Fast Food",
                        "Salads",
                        "Healthy Food",
                        "Pizzas",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "874",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 1.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35 mins",
                        "lastMileTravelString": "1.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/smoke-house-deli-indiranagar-bangalore-10239",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "220772",
                      "name": "Aubree",
                      "cloudinaryImageId": "ef3aec85c38da87938b4e3c5a3028cd9",
                      "locality": "Craig Park Layout",
                      "areaName": "Central Bangalore",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "3807",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/aubree-craig-park-layout-central-bangalore-bangalore-220772",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "91103",
                      "name": "Brik Oven - Original Sourdough Pizzas",
                      "cloudinaryImageId": "cfd91d48ef7c4056be69ec15720f03e7",
                      "locality": "HAL 2nd Stage",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹700 for two",
                      "cuisines": [
                        "Italian",
                        "Pizzas",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "parentId": "488952",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 23,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "23 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 23:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/brik-oven-original-sourdough-pizzas-hal-2nd-stage-indiranagar-bangalore-91103",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "24990",
                      "name": "Bhartiya Jalpan",
                      "cloudinaryImageId": "cjwrgp1gmeu2nn5bcbyy",
                      "locality": "Indiranagar",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "Beverages",
                        "Chaat"
                      ],
                      "avgRating": 4.3,
                      "parentId": "7518",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 28,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "28 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/bhartiya-jalpan-indiranagar-bangalore-24990",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "224120",
                      "name": "Lo! - Low Carb and Keto Foods",
                      "cloudinaryImageId": "ktryhvbqg9igsrimzej7",
                      "locality": "Indiranagar",
                      "areaName": "HAL 2ND STAGE",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Healthy Food",
                        "Keto",
                        "North Indian",
                        "Continental"
                      ],
                      "avgRating": 4.5,
                      "parentId": "8282",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 22,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "22 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-indiranagar-hal-2nd-stage-bangalore-224120",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "364569",
                      "name": "Chai Point",
                      "cloudinaryImageId": "ry2vdvwpwwwcgwodycyt",
                      "locality": "1st Stage",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "South Indian",
                        "Punjabi",
                        "Chaat",
                        "Indian",
                        "American",
                        "North Indian",
                        "Fast Food",
                        "Desserts",
                        "Cafe",
                        "Healthy Food",
                        "Home Food"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1607",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 0.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "0.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/chai-point-1st-stage-indiranagar-bangalore-364569",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "217505",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
                      "locality": "Appareddy Palya",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.4,
                      "parentId": "281782",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "27 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-appareddy-palya-indiranagar-bangalore-217505",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23423",
                      "name": "Samosa Party",
                      "cloudinaryImageId": "tjvc0aazurmha5ovsazb",
                      "locality": "HAL 3rd Stage",
                      "areaName": "Jeevan Bima Nagar",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Fast Food",
                        "Snacks",
                        "Beverages",
                        "Chaat",
                        "North Indian",
                        "Street Food",
                        "Sweets",
                        "Desserts",
                        "Punjabi",
                        "Bakery"
                      ],
                      "avgRating": 4.3,
                      "parentId": "6364",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-29 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/samosa-party-hal-3rd-stage-jeevan-bima-nagar-bangalore-23423",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "395246",
                      "name": "McDonald's Gourmet Burger Collection",
                      "cloudinaryImageId": "aq6xwfwvz0zyr7s9dpdq",
                      "locality": "Signature Mall",
                      "areaName": "Cv Raman Nagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.5,
                      "parentId": "10761",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-22 23:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-signature-mall-cv-raman-nagar-bangalore-395246",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "19386",
                      "name": "WarmOven Cake & Desserts",
                      "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
                      "locality": "2nd stage",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts",
                        "Ice Cream",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "9696",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "26 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-2nd-stage-indiranagar-bangalore-19386",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "59801",
                      "name": "Indiana Burgers",
                      "cloudinaryImageId": "h3g8hqh8txova02g4v5y",
                      "locality": "2nd stage",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹150 for two",
                      "cuisines": [
                        "Burgers",
                        "American",
                        "Fast Food",
                        "Beverages",
                        "Desserts"
                      ],
                      "avgRating": 4.1,
                      "parentId": "5714",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 05:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/indiana-burgers-2nd-stage-indiranagar-bangalore-59801",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "490568",
                      "name": "NOTO - Ice Creams & Desserts",
                      "cloudinaryImageId": "81ac87e5c89c16adc867be38ce5a1ba3",
                      "locality": "1st Stage",
                      "areaName": "Indiranagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Desserts",
                        "Ice Cream"
                      ],
                      "avgRating": 4.6,
                      "veg": true,
                      "parentId": "468478",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "500+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-01-23 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "brand"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹120 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
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
                      "link": "https://www.swiggy.com/restaurants/noto-ice-creams-and-desserts-1st-stage-indiranagar-bangalore-490568",
                      "type": "WEBLINK"
                    }
                  }
                ]
const Body = ()=>{
     return (
       <div className="body">
         <div className="searchBar">SerachBar</div>
         <div className="res-container">
           {/* Restru component we have to do separte. */}
          {
               resList.map(restaurant => 
               <RestaurantCard key={restaurant.info.id} resData={ restaurant}/>)
          }
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
