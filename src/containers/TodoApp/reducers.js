import  { combineReducers } from 'redux'

export const todos = (state = [], action) => {
    switch(action.type){
        case 'SHOW_ALL': return state;
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(x => {
                if(x.id === action.id){
                    x.completed = !x.completed
                }
                return x
            });
        default: return state;
    }
}

export const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch(action.type){
        case 'SET_VISIBILITY_FILTER': return action.filter;
        default: return state;
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter,
});
export default todoApp;