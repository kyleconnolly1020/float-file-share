import React from "react";
import "./Search.css";

class Search extends React.Component {
    render() {
        return (
            <span id="searchBar">
                <input type="search" placeholder="Search" />
            </span>
        );
    }
}

export default Search;