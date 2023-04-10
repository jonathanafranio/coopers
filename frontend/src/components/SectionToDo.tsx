import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ToDo from "./ToDo";

import { loginUser } from '../store/actions/user'
import { editList1, editList2, clearList1, clearList2 } from '@/store/actions/lists'
const SectionToDo = (props) => {
    const dispatch = useDispatch();
    const { title, description } = props;

    const { user } = useSelector((state: any) => state.user);
    const lists = useSelector((state: any) => state.lists);
    const [first_list, second_list] = [lists.list_1, lists.list_2];
    
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
                <ToDo id_list={ 1 } user={ user } list={ first_list } />
                <ToDo id_list={ 2 } user={ user } list={ second_list } />
            </div>
        </section>
    )
}
export default SectionToDo