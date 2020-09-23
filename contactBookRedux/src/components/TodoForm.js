import React, { Component } from 'react';

import {connect} from "react-redux";
import {addTodo} from "../redux/actions"

import styles from './TodoForm.module.css'

export class TodoForm extends Component {
    state = {
        text: "",
        surname: "",
        number: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const todo = {
            id: Date.now(),
            title: this.state.text,
            surname: this.state.surname,
            number: this.state.number
        };
        
        this.props.addTodo(todo);
        
        this.setState({
            text: "",
            surname: "",
            number: ""
        })
    }

    handleInput = (e) => {
        const text = e.target.value;
        this.setState({
            text: text
        });
    }

    handleInputSurname = (e) => {
        const surname = e.target.value;
        this.setState({surname});
    }

    handleInputNumber = (e) => {
        const number = e.target.value;
        this.setState({number});
    }

    render() {
        return (
            <div className = {styles.container}>
                <h1>Contact Book Redux</h1>
                <form className = {styles.addForm} onSubmit = {this.handleSubmit}>
                    <input 
                        onChange = {this.handleInput}
                        value = {this.state.text} 
                        className = {styles.addInp} 
                        type = "text" 
                        placeholder = "name..."
                        required 
                    />
                    <input 
                        onChange = {this.handleInputSurname}
                        value = {this.state.surname} 
                        className = {styles.addInp} 
                        type = "text" 
                        placeholder = "surname..."
                        required 
                    />
                    <input 
                        onChange = {this.handleInputNumber}
                        value = {this.state.number} 
                        className = {styles.addInp} 
                        type = "number" 
                        placeholder = "number..."
                        required 
                    />
                    <div className = {styles.mainButtons}>
                        <button className = {styles.myBtn} type = "submit">Submit</button>
                        <button className = {styles.myBtn} type = "reset">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.todo;
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTodo: todo => dispatch(addTodo(todo)),
//     }
// }

export default connect(mapStateToProps, { addTodo }) (TodoForm)
