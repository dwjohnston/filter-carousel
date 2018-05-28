import { createSelector } from 'reselect'
​
const getSearchTerm = state => state.searchTerm
const getItems = state => state.popularItems
​
export const getVisibleTodos = createSelector(
  [getSearchTerm, getItems],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }
)