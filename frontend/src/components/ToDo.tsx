import React, { useState, useEffect } from "react"

const ToDo = (props) => {
    //const [list, setList] = useState(props.list);
    const list = props.list;
    const [completeList, setCompleteList] = useState(false);
    
    const isComplete = () => {
        const list_complete = list.every((item) => item.checked);
        setCompleteList(list_complete);
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
            ): (
                <span className="to-do__list-subtitle">
                    Take a breath. <br />
                    Start doing.
                </span>
            ) }

            <ul className="to-do__ul">
                { list.map( (item: any) => (
                    <li key={ item.id } className="to-do__li">
                        <input 
                            type="checkbox" 
                            value={ item.checked } 
                            defaultChecked={ item.checked } 
                            id={ item.id } 
                            onClick={ e => alert(e.target.value) } />

                        <label htmlFor={ item.id } className="to-do__label">
                            <span>{ item.description }</span>
                        </label>
                        <button className="to-do__del">delete</button>
                    </li>
                ) ) }
            </ul>

            <button className="to-do__earse-all">erase all</button>
        </div>
    )
}

export default ToDo