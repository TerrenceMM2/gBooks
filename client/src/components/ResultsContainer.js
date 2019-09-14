import React from 'react'
import ListItem from './ListItem'

const styles = {
    container : {
        marginBottom: "2rem"
    }
}

export default function ResultsContainer(props) {
    return (
        <div style={styles.container} books={props.books} className="container">
            {props.books.map(book => (<ListItem key={book.id} description={book.volumeInfo.description} link={book.volumeInfo.infoLink} title={book.volumeInfo.title} authors={book.volumeInfo.authors} image={book.volumeInfo.imageLinks.smallThumbnail}/>))}
        </div>
    )
}
