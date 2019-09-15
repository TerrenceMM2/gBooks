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

    componentDidMount() {
        API.getBooks().then(res => this.setState({books: res.data}))
            .catch(err => console.log(err));
    }

    handlerCloseModal = () => {
        this.setState({
            modalShow: false
        });
    };

    handlerDeleteBook = event => {
        API.deleteBook(event.target.value).then(res => 
            this.setState({
                modalTitle: res.data.message,
                modalBody: "Book successfully deleted.",
                modalShow: true
            })
        ).catch(err => {
            this.setState({
                modalTitle: "Uh oh",
                modalBody: "Sorry for the inconvenience. Please try again later.",
                modalShow: true
            })
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
