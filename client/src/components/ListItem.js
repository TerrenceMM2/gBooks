import React from 'react';
import Button from "react-bootstrap/Button";

const styles = {
    infoContainer : {
        display : "inline-block"
    },
    row : {
        marginBottom : "2rem"
    },
    button : { 
        position : "absolute",
        top : 0,
        right : 0
    },
    title : {
        display: "inline-block",
        fontWeight: "bold"
    }
}

export default function ListItem(props) {
    let button;

    if (props.page === "search") {
        button = <Button onClick={props.handlerSaveBook} value={props.id} style={styles.button} variant="warning"><i className="far fa-lg fa-save"></i></Button>
    } else if (props.page === "saved") {
        button = <Button onClick={props.handlerDeleteBook} value={props._id} style={styles.button} variant="danger"><i className="fas fa-lg fa-trash-alt"></i></Button>
    }; 


    return (
        <div key={props.id} style={styles.row} className="row">
            <div className="col-2">
                <img src={props.image}  alt={`${props.title} book cover"`} />
            </div>
            <div className="col-10" style={styles.infoContainer}>
                <a href={props.link} target="_blank" rel="noopener noreferrer"><p style={styles.title}>{props.title}</p></a>
                { props.authors !== undefined 
                ? <p>{props.authors.map(author => {return <span><em>{author}</em>&nbsp;&nbsp;|&nbsp;&nbsp;</span>})}</p>
                : <p>No authors provided.</p>
                }
                <p>{props.description}</p>
                {button}
            </div>
        </div>
    )
}
