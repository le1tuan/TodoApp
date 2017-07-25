let id = 1;
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text: text,
        id: id++,
    }
}
export const showAll = () => {
    return {
        type: 'SHOW_ALL',
    }
}

export const toggle = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
    }
}