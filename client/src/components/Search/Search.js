import React from "react";
import "./Search.css";
import axios from "axios";

class Search extends React.Component { 
    state = {
        inputValue: ''
    }

    updateInputValue = event => {
        this.setState({
            inputValue: event.target.value
        });
        console.log(this.state.inputValue);
    }

    searchAPI = inputValue => {
        axios.get(`/api/users/search/${inputValue}`)
            .then(response => this.props.searchUsersUpdate(response.data))
            .catch(function (error) {
                console.log(error);
            })
    }

    handleFormSubmit = event => {
        
        event.preventDefault();
        console.log("test");
        this.searchAPI(this.state.inputValue);
    }

    render() {
        return (
            <span id="searchBar">
                <form onSubmit={this.handleFormSubmit}>
                <input value={this.state.inputValue} onChange={this.updateInputValue} type="search" placeholder="Search"
                     />
                </form>
            </span>
        );
    }
}

export default Search;