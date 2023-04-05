import ToDo from "./ToDo";
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
                <ToDo list={ first_list } />
                <ToDo list={ second_list } />
            </div>
        </section>
    )
}
export default SectionToDo