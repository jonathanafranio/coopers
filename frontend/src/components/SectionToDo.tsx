import ToDo from "./ToDo";
const SectionToDo = (props) => {
    const { title, description, first_list, second_list, login } = props;
    const user = login ? login.id : null;
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