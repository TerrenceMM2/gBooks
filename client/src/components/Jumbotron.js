import React from 'react'

const styles = {
    title : {
        fontFamily: "Arvo",
    },
    white : {
        color: "white"
    },
    background : {
        backgroundImage: 'url("/book-stack.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "bottom",
        color: "white"
    }
}

export default function Jumbotron() {
    return (
        <div style={styles.background} className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 style={styles.title} className="display-4">gBooks</h1>
                <p className="lead">Search and save your favorite titles using the Google Books API.</p>
            </div>
        </div>
    )
}
