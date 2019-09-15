import React from 'react';
import ListItem from './ListItem';
import Alert from "react-bootstrap/Alert"

const styles = {
    container : {
        marginBottom: "2rem"
    }
}

export default function ResultsContainer(props) {
    
    let result;

    // Evaluates state of books array and provided appropriate component.
    if (props.books.length) {
        result = props.books.map(book => (<ListItem
            key={book.id} id={book.id}
            _id={book._id}
            page={props.page}
            handlerDeleteBook={props.handlerDeleteBook}
            handlerSaveBook={props.handlerSaveBook}
            description={book.description}
            link={book.link} title={book.title}
            authors={book.authors}
            image={book.image}
            />)
        )
    // If books array is empty and on the saved page.
    } else if (props.page === "saved") {
        result = <Alert variant="info">No saved books.</Alert>;
    // Else, empty <div>
    } else {
        result = <div></div>;
    };
        
    return (
        <div style={styles.container} className="container">
            {result}
        </div>
    )
}
