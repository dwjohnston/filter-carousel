import {createSelector} from 'reselect';


const getItems = state => state.popularItems;

const getSearchTerm = state => state.searchTerm;

export const filterItemsByLocation = createSelector(
  [getSearchTerm, getItems],
  (searchTerm, items) => { 
    
    if (!searchTerm) {
      return items;
    }

    else return items.filter((item) => {
      return item.location.includes(searchTerm); 
    });
  }
)