import React, { Component } from "react";
import "./SearchPanel.css";

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        };
        this.buttons = [
            { name: "all", label: "All" },
            { name: "active", label: "Active" },
            { name: "done", label: "Done" },
        ];
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
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const btnClass = isActive ? "btn-primary" : "btn-light";
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${btnClass}`}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            );
        });

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
                    {buttons}
                </div>
            </div>
        );
    }
}

export default SearchPanel;
