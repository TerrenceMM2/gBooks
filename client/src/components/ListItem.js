import React from 'react'

export default function ListItem(props) {
    return (
        <div>
            <img src={props.image} />
            <a href={props.link} target="_blank" alt={`${props.link} + " book cover"`}><p>{props.title}</p></a>
            <p>{props.authors.map(author => {return <p>{author}</p>})}</p>
            <p>{props.description}</p>
        </div>
    )
}
