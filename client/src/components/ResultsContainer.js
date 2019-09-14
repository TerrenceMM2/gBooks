import React from 'react'
import ListItem from './ListItem'

const styles = {
    container : {
        marginBottom: "2rem"
    }
}

export default function ResultsContainer(props) {
    return (
        <div style={styles.container} className="container">
            {props.books.map(book => (<ListItem key={book.id} description={book.description} link={book.link} title={book.title} authors={book.authors} image={book.image}/>))}
        </div>
    )
}
