export const todos = (state = [], action) => {
    switch(action.type){
        case 'SHOW_ALL': return state;
        case 'ADD_TODO':
            return [
                ...state,
<<<<<<< 21e975da869ea60ab00763cd2d869011ee14b581
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
=======
                action.text
            ];
>>>>>>> Refactor and Rewrite the new todo application
        default: return state;
    }
}