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

    if (props.books.length) {
        result = props.books.map(book => (<ListItem
            key={book.id} id={book.id}
            page={props.page}
            handlerDeleteBook={props.handlerDeleteBook}
            handlerSaveBook={props.handlerSaveBook}
            description={book.description}
            link={book.link} title={book.title}
            authors={book.authors}
            image={book.image}
            />)
        )
    } else if (props.page === "saved") {
        result = <Alert variant="info">No saved books.</Alert>;
    } else {
        result = <div></div>;
    };
        
    return (
        <div style={styles.container} className="container">
            {result}
        </div>
    )
}
