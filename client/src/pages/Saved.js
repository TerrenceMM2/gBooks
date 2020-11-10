import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import ResultsContainer from "../components/ResultsContainer";
import BookModal from "../components/BookModal";
import API from "../utils/API";

export default class Saved extends Component {

    state = {
        books: [],
        modalTitle: "",
        modalBody: "",
        modalShow: false,
        page: "saved"
    };

    handlerLoadBooks = () => {
        API.getBooks().then(res => this.setState({books: res.data}))
        .catch(err => console.log(err));
    }

    // Will call GET Books API once Saved page component is loaded.
    componentDidMount() {
        this.handlerLoadBooks()
    }

    handlerCloseModal = () => {
        this.setState({
            modalShow: false
        });
    };

    // Handles Delete API and what is shown in modal.
    // Deletes item based on Mongo Object ID.
    handlerDeleteBook = event => {
        API.deleteBook(event.currentTarget.value).then(res => {
            console.log(res);
            this.handlerLoadBooks();
            this.setState({
                modalTitle: "Deleted!",
                modalBody: "Book successfully deleted.",
                modalShow: true
            })
        }).catch(err => {
            this.setState({
                modalTitle: "Uh oh",
                modalBody: "Sorry for the inconvenience. Please try again later.",
                modalShow: true
            })
            console.log(err);
        });
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <ResultsContainer
                    handlerDeleteBook={this.handlerDeleteBook}
                    page={this.state.page}
                    books={this.state.books}
                />
                <BookModal
                    handlerCloseModal={this.handlerCloseModal}
                    modalTitle={this.state.modalTitle}
                    modalBody={this.state.modalBody}
                    show={this.state.modalShow}
                />
            </div>
        )
    };
}
