import React from 'react'
import Form from "../components/Form";

const styles = {
    container : {
        marginBottom: "2rem"
    }
}

export default function Container(props) {
    return (
        <div style={styles.container} className="container">
            <Form searchTerm={props.searchTerm} handlerInputChange={props.handlerInputChange} handlerFormSubmit={props.handlerFormSubmit}/>
        </div>
    )
}
