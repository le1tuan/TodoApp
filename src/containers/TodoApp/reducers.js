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