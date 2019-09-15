import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import ResultsContainer from "../components/ResultsContainer";
import BookModal from "../components/BookModal";
import API from "../utils/API";

export default class Search extends Component {

    state = {
        books: [],
        searchTerm: "",
        modalTitle: "",
        modalBody: "",
        modalShow: false,
        loading: false
    };

    handlerSearchForBooks = () => {
        API.getBooks().then(res => this.setState({data: res}))
            .catch(err => console.log(err));
    };

    handlerInputChange = event => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    handlerFormSubmit = event => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        API.findBooks(this.state.searchTerm).then(res => {
            this.setState({
                books: res.data,
                loading: false
            });
        });
    };

    handlerSaveBook = event => {
        let savedBook = this.state.books.find(book => book.id === event.target.value);
        API.saveBook(savedBook).then(res => 
            this.setState({
                modalTitle: res.data.message,
                modalBody: "Go to the Saved page to see your saved books.",
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

    handlerCloseModal = () => {
        this.setState({
            modalShow: false
        });
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <Container loading={this.state.loading} searchTerm={this.state.searchTerm} handlerInputChange={this.handlerInputChange} handlerFormSubmit={this.handlerFormSubmit}/>
                <ResultsContainer handlerSaveBook={this.handlerSaveBook} books={this.state.books}/>
                <BookModal handlerCloseModal={this.handlerCloseModal} modalTitle={this.state.modalTitle} modalBody={this.state.modalBody} show={this.state.modalShow} />
            </div>
        )
    }
}
