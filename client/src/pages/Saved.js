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
    };

    componentDidMount() {
        API.getBooks().then(res => this.setState({books: res}))
            .catch(err => console.log(err));
    }

    handlerCloseModal = () => {
        this.setState({
            modalShow: false
        });
    };

    render() {
        return (
            <div>
                <Jumbotron />
                <ResultsContainer />
                <BookModal />
            </div>
        )
    };
}
