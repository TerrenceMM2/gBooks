import React from 'react';
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const styles = {
    spinner: {
        width: "1.3rem",
        height: "1.3rem"
    }
}

export default function Form(props) {
    let button;

    if (props.loading) {
        button = <Button variant="primary"><Spinner style={styles.spinner} animation="grow" size="sm" variant="light" /> Loading</Button>
    } else {
        button = <Button onClick={props.handlerFormSubmit} variant="primary">Search</Button>
    }; 

    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input value={props.searchTerm} onChange={props.handlerInputChange} type="text" className="form-control" id="search" aria-describedby="searchHelp" placeholder='"Harry Potter"' />
                <small id="searchHelp" className="form-text text-muted">Search for your favorite book title or author.</small>
            </div>
            {button}
        </form>
    )
}
