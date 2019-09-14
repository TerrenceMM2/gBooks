import React, { Component } from 'react';
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container"
import ResultsContainer from "../components/ResultsContainer"
import API from "../utils/API";

export default class Search extends Component {

    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        image: "",
        link: "",
        searchTerm: ""
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
        API.findBooks(this.state.searchTerm).then(res => {
            this.setState({
                books: res.data
            })
        })
      };

    render() {
        return (
            <div>
                <Jumbotron />
                <Container searchTerm={this.state.searchTerm} handlerInputChange={this.handlerInputChange} handlerFormSubmit={this.handlerFormSubmit}/>
                <ResultsContainer books={this.state.books}/>
            </div>
        )
    }
}
