import React, { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="search-container">
                <input type="search" className="search-panel form-control" placeholder="Search..." />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">All</button>
                    <button type="button" className="btn btn-light">Active</button>
                    <button type="button" className="btn btn-light">Done</button>
                </div>
            </div>
        );
    }
}

export default SearchPanel;
