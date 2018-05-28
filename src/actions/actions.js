import * as ActionTypes from "./actionTypes";


export function populatePopularItemsAction(data) {
  return {
    type: ActionTypes.POPULATE_POPULAR_ITEMS,
    data: data,
  };
}

export function populateFeaturedItemsAction(data) {
  return {
    type: ActionTypes.POPULATE_FEATURED_ITEMS,
    data: data,
  };
}

export function fetchPopularItemsAction() {

  /*
    These could just as easily be fetch requests - but I'm not sure how long that data is going to be up, etc. 

  */
  return dispatch => {

    new Promise((res, rej) => {
      res([{
        "title": "Middle Harbour Yacht Club",
        "img": "https://placeimg.com/640/480/animals",
        "location": "The Spit, Sydney NSW"
      }, {
        "title": "Boat Licence Course",
        "img": "https://placeimg.com/640/480/animals",
        "location": "Maritime Training School, Sydney "
      }, {
        "title": "Corporate Boat Charter",
        "img": "https://placeimg.com/640/480/animals",
        "location": "Sydney Harbor Escapes, Sydney"
      }, {
        "title": "Pro.Formance Boat Repairs",
        "img": "https://placeimg.com/640/480/animals",
        "location": "Sydney"
      }, {
        "title": "King St Warf",
        "img": "https://placeimg.com/640/480/animals",
        "location": "Sydney"
      }]
      );
    }).then(data => {
      dispatch(populatePopularItemsAction(data))
    }, err => {
      //handle error
    })
  }
}

export function fetchFeaturedItemsAction() {

  return dispatch => {

    new Promise((res, rej) => {
      res([{
        "title": "Lake Glenbawn",
        "img": "https://placeimg.com/183/173/animals",
        "location": "NSW, Australia"
      }, {
        "title": "Whitsundays",
        "img": "https://placeimg.com/183/173/animals",
        "location": "Queensland, Australia"
      }, {
        "title": "Kimberley",
        "img": "https://placeimg.com/183/173/animals",
        "location": "Western Australia"
      }, {
        "title": "Cairns",
        "img": "https://placeimg.com/183/173/animals",
        "location": "Queensland, Australia"
      }, {
        "title": "Rottnest Island",
        "img": "https://placeimg.com/183/173/animals",
        "location": "Western Australia"
      }]
      );
    }).then(data => {
      dispatch(populateFeaturedItemsAction(data))
    }, err => {
      //handle error
    })
  }
}

export function updateSearchAction(searchString) {

  return {
    type: ActionTypes.UPDATE_SEARCH,
    searchTerm: searchString
  }
}