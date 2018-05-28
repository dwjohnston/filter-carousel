import { createSelector } from 'reselect'
​
const getSearchTerm = state => state.searchTerm
const getItems = state => state.popularItems
​
export const getVisibleTodos = createSelector(
  [getSearchTerm, getItems],
  (searchTerm, items) => {
    
    return items.filter((item) => {
      return item.location.includes(searchTerm); 
    });

  }
)