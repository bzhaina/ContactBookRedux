import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm'


class Todo extends React.Component{

    render(){
        return(
            <div className = "todo">
                <TodoForm  />
                <TodoList />
            </div>
        )
    }
}

export default Todo;
















// constructor(probs){
//     super(probs);
//     console.log("CONSTRUCTOR");

//     // this.handleChangeStatus = this.handleChangeStatus.bind(this); //? Нужно если функция обычная, чтобы не потерять контекст.

//     // this.state = {} //? Нельзя
//     // this.setState() //! Можно

//     // this.state = {
//     //     bool: probs.bool
//     // }
// }


// componentDidMount(){ //? Вызывается один раз после конструктора и render
//     console.log("MOUNT");
//     // this.setState() //? Можно. 
// }

// componentDidUpdate(prevProps, prevState){ //? Вызывается каждый раз когда компонент обновился
//     console.log("UPDATED", prevProps, prevState);

//     // this.setState()//! вызывать нельзя

//     if(prevState.todos.length > this.state.todos.length){
//         console.log("todos - 1");
//         // this.setState()//? Можно
//     }
// }

// shouldComponentUpdate(nextProbs, nextState){//? Вызывается перед обновлением 
//     console.log("SHOULD_UPDATE", nextProbs, nextState);

//     // let nextStatus = nextState.todos[1].status;
//     // let status = this.state.todos[1].status;

//     // if(nextStatus === false && nextStatus !==status){
//     //     return false;
//     // }
//     return true;
// }

// componentWillUnmount(){//? вызывается когда собирается исчезнуть
//     console.log("UNMPONT");
// }

