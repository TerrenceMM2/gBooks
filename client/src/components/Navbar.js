import React from 'react'

const styles = {
    icon : {
        marginRight: ".5rem"
    }
}

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img style={styles.icon} src="/favicon.ico" width="30" height="30" alt="gBooks Icon"/>
                gBooks</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Search</a>
                    <a className="nav-item nav-link" href="/saved">Saved</a>
                </div>
            </div>
        </nav>
    )
}
