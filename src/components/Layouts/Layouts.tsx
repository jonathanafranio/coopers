import React from "react"

const Layouts = (props) => {
    return(
        <>
            <main className="container">
                { props.children }
            </main>
        </>
    )
}