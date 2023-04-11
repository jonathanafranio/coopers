import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ToDo from "./ToDo";

import { editList1, editList2, clearList1, clearList2 } from '@/store/actions/lists'
const SectionToDo = (props) => {
    const dispatch = useDispatch();
    const { title, description } = props;

    const { user } = useSelector((state: any) => state.user);
    const lists = useSelector((state: any) => state.lists);
    const [first_list, second_list] = [lists.list_1, lists.list_2];

    const removeItem = (id_list, remove) => {
        if(!user) return;
        if(!id_list) return;
        if(!remove) return;
        if(!Array.isArray(remove)) return;

        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: JSON.stringify({ remove })
        };
        
        fetch("http://localhost:8800/list", requestOptions)
            .then(r => r.json())
            .then(result => {
                console.log({ result })
                let list_rm = id_list == 1 ? first_list : second_list;
                remove.forEach(rmm => {
                    const index_list = list_rm.findIndex((item) => item.id == rmm)
                    if(index_list < 0) return;
                    list_rm.splice(index_list, 1);
                });
                id_list == 1 ? dispatch(editList1(list_rm)) : dispatch(editList2(list_rm))
            })
            .catch(e =>{
                console.log(`erro ao requisitar a remoção de [${remove.join(', ')}]: `, e);
            })
    }
    
    return (
        <section id="to-do" className="to-do">
            { title ? (
                <div className="to-do__header">
                    <div className="to-do__header-txt">
                        <h2 className="to-do__header-title">{ title }</h2>
                        { description ? (
                            <p className="to-do__header-p">{ description }</p>            
                        ) : false }
                    </div>
                </div>
            ) : false }

            <div className="to-do__container">               
                <ToDo id_list={ 1 } user={ user } removeFn={ removeItem } list={ first_list } />
                <ToDo id_list={ 2 } user={ user } removeFn={ removeItem } list={ second_list } />
            </div>
        </section>
    )
}
export default SectionToDo