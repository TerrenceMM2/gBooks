import React from 'react'

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
    }
}

export default function ListItem(props) {
    let button;

    if (props.page === "search") {
        button = <button onClick={props.handlerSaveBook} value={props.id} style={styles.button} className="btn btn-warning"><i class="far fa-lg fa-save"></i></button>
    } else if (props.page === "saved") {
        button = <button onClick={props.handlerDeleteBook} value={props.id} style={styles.button} className="btn btn-danger"><i class="fas fa-lg fa-trash-alt"></i></button>
    }; 


    return (
        <div key={props.id} style={styles.row} className="row">
            <div className="col-2">
                <img src={props.image}  alt={`${props.title} book cover"`} />
            </div>
            <div className="col-10" style={styles.infoContainer}>
                <a href={props.link} target="_blank" rel="noopener noreferrer"><p>{props.title}</p></a>
                { props.authors !== undefined 
                ? <p>{props.authors.map(author => {return <span>{author} | </span>})}</p>
                : <p>No authors provided.</p>
                }
                <p>{props.description}</p>
                {button}
            </div>
        </div>
    )
}
