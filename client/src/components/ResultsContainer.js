import React from 'react'

const styles = {
    container : {
        marginBottom: "2rem"
    }
}

export default function ResultsContainer(props) {
    return (
        <div style={styles.container} books={props.books} className="container">
            <h2>Results</h2>
        </div>
    )
}
