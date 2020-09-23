//? rfce - React Function Component
//? rce = React Class Component

import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {deleteTodo, editTodo} from "../redux/actions"


function TodoItem(props) {
    const [title, setTitle] = useState(props.item.title);
    const [surname, setSurname] = useState(props.item.surname);
    const [number, setNumber] = useState(props.item.number);
    const [isEdit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const classList = ["todo-list__item"];
    if(props.item.status){
        classList.push("checked");
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        dispatch(deleteTodo(props.item.id));
    }

    const handleEdit = (e) => {
        e.stopPropagation();
        setEdit(!isEdit);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        
        dispatch(editTodo({
            ...props.item,
            title: title,
            surname: surname,
            number: number
        }))
        setEdit(false);
    }

    const handleEditInput = (e) => {
        setTitle(e.target.value);
    }

    const handleEditInputSurname = (e) => {
        setSurname(e.target.value);
    }

    const handleEditInputNumber = (e) => {
        setNumber(e.target.value);
    }
    
    return (
        <li 
            className={classList.join(" ")}
        >
            <div>
                {isEdit ? (
                    <form className = "edit-form" onClick = {e => e.stopPropagation()} onSubmit = {handleEditSubmit}>
                        <input 
                            className = "edit-inp"
                            value = {title} 
                            onChange = {handleEditInput} 
                            type = "text" 
                            required
                        />
                        <input 
                            className = "edit-inp"
                            value = {surname} 
                            onChange = {handleEditInputSurname} 
                            type = "text" 
                            required
                        />
                        <input 
                            className = "edit-inp"
                            value = {number} 
                            onChange = {handleEditInputNumber} 
                            type = "number" 
                            required
                        />
                        <div>
                            <button className = "edit-form-btn" type="submit">Submit</button>
                            <button className = "edit-form-btn" onClick = {() => setEdit(false)} type="reset">Cancel</button>
                        </div>
                    </form>
                ) : (
                    // props.item.title + " " + props.item.surname
                <div>
                    <div className = "items">{"name:   " + props.item.title}</div>
                    <div className = "items">{"surname:   " + props.item.surname}</div>
                    <div className = "items">{"number:   " + props.item.number}</div>
                </div>
                )}
            </div>
            <div className = "innerButtons">
                <button onClick={handleEdit} className = "btn-edit todo-item__btn">
                    &#x270E;
                </button>
                <button onClick = {handleDelete} className = "btn-del todo-item__btn">
                    &#x2716;
                </button>
            </div>
        </li>
    )
}

export default TodoItem
