const SectionToDo = (props) => {
    const { title, description, first_list, second_list } = props;
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
                <div className="to-do__list">
                    <h3 className="to-do__list-title">To-do</h3>

                    <span className="to-do__list-subtitle">
                        Take a breath. <br />
                        Start doing.
                    </span>
                    
                    <ul className="to-do__ul">
                        { first_list.map( (item: any) => (
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

                <div className="to-do__list -complete">
                    <h3 className="to-do__list-title">Done</h3>

                    <span className="to-do__list-subtitle">
                        Congratulions! <br />
                        <strong>You have done 5 tasks</strong>
                    </span>

                    <ul className="to-do__ul">
                        { second_list.map( (item: any) => (
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
            </div>
        </section>
    )
}
export default SectionToDo