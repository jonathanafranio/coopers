import React from "react"
import Header from "./Header"

const Layouts = (props: object) => {
    return(
        <>
            <Header />
            <main>
                { props.children }
            </main>
        </>
    )
}

export default Layouts