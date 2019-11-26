import React, { Component } from "react";
import "./ItemAddPanel.css";

class ItemAddPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { onItemAdd } = this.props;

        return (
            <div className="item-add-panel">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => onItemAdd("New Task")}
                >
                    Add Item
                </button>
            </div>
        );
    }
}

export default ItemAddPanel;
