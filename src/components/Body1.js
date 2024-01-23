import RestaurantCard from "../components/Restaurant";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //Local State Variable = Super powerful variable.
  const [listOfRestaurants, setListofRestaturants] = useState([
    {
      info: {
        id: "280216",
        name: "Lavonne",
        cloudinaryImageId: "udzufnegmtvimdypnfbk",
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹1000 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 3,
        parentId: "10530",
        avgRatingString: "4.6",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-22 22:40:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "280216",
        name: "Lavonne",
        cloudinaryImageId: "udzufnegmtvimdypnfbk",
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹1000 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        parentId: "10530",
        avgRatingString: "4.6",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-22 22:40:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "280216",
        name: "Lavonne",
        cloudinaryImageId: "udzufnegmtvimdypnfbk",
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹1000 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        parentId: "10530",
        avgRatingString: "4.6",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-22 22:40:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "280216",
        name: "Lavonne",
        cloudinaryImageId: "udzufnegmtvimdypnfbk",
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹1000 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        parentId: "10530",
        avgRatingString: "4.6",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-01-22 22:40:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
        type: "WEBLINK",
      },
    },
  ]);

  //  // NOrmal js function.
  //  let listOfRestaurants = [{

  //  }]
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filtered logic here...
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofRestaturants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* Restru component we have to do separte. */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
