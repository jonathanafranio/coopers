import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layouts = (props: object) => {
    return(
        <>
            <Header logged={ props.logged } />
            <main>
                { props.children }
            </main>
            <Footer />
        </>
    )
}

export default Layouts