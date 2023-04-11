import React, { useState, useEffect } from "react"

import ModalAdd from "./ModalAdd";

const ToDo = (props) => {
    const { list, id_list, user, removeFn, editFn } = props;
    
    const [completeList, setCompleteList] = useState(false);
    const [modalAdd, setModalAdd] = useState(false);
    
    const isComplete = () => {
        const list_complete = list.length > 0 ? list.every((item) => item.checked) : false;
        setCompleteList(list_complete);
    }

    const addNew = (e) => {
        e.preventDefault();
        if(!user) return;

        setModalAdd(true);
        
    }

    useEffect(() => {
        isComplete()
    }, [props])
    useEffect(() => {
        isComplete()
    }, [])    
    return(
        <div className={ completeList ? 'to-do__list -complete' : 'to-do__list' }>
            <h3 className="to-do__list-title">{ completeList ? 'Done' : 'To-do' }</h3>

            { completeList ? (
                <span className="to-do__list-subtitle">
                    Congratulions! <br />
                    <strong>You have done { list.length } tasks</strong>
                </span>
            ) : (
                <span className="to-do__list-subtitle">
                    Take a breath. <br />
                    Start doing.
                </span>
            ) }

            <ul className="to-do__ul">
                <li className="to-do__li">
                    <a href="#" className="to-do__add" onClick={ e => addNew(e) }>add a new task</a>
                </li>
                { list.map( (item: any) => (
                    <li key={ item.id } className="to-do__li">
                        <input 
                            type="checkbox" 
                            value={ item.checked } 
                            defaultChecked={ item.checked } 
                            id={ item.id } 
                            onClick={ e => editFn(id_list, item.id, e.target.checked) } />

                        <label htmlFor={ item.id } className="to-do__label">
                            <span>{ item.description }</span>
                        </label>
                        { /* removeItem = (id_list, remove)  */ }
                        <button className="to-do__del" onClick={ _ => removeFn(id_list, [item.id]) }>delete</button>
                    </li>
                ) ) }
            </ul>

            <button className="to-do__earse-all">erase all</button>
            
            { modalAdd ? (<ModalAdd list_id={ id_list } user={ user.id } close_fun={ setModalAdd } />) : false }

        </div>
    )
}

export default ToDo