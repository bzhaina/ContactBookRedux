import {combineReducers} from "redux";
import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO
} from "./constants";

const INIT_TODO_STATE = {
    todos: [
        // {
        //     id: 0,
        //     name: "ais",
        //     surname: "but",
        //     number: "0009777666"
        // }
    ],

}

// //? Как должен выглядеть action
// action = {
//     type: "ADD_TODO", 
//     payload: {
//         id: 1,
//         title: "HELLO WORLD",
//         status: false
//     }
// }

const TodoReducer = (state = INIT_TODO_STATE, action) => {
    let todos = [...state.todos];
    switch (action.type) {
        case ADD_TODO:
            todos.push(action.payload);
            return {
                ...state, todos
            };
        case DELETE_TODO:
            todos = todos.filter(item => item.id !== action.payload);
            return {...state, todos};
        case EDIT_TODO:
            todos = todos.map(item => {
                if(item.id === action.payload.id) return action.payload
                return item
            })
            return {...state, todos};

        default: return state;
    }
}

export default combineReducers({
    todo: TodoReducer,
})