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
<<<<<<< 21e975da869ea60ab00763cd2d869011ee14b581
}

export const toggle = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id
    }
=======
>>>>>>> Refactor and Rewrite the new todo application
}