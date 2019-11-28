import React, { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        };
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        const { onSearchChange } = this.props;
        this.setState({
            term,
        });
        onSearchChange(term);
    };

    render() {
        const { term } = this.state;

        return (
            <div className="search-container">
                <input
                    type="search"
                    className="search-panel form-control"
                    placeholder="Search..."
                    value={term}
                    onChange={this.onSearchChange}
                />
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">
                        All
                    </button>
                    <button type="button" className="btn btn-light">
                        Active
                    </button>
                    <button type="button" className="btn btn-light">
                        Done
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchPanel;
