import React from 'react'

export default function Form(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="search">Search</label>
                <input value={props.searchTerm} onChange={props.handlerInputChange} type="text" className="form-control" id="search" aria-describedby="searchHelp" placeholder='"Harry Potter"' />
                <small id="searchHelp" className="form-text text-muted">Search for your favorite book title or author.</small>
            </div>
            <button onClick={props.handlerFormSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
